import pandas as pd
import re
from datetime import datetime
import json
import os
from concurrent.futures import ThreadPoolExecutor
from typing import Dict, List, Tuple, Optional
import time
from sqlalchemy import inspect
import random

def read_and_transform_excel(file_path: str) -> List[Dict]:
    df = pd.read_excel(file_path, header=None, nrows=213)

    stock_code_row = df[df.iloc[:, 0] == 'Mã CK'].index[0]
    quarter_year_row = stock_code_row + 1
    announce_date_row = df[df.iloc[:, 0] == 'Ngày công bố báo cáo'].index[0]

    def process_column(col: int) -> Optional[Dict]:
        stock_code = df.iloc[stock_code_row, col]
        if pd.isna(stock_code):
            return None

        quarter_year = df.iloc[quarter_year_row, col]
        if 'tháng' in str(quarter_year) or 'Năm' in str(quarter_year):
            return None

        quarter, year = parse_quarter_year(quarter_year)

        announce_date = df.iloc[announce_date_row, col]
        announce_date = datetime.strptime(announce_date, '%d-%m-%Y').strftime('%Y-%m-%d')

        data = {
            'stock_code': stock_code,
            # 'report_type': report_type,
            'quarter': quarter,
            'year': year,
            'announce_date': announce_date
        }

        data.update({
            f'ck_{row + 1}': str(round(float(str(value).replace(',', '')) / 1000000000) if pd.notna(value) else 0)
            for row, value in enumerate(df.iloc[15:, col], start=15)
        })

        # Add new calculated column
        data['ck_c_01'] = str(round(float(data['ck_101']) - float(data['ck_18']) - float(data['ck_25']) - float(data['ck_26']) - float(data['ck_27']) - float(data['ck_28'])))
        data['ck_c_02'] = str(round(float(data['ck_149']) - float(data['ck_152']) - float(data['ck_155']) - float(data['ck_165']) - float(data['ck_170'])))
        data['ck_c_03'] = data['ck_101']

        # Add dummy random number data to ck_c_01 to ck_c_40

        for i in range(1, 41):
            key = f'ck_c_{i:02d}'
            if key not in data:
                data[key] = str(round(random.uniform(-1000, 1000), 2))


        return data

    with ThreadPoolExecutor() as executor:
        result = list(filter(None, executor.map(process_column, range(1, df.shape[1]))))

    return result

def parse_quarter_year(quarter_year: str) -> Tuple[str, str, str]:
    if 'Quý' in quarter_year:
        quarter, year = map(str, re.findall(r'\d+', quarter_year))
    else:
        raise ValueError(f"Unexpected quarter/year format: {quarter_year}")

    # return quarter, year
    return quarter, year

def save_to_json(data: List[Dict], output_file: str) -> None:
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Data saved to {output_file}")
    print()

def save_to_postgresql(data: List[Dict], engine) -> None:
    df = pd.DataFrame(data)
    table_name = 'chung_khoan_report'

    # Check if the table exists, if not create it
    inspector = inspect(engine)
    if table_name not in inspector.get_table_names():
        df.head(0).to_sql(table_name, engine, if_exists='replace', index=False)

    # Get existing data from the database
    try:
        existing_data = pd.read_sql_table(table_name, engine)
    except ValueError:
        existing_data = pd.DataFrame(columns=df.columns)

    # Identify new records
    df['key'] = df['stock_code'] + df['quarter'] + df['year']
    existing_data['key'] = existing_data['stock_code'] + existing_data['quarter'] + existing_data['year']

    new_records = df[~df['key'].isin(existing_data['key'])].drop('key', axis=1)

    # Insert only new records
    if not new_records.empty:
        new_records.to_sql(table_name, engine, if_exists='append', index=False)

    print("Data has been successfully saved to PostgreSQL!")
    print()

if __name__ == "__main__":
    start_time = time.time()

    import sys

    if len(sys.argv) > 1 and sys.argv[1]:
        file_path = sys.argv[1]
    else:
        file_path = 'C:\projects\chills\\temp\Chung_Khoan_raw.xlsx'

    transformed_data = read_and_transform_excel(file_path)

    end_time = time.time()
    execution_time = end_time - start_time
    print(f"Total transform time: {execution_time:.2f} seconds")
    print()

    # Save to JSON
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(script_dir, 'transformed_data_out.json')
    save_to_json(transformed_data, output_file)

    end_time2 = time.time()
    execution_time = end_time2 - end_time
    print(f"Total save_to_json time: {execution_time:.2f} seconds")
    print()

    # Save to PostgreSQL
    from sqlalchemy import create_engine

    db_config = {
        'username': 'postgres',
        'password': '',
        'host': 'localhost',
        'port': '5432',
        'database': 'postgres'
    }

    connection_string = f"postgresql://{db_config['username']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database']}"
    engine = create_engine(connection_string)

    with engine.connect() as connection:
        print("Successfully connected to the database!")
        print()
        save_to_postgresql(transformed_data, engine)

    end_time = time.time()
    execution_time = end_time - start_time
    print(f"Total execution time: {execution_time:.2f} seconds")
    print()