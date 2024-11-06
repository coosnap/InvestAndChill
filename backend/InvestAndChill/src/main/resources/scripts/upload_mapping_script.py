import os
import re
from typing import Tuple

import pandas as pd

from sqlalchemy import inspect, create_engine, text
db_config = {
        'username': 'myuser',
        'password': 'secret',
        'host': 'localhost',
        'port': '5432',
        'database': 'mydatabase'
}

connection_string = f"postgresql://{db_config['username']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database']}"
engine = create_engine(connection_string)

# file_path = 'C:\projects\chills\TEMPLATE DATA VISUAL\PHI TAI CHINH\mapping table.xlsx'
file_path = 'c:\projects\chills\TEMPLATE DATA VISUAL\mapping table_cal_visual_5-11-2024.xlsx'
def fiin_map():
    table_name = 'phi_tai_chinh_fiin_map'
    # table_name = 'ngan_hang_fiin_map'
    # table_name = 'chung_khoan_fiin_map'
    sheet = 'phitaichinh'
    # sheet = 'nganhang'
    # sheet = 'chungkhoan'

    # Read specific columns from row 5 to the end
    df = pd.read_excel(file_path, sheet_name=sheet, usecols=[1, 2, 4], skiprows=3, header=None)

    # Rename columns
    df.columns = ['row_index', 'sheet_index', 'code']

    df.to_sql(table_name, engine, if_exists='append', index=False)
    print(f"Inserted {len(df)} new records.")
    print("Data has been successfully saved to the database for fiin map")

def vs_map():
    table_name = 'phi_tai_chinh_vietstock_map'
    # table_name = 'ngan_hang_vietstock_map'
    # table_name = 'chung_khoan_vietstock_map'
    sheet = 'phitaichinh'
    # sheet = 'nganhang'
    # sheet = 'chungkhoan'

    # Read specific columns from row 5 to the end
    df = pd.read_excel(file_path, sheet_name=sheet, usecols=[4, 5], skiprows=3, header=None)

    # Rename columns
    df.columns = ['code', 'row_index']

    df.to_sql(table_name, engine, if_exists='append', index=False)
    print(f"Inserted {len(df)} new records.")
    print("Data has been successfully saved to the database for vietstock")

if __name__ == "__main__":
    # fiin_map()
    vs_map()

