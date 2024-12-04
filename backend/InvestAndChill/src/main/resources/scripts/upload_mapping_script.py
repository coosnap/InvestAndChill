import pandas as pd
from sqlalchemy import create_engine, Column, Integer, VARCHAR, inspect, MetaData, Table, Numeric
db_config = {
    'username': 'myuser',
    'password': 'secret',
    'host': 'localhost',
    'port': '5432',
    'database': 'mydatabase'
}
# db_config = {
#     'username': 'u5njifacefuq5b',
#     'password': 'pe18e1299ede0f0c814d0ffb4a4a90812a968e581aef7a696f40c9969578b6606',
#     'host': 'ca8a5csd8gqht9.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
#     'port': '5432',
#     'database': 'd1re3fkrj0ginj'
# }

connection_string = f"postgresql://{db_config['username']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database']}"
engine = create_engine(connection_string)

# file_path = 'C:\projects\chills\TEMPLATE DATA VISUAL\PHI TAI CHINH\mapping table.xlsx'
# file_path = 'c:\projects\chills\TEMPLATE DATA VISUAL\mapping table_cal_visual_5-11-2024.xlsx'
file_path = 'c:\projects\chills\mapping table_26-11-2024.xlsx'

def fiin_map(table_name, sheet):
    table_name = table_name + '_fiin_map'

    # Read specific columns from row 4 to the end
    df = pd.read_excel(file_path, sheet_name=sheet, usecols=[1, 2, 4], skiprows=3, header=None)

    # Create table with specific columns type
    columns = [Column('row_index', Integer), Column('sheet_index', Integer), Column('code', VARCHAR(length=15))]
    inspector = inspect(engine)
    if table_name not in inspector.get_table_names():
        metadata = MetaData()
        Table(table_name, metadata, *columns)
        metadata.create_all(engine)

    # Rename columns for df
    df.columns = ['row_index', 'sheet_index', 'code',]
    df.to_sql(table_name, engine, if_exists='append', index=False)
    print(f"Inserted {len(df)} new records.")
    print("Data has been successfully saved to the database for fiin map")

def vs_map(table_name, sheet):
    table_name = table_name + '_vietstock_map'

    # Read specific columns from row 4 to the end
    df = pd.read_excel(file_path, sheet_name=sheet, usecols=[4, 5], skiprows=3, header=None)

    # Create table with specific columns type
    columns = [Column('code', VARCHAR(length=15)), Column('row_index', Integer)]
    inspector = inspect(engine)
    if table_name not in inspector.get_table_names():
        metadata = MetaData()
        Table(table_name, metadata, *columns)
        metadata.create_all(engine)

    # Rename columns for df
    df.columns = ['code', 'row_index']

    df.to_sql(table_name, engine, if_exists='append', index=False)
    print(f"Inserted {len(df)} new records.")
    print("Data has been successfully saved to the database for vietstock")


if __name__ == "__main__":
    table_name = 'phi_tai_chinh'
    sheet = 'phitaichinh'

    # table_name = 'ngan_hang'
    # sheet = 'nganhang'

    # table_name = 'chung_khoan'
    # sheet = 'chungkhoan'

    fiin_map(table_name, sheet)
    vs_map(table_name, sheet)