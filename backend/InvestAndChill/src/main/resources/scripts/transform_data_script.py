import pandas as pd
import re
import json
import os
from typing import Dict, List, Tuple
import time
from sqlalchemy import VARCHAR, MetaData, inspect, create_engine, text, Column, Table, Text, Float

db_config = {
        'username': 'myuser',
        'password': 'secret',
        'host': 'localhost',
        'port': '5432',
        'database': 'mydatabase'
}


connection_string = f"postgresql://{db_config['username']}:{db_config['password']}@{db_config['host']}:{db_config['port']}/{db_config['database']}"
engine = create_engine(connection_string)

# file_path = 'C:\projects\chills\Phitaichinh\ctcp1.xlsx'
# file_path = 'C:\projects\chills\TEMPLATE DATA VISUAL\PHI TAI CHINH\Phi Tai Chinh_raw.xlsx'
# file_path = "C:\projects\chills\TEMPLATE DATA VISUAL\PHI TAI CHINH\FiinProX_DuLieuTaiChinh_BaoCaoTaiChinh_Quarterly_CTR_20241030.xlsx"
# file_path = "c:\projects\chills\TEMPLATE DATA VISUAL\PHI TAI CHINH\FiinPro_BCTC_FRT_hopnhat_2022_0_tyvnd_04_25_202311286223 - Copy.xlsm"
# file_path = "c:\projects\chills\TEMPLATE DATA VISUAL\PHI TAI CHINH\Phi Tai Chinh_raw.xlsx"
# file_path = "C:\projects\chills\TEMPLATE DATA VISUAL\\NGAN HANG\BaoCaoTaiChinh_Quarterly_ACB_raw.xlsx"
# file_path = "C:\projects\chills\TEMPLATE DATA VISUAL\CHUNG KHOAN\FiinProX_DuLieuTaiChinh_BaoCaoTaiChinh_Quarterly_SSI_20241101.xlsx"
# file_path = "c:\projects\chills\ctcp\ctcp1.xlsx"

# testing
# file_path = "c:\projects\chills\\test_data\phi_tai_chinh\\2022_2024q2\\2022_2024q2\ctcp4.xlsx"
# file_path = "c:\projects\chills\\test_data\phi_tai_chinh\FiinProX_DuLieuTaiChinh_BaoCaoTaiChinh_Quarterly_CTR_20241030.xlsx"
# file_path = "c:\projects\chills\\test_data\phi_tai_chinh\CTR_2022_2024q3.xlsx"

def parse_quarter_year(date_str: str) -> Tuple[str, str]:
    if 'Quý' in date_str:
        quarter, year = map(str, re.findall(r'\d+', date_str))
    elif 'tháng' in date_str:
        months, year = map(str, re.findall(r'\d+', date_str))
        # quarter = months // 3
        quarter = months
    elif 'Năm' in date_str:
        quarter = None
        year = str(re.findall(r'\d+', date_str)[0])
    else:
        raise ValueError(f"Unexpected quarter/year format: {date_str}")
    
    return quarter, year

def remove_month_data(transformed_data: List[Dict]) -> List[Dict]:
        return [item for item in transformed_data if item['quarter'] not in ['6', '9']]
    
def check_table_exists(table_name: str, engine) -> bool:
        inspector = inspect(engine)
        return inspector.has_table(table_name)
    
def parse_quarter_year_fiin(date_str):
    if isinstance(date_str, (int, float)):
        quarter = None
        year = str(date_str)
    elif isinstance(date_str, str):
        if date_str.isdigit():
            quarter = None
            year = str(date_str)
        else:
            quarter, year = map(str, re.findall(r'\d+', date_str))
    else:
        raise ValueError("Invalid input type for date_str")
    return quarter, year

phi_tai_chinh_columns_names_cal = ['p_p_3', 'p_p_5', 'p_p_23',  'p_c_2', 'p_p_10', 'p_p_11', 'p_i_31', 'p_i_16', 'p_b_38', 'p_p_4', 'p_b_18', 'p_i_13', 'p_i_14', 'p_i_18', 'p_b_66', 'p_i_20', 'p_i_10', 'p_i_21', 'p_b_48', 'p_b_52', 'p_i_33', 'p_i_53', 'p_i_7']
phi_tai_chinh_negate_codes = ['p_p_4', 'p_p_7', 'p_p_8', 'p_p_10', 'p_p_11', 'p_p_14', 'p_p_18', 'p_p_19']
def phi_tai_chinh_table_columns(df: pd.DataFrame) -> List[Column]:
    columns = [
        Column('stock_code', VARCHAR(length=20)),
        Column('quarter', VARCHAR(length=1)),
        Column('year', VARCHAR(length=4)),
        Column('p_a_1', Text),
        Column('p_a_2', Text),
        Column('p_a_3', Text),
    ]
    
    for column in df.columns:
        if column not in ['stock_code', 'quarter', 'year', 'p_a_1', 'p_a_2', 'p_a_3']:
            columns.append(Column(column, Float(precision=48)))
    return columns

chung_khoan_columns_names_cal = ['p_p_3', 'p_p_5', 'p_p_23',  'p_c_2', 'p_p_10', 'p_p_11', 'p_p_17', 'p_p_8', 'p_b_2', 'p_b_5']
chung_khoan_negate_codes = ['', '', '', '', '']
def chung_khoan_table_columns(df: pd.DataFrame) -> List[Column]:
    columns = [
        Column('stock_code', VARCHAR(length=20)),
        Column('quarter', VARCHAR(length=1)),
        Column('year', VARCHAR(length=4)),
        Column('c_a_1', Text),
        Column('c_a_2', Text),
        Column('c_a_3', Text),
    ]
    
    for column in df.columns:
        if column not in ['stock_code', 'quarter', 'year', 'c_a_1', 'c_a_2', 'c_a_3']:
            columns.append(Column(column, Float(precision=48)))
    return columns

ngan_hang_columns_names_cal = ['p_p_3', 'p_p_5', 'p_p_23',  'p_c_2', 'p_p_10', 'p_p_11', 'p_p_17', 'p_p_8', 'p_b_2', 'p_b_5']
ngan_hang_negate_codes = ['', '', '', '', '']
def ngan_hang_table_columns(df: pd.DataFrame) -> List[Column]:
    columns = [
        Column('stock_code', VARCHAR(length=20)),
        Column('quarter', VARCHAR(length=1)),
        Column('year', VARCHAR(length=4)),
        Column('b_a_1', Text),
        Column('b_a_2', Text),
        Column('b_a_3', Text),
    ]
    
    for column in df.columns:
        if column not in ['stock_code', 'quarter', 'year', 'b_a_1', 'b_a_2', 'b_a_3']:
            columns.append(Column(column, Float(precision=48)))
    return columns

def phi_tai_chinh_calculate_data(rs: List[Dict], combine_data: List[Dict]) -> List[Dict]:
    for item in rs:
        if item['quarter'] is not None:
            item['p_i_1'] = extract_sum_previous_quarters(item, combine_data, 'p_p_3')
            item['p_i_2'] = extract_sum_previous_quarters(item, combine_data, 'p_p_5')
            item['p_i_3'] = extract_sum_previous_quarters(item, combine_data, 'p_p_23')
            item['p_i_4'] = extract_sum_previous_quarters(item, combine_data, 'p_c_2')
            
            i_9_1 = extract_sum_previous_quarters(item, combine_data, 'p_p_10') or 0
            i_9_2 = extract_sum_previous_quarters(item, combine_data, 'p_p_11') or 0
            item['p_i_9'] = i_9_1 + i_9_2 # if i_9_1 is not None and i_9_2 is not None else None
            
            i_10_1 = item['p_p_17'] or 0
            i_10_2 = item['p_p_8'] or 0
            item['p_i_10'] = i_10_1 + i_10_2 #if item['p_p_17'] is not None and item['p_p_8'] is not None else None
            
            i_11_1 = item['p_b_2'] or 0
            i_11_2 = item['p_b_5'] or 0
            item['p_i_11'] = i_11_1 + i_11_2 # if item['p_b_2'] is not None and item['p_b_5'] is not None else None
            
            i_12_1 = item['p_b_9'] or 0
            i_12_2 = item['p_b_28'] or 0
            item['p_i_12'] = i_12_1 + i_12_2 #item['p_b_9'] + item['p_b_28'] if item['p_b_9'] is not None and item['p_b_28'] is not None else None
            
            i_13_1 = item['p_b_10'] or 0
            i_13_2 = item['p_b_29'] or 0
            item['p_i_13'] = i_13_1 + i_13_2  #item['p_b_10'] + item['p_b_29'] if item['p_b_10'] is not None and item['p_b_29'] is not None else None
            
            i_14_1 = extract_sum_previous_quarters(item, combine_data, 'p_b_18', 1) or 0
            i_14_2 = item['p_b_18'] or 0
            i_14_3 = i_14_1 - i_14_2 # if i14_1 is not None and item['p_b_18'] is not None else None
            item['p_i_14'] = i_14_2 - i_14_3 # if i14_2 is not None else None
            
            i_15_1 = item['p_b_66'] or 0
            i_15_2 = item['p_i_11'] or 0
            i_15_3 = item['p_i_12'] or 0
            i_15_4 = item['p_b_18'] or 0
            i_15_5 = item['p_b_36'] or 0
            i_15_6 = item['p_b_47'] or 0
            i_15_7 = item['p_b_50'] or 0
            item['p_i_15'] = i_15_1 - i_15_2 - i_15_3 - i_15_4 - i_15_5 - i_15_6 - i_15_7 # if item['p_b_4'] is not None and item['p_i_11'] is not None and item['p_i_12'] is not None and item['p_b_18'] is not None and item['p_b_36'] is not None  and item['p_b_47'] is not None  and item['p_b_50'] is not None else None
            
            i_16_1 = item['p_b_78'] or 0
            i_16_2 = item['p_b_91'] or 0
            item['p_i_16'] = i_16_1 + i_16_2 # if item['p_b_78'] is not None and item['p_b_91'] is not None else None
            
            i_17_1 = item['p_i_16'] or 0
            i_17_2 = item['p_b_67'] or 0
            item['p_i_17'] = i_17_1 - i_17_2 # if item['p_i_16'] is not None and item['p_b_67'] is not None else None
            
            i_18_1 = item['p_b_69'] or 0
            i_18_2 = item['p_b_84'] or 0
            item['p_i_18'] = i_18_1 + i_18_2 # if item['p_b_69'] is not None and item['p_b_84'] is not None else None
            
            i_19_1 = item['p_b_98'] or 0
            i_19_2 = item['p_b_100'] or 0
            i_19_3 = item['p_b_113'] or 0
            item['p_i_19'] = i_19_1 - i_19_2 - i_19_3 # if item['p_b_98'] is not None and item['p_b_100'] is not None and item['p_b_113'] is not None else None
            
            i_20_1 = item['p_b_98'] or 0
            i_20_2 = item['p_b_116'] or 0
            item['p_i_20'] = i_20_1 - i_20_2 # if item['p_b_98'] is not None and item['p_b_116'] is not None else None
            
            item['p_i_22'] = item['p_p_5'] / item['p_p_3'] if item['p_p_5'] is not None and item['p_p_3'] != 0 and item['p_p_3'] is not None else None
            item['p_i_23'] = item['p_p_23'] / item['p_p_3'] if item['p_p_23'] is not None and item['p_p_3'] != 0 and item['p_p_3'] is not None else None
            
            i_25_1 = item['p_p_5'] or 0
            i_25_2 = item['p_p_10'] or 0
            i_25_3 = item['p_p_11'] or 0
            item['p_i_25'] = i_25_1 - i_25_2 - i_25_3 # if item['p_p_5'] is not None and item['p_p_10'] is not None and item['p_p_11'] is not None else None
            
            i_26_1 = item['p_p_6'] or 0
            i_26_2 = item['p_p_7'] or 0
            item['p_i_26'] = i_26_1 - i_26_2 # if item['p_p_6'] is not None and item['p_p_7'] is not None else None
            
            # i_27_1 = item['p_c_21'] or 0
            # i_27_2 = item['p_c_22'] or 0
            item['p_i_27'] = (item['p_c_21'] or 0) + (item['p_c_22'] or 0) # if item['p_c_21'] is not None and item['p_c_22'] is not None else None
            
            item['p_i_28'] = item['p_i_2'] / item['p_i_1'] if item['p_i_2'] is not None and item['p_i_1'] != 0 and item['p_i_1'] is not None else None
            item['p_i_29'] = item['p_i_9'] / item['p_i_1'] if item['p_i_9'] is not None and item['p_i_1'] != 0 and item['p_i_1'] is not None else None
            
            i_31_1 = item['p_b_1'] or 0
            i_31_2 = item['p_i_11'] or 0
            i_31_3 = item['p_b_78'] or 0
            i_31_4 = item['p_b_91'] or 0
            item['p_i_31'] = i_31_1 - i_31_2 - (i_31_3 - i_31_4) # if item['p_b_1'] is not None and item['p_i_11'] is not None and item['p_b_78'] is not None and item['p_b_91'] is not None else None
            
            i_32_1 = extract_sum_previous_quarters(item, combine_data, 'p_i_31', 1) or 0
            i_32_2 = item['p_i_31'] or 0
            i_32_3 = i_32_1 - i_32_2 # if i32_1 is not None and item['p_i_31'] is not None else None
            item['p_i_32'] = i_32_2 - i_32_3 # if item['p_i_31'] is not None and i32_2 is not None else None
            
            i_33_1 = item['p_p_23'] or 0
            i_33_2 = item['p_c_2'] or 0
            i_33_3 = item['p_i_32'] or 0
            item['p_i_33'] = i_33_1 + i_33_2 - i_33_3 # if item['p_p_23'] is not None and item['p_c_2'] is not None and item['p_i_32'] is not None else None
            
            item['p_i_34'] = item['p_b_78'] / item['p_b_98'] if item['p_b_98'] != 0 and item['p_b_98'] is not None and item['p_b_78'] is not None else None
            item['p_i_35'] = item['p_b_91'] / item['p_b_98'] if item['p_b_98'] != 0 and item['p_b_98'] is not None and item['p_b_91'] is not None else None
            
            i_36_1 = item['p_i_34'] or 0
            i_36_2 = item['p_i_35'] or 0
            item['p_i_36'] = i_36_1 + i_36_2 # if item['p_i_34'] is not None and item['p_i_35'] is not None else None
            
            i_37_1 = extract_sum_previous_quarters(item, combine_data, 'p_i_16', 1) or 0 # sum 1 quý trước + quý hiện tại
            i_37_2 = item['p_p_8'] or 0
            i_37_3 = i_37_1 / 2
            item['p_i_37'] = i_37_2 * 4 / i_37_3 if i_37_3 != 0 else None
            
            i_38_1 = item['p_i_17'] or 0
            i_38_2 = item['p_i_12'] or 0
            item['p_i_38'] = i_38_1 - i_38_2 # if item['p_i_17'] is not None and item['p_i_12'] is not None else None
            
            i_39_1 = extract_sum_previous_quarters(item, combine_data, 'p_b_38', 1) or 0
            i_39_2 = item['p_b_38'] or 0
            i_39_3 = i_39_1 - i_39_2 # if i39_1 is not None and item['p_b_38'] is not None else None
            item['p_i_39'] = i_39_2 - i_39_3 # if item['p_b_38'] is not None and i39_2 is not None else None
            
            
            i40_1 = extract_sum_previous_quarters(item, combine_data, 'p_p_4') or 0
            i40_2 = extract_sum_previous_quarters(item, combine_data, 'p_b_18') or 0
            i40_2_2 = i40_2 / 4 # if i40_2 is not None else None
            item['p_i_40'] = i40_1 / i40_2_2 if i40_2_2 != 0 else None
            
            i41_1 = extract_sum_previous_quarters(item, combine_data, 'p_p_3') or 0
            i41_2 = extract_sum_previous_quarters(item, combine_data, 'p_i_13') or 0
            i41_2_2 = i41_2 / 4 # if i41_2 is not None else None
            item['p_i_41'] = i41_1 / i41_2_2 if i41_2_2 != 0 else None
            
            i42_1 = extract_sum_previous_quarters(item, combine_data, 'p_p_4') or 0
            i42_2 = extract_sum_previous_quarters(item, combine_data, 'p_i_14') or 0
            i42_3 = extract_sum_previous_quarters(item, combine_data, 'p_i_18') or 0
            i42_3_2 = i42_3 / 4 #if i42_3 is not None else None
            item['p_i_42'] = (i42_1 + i42_2) / i42_3_2 if i42_3_2 != 0 and i42_3_2 is not None else None
            
            item['p_i_43'] = 365 / item['p_i_40'] if item['p_i_40'] != 0 and item['p_i_40'] is not None else None
            item['p_i_44'] = 365 / item['p_i_41'] if item['p_i_41'] != 0 and item['p_i_41'] is not None else None
            item['p_i_45'] = 365 / item['p_i_42'] if item['p_i_42'] != 0 and item['p_i_42'] is not None else None
            item['p_i_46'] = item['p_i_3'] / item['p_i_1'] if item['p_i_1'] != 0 and item['p_i_1'] is not None else None
            
            i47_1 = extract_sum_previous_quarters(item, combine_data, 'p_b_66') or 0
            i47_1_2 = i47_1 / 4 # if i47_1 is not None else None
            item['p_i_47'] = item['p_i_1'] / i47_1_2 if i47_1_2 != 0 and i47_1_2 is not None else None
            
            i48_1 = extract_sum_previous_quarters(item, combine_data, 'p_b_66') or 0
            i48_1_2 = i48_1 / 4 # if i48_1 is not None else None
            i48_2 = extract_sum_previous_quarters(item, combine_data, 'p_i_20') or 0
            i48_2_2 = i48_2 / 4 # if i48_2 is not None else None
            item['p_i_48'] = i48_1_2 / i48_2_2 if i48_2_2 != 0 and i48_2_2 is not None else None
            
            i49_1 = extract_sum_previous_quarters(item, combine_data, 'p_i_16') or 0
            i49_1_2 = i49_1 / 4 #if i49_1 is not None else None
            i49_2 = extract_sum_previous_quarters(item, combine_data, 'p_i_20') or 0
            i49_2_2 = i49_2 / 4 #if i49_2 is not None else None
            item['p_i_49'] = (i49_1_2 + i49_2_2) / i49_2_2 if i49_2_2 != 0 and i49_2_2 is not None else None
            
            item['p_i_5'] = extract_sum_previous_quarters(item, combine_data, 'p_i_10') # sum 3 quý trước + quý hiện tại
            
            i6_1 = extract_sum_previous_quarters(item, combine_data, 'p_i_20') or 0
            i6_1_2 = i6_1 / 4 #if i6_1 is not None else None
            item['p_i_6'] = item['p_i_3'] / i6_1_2 if i6_1_2 != 0 and i6_1_2 is not None else None
            
            i_7_1 = item['p_i_10'] or 0
            i_7_2 = item['p_c_2'] or 0
            item['p_i_7'] = i_7_1 + i_7_2 # if item['p_i_10'] is not None and item['p_c_2'] is not None else None
            
            i_8_1 = item['p_i_16'] or 0
            i_8_2 = item['p_i_11'] or 0
            item['p_i_8'] = i_8_1 - i_8_2 # if item['p_i_16'] is not None and item['p_i_11'] is not None else None
            
            i_21_1 = item['p_b_98'] or 0
            i_21_2 = item['p_i_8'] or 0
            item['p_i_21'] = i_21_1 + i_21_2 # if item['p_b_98'] is not None and item['p_i_8'] is not None else None
    
            i24_1 = extract_sum_previous_quarters(item, combine_data, 'p_i_21') or 0
            i24_2 = i24_1 / 4 #if i24_1 is not None else None
            item['p_i_24'] = item['p_i_10'] * 0.8 / i24_2 if item['p_i_10'] is not None and i24_2 != 0 and i24_2 is not None else None
            
            item['p_i_30'] = item['p_i_5'] / item['p_i_1'] if item['p_i_5'] is not None and item['p_i_1'] != 0 and item['p_i_1'] is not None else None
            
            i50_1 = extract_sum_previous_quarters(item, combine_data, 'p_b_48', 1) or 0
            i50_2 = i50_1 - (item['p_b_48'] or 0) #if i50_1 is not None and item['p_b_48'] is not None else None
            item['p_i_50'] = (item['p_b_48'] or 0) - i50_2 #if item['p_b_48'] is not None and i50_2 is not None else None
            
            i51_1 = extract_sum_previous_quarters(item, combine_data, 'p_b_52', 1) or 0
            i51_2 = i51_1 - (item['p_b_52'] or 0) #if i51_1 is not None and item['p_b_52'] is not None else None
            item['p_i_51'] = (item['p_b_52'] or 0) - i51_2 #if item['p_b_52'] is not None and i51_2 is not None else None
            
            item['p_i_52'] = (item['p_i_39'] or 0) + (item['p_i_50'] or 0) + (item['p_i_51'] or 0) # if item['p_i_39'] is not None and item['p_i_50'] is not None and item['p_i_51'] is not None else None
             
            item['p_i_53'] = (item['p_i_33'] or 0) - (item['p_i_52'] or 0) # if item['p_i_33'] is not None and item['p_i_52'] is not None else None
             
            i54_1 = get_previous_quarters_count(item, combine_data, item['stock_code'])
            # if item['stock_code'] == 'CTR':
            #     print(f"i54_1(count): {i54_1}, stock_code: {item['stock_code']}, quarter: {item['quarter']}, year: {item['year']}, p_i_33: {item['p_i_33']}")
            i54_2 = extract_sum_previous_quarters(item, combine_data, 'p_i_33', i54_1, True)
            # if item['stock_code'] == 'CTR':
            #     print(f"i54_2: {i54_2}, quarter: {item['quarter']}, year: {item['year']}")
            item['p_i_54'] = i54_2
            
            
            i55_1 = get_previous_quarters_count(item, combine_data, item['stock_code'])
            # if item['stock_code'] == 'CTR':
            #     print(f"i55_1(count): {i55_1}, stock_code: {item['stock_code']}, quarter: {item['quarter']}, year: {item['year']}, p_i_53: {item['p_i_53']}")
            i55_2 = extract_sum_previous_quarters(item, combine_data, 'p_i_53', i55_1, True)
            # if item['stock_code'] == 'CTR':
            #     print(f"i55_2: {i55_2}, quarter: {item['quarter']}, year: {item['year']}")
            item['p_i_55'] = i55_2
            
            item['p_i_56'] = extract_sum_previous_quarters(item, combine_data, 'p_i_7')
            item['p_i_57'] = item['p_i_56'] / item['p_i_1'] if item['p_i_56'] is not None and item['p_i_1'] != 0 and item['p_i_1'] is not None else None
    return rs;

def phi_tai_chinh_handle_missing_data(rs: List[Dict], combine_data: List[Dict]):
    for item in rs:
        if item['quarter'] == '2' or item['quarter'] == '3' or item['quarter'] == '4':
            data1, data2 = find_month_year_datas(item, combine_data)
            for i in range(1, 42):
                key = f'p_c_{i}'
                item[key] = (data1[key] or 0) - (data2[key] or 0)

def find_month_year_datas(input, data):
    if input['quarter'] == '2':
        quarter1 = '6'
        quarter2 = '1'
    if input['quarter'] == '3':
        quarter1 = '9'
        quarter2 = '6'
    if input['quarter'] =='4':
        quarter1 = None
        quarter2 = '9'
    
    key1 = (input['stock_code'], quarter1, input['year'])
    key2 = (input['stock_code'], quarter2, input['year'])
    return next((item for item in data if (item['stock_code'], item['quarter'], item['year']) == key1), None), next((item for item in data if (item['stock_code'], item['quarter'], item['year']) == key2), None)


def extract_data_source(df: pd.DataFrame) -> str:
    if df.apply(lambda row: row.astype(str).str.contains("đá quý", case=False).any(), axis=1).any() and df.apply(lambda row: row.astype(str).str.contains("tín dụng", case=False).any(), axis=1).any():
        return "ngan_hang"
    elif df.apply(lambda row: row.astype(str).str.contains("FVTPL", case=True).any(), axis=1).any() and df.apply(lambda row: row.astype(str).str.contains("HTM", case=True).any(), axis=1).any():
        return "chung_khoan"
    else:
        return "phi_tai_chinh"

def get_mapping_table_name(data_source: str, isFiin: bool) -> str:
    mapping = "vietstock_map"
    if isFiin:
        mapping = "fiin_map"
    return data_source + "_" + mapping;

def get_table_columns(df: pd.DataFrame, data_source: str) -> List[Column]:
    if data_source == "phi_tai_chinh":
        return phi_tai_chinh_table_columns(df)
    if data_source == "ngan_hang":
        return ngan_hang_table_columns(df)
    else:
        return chung_khoan_table_columns(df)

def check_file_from_fiin(file_path: str) -> bool:
    excel_file = pd.ExcelFile(file_path)
    sheet_names = excel_file.sheet_names
    return True if len(sheet_names) == 4 else False

def get_data_from_db(table_name: str, stock_codes, columns, engine) -> List[Dict]:
    where_clause = "WHERE stock_code IN :stock_codes"
    query = "SELECT stock_code, quarter, year, " + ", ".join(columns) + "\nFROM\n"
    query = query + table_name + "\n" + where_clause + "\nORDER BY stock_code, year, quarter ASC"
    query = text(query)
    
    with engine.connect() as connection:
        result = connection.execute(query, {'stock_codes': tuple(stock_codes)})
        return [dict(zip(result.keys(), row)) for row in result]
    
def get_previous_quarters_count(item, combine_data, stock_code):
    sorted_data = sorted([x for x in combine_data if x['quarter'] is not None and x['quarter'] not in ['6', '9']], key=lambda x: (int(x['year']), int(x['quarter'])))
    
    earliest_data = next((item for item in sorted_data if item['stock_code'] == stock_code), None)
    if not earliest_data:
        return 0
    
    earliest_quarter = int(earliest_data['quarter'])
    earliest_year = int(earliest_data['year'])
    
    quarters_diff = (int(item['year']) - earliest_year) * 4 + (int(item['quarter']) - earliest_quarter)
    
    return max(0, quarters_diff)

def extract_sum_previous_quarters(data, combine_data, cal_col, previous_number=3, is_sum_all = False) -> float:
    stock_code = data['stock_code']
    current_quarter = int(data['quarter'])
    current_year = int(data['year'])
    # if stock_code == 'CTR':
        # print(f"current_quarter: {current_quarter}, current_year: {current_year}, previous_number: {previous_number}")
    max_previous_quarters = get_previous_quarters_count(data, combine_data, stock_code)

    # if cal_col == 'p_i_53':
    #     print("")
    previous_quarters = [data]
    for _ in range(max_previous_quarters):
        if (len(previous_quarters) >= (previous_number + 1)):
            break
        current_quarter -= 1
        if current_quarter == 0:
            current_quarter = 4
            current_year -= 1
        
        previous_data = next((item for item in combine_data if 
                                item['quarter'] is not None and
                                item['stock_code'] == stock_code and 
                                int(item['quarter']) == current_quarter and 
                                int(item['year']) == current_year), None)
        
        if previous_data:
            previous_quarters.append(previous_data)
        else:
            break

    # for quarter in previous_quarters:
    #     print(quarter[cal_col])
        
    if (len(previous_quarters) == (previous_number + 1)) or is_sum_all:
        # if cal_col == 'p_i_53':
        #     print("")
        return sum(quarter[cal_col] or 0 for quarter in previous_quarters)
    else:
        return None
    # else:
    #     return None
def get_negative_codes(source: str) -> List[str]:
    if source == 'chung_khoan':
        return chung_khoan_negate_codes
    if source == 'ngan_hang':
        return ngan_hang_negate_codes
    if source == 'phi_tai_chinh':
        return phi_tai_chinh_negate_codes

    
def handle_fiin_data(df: pd.DataFrame, mapping_table: str, source: str) -> Tuple[List[Dict], str]:
    print(f"mapping_table = {mapping_table}")
    
    all_sheets = pd.read_excel(file_path, sheet_name=None, header=None)
    # get data from mapping table
    mapping_table_df = pd.read_sql(f"SELECT * FROM {mapping_table}", engine)
    # print(mapping_table_df)
    # Convert DataFrame to a list of dictionaries
    mapping = mapping_table_df.to_dict(orient='records')
    # print(mapping)
    # Initialize a list to store the result
    result = []
    negate_codes = get_negative_codes(source)

    # Create a mapping of sheet indices to sheet names
    sheet_index_to_name = {i+1: name for i, name in enumerate(all_sheets.keys())}
    sheet_name_1 = sheet_index_to_name[1]
    df_1 = all_sheets[sheet_name_1]
    stock_code = df_1.iloc[7, 1].strip()
    # Iterate over each mapping item
    for map_item in mapping:
        sheet_index = map_item['sheet_index']
        sheet_name = sheet_index_to_name[sheet_index]
        df = all_sheets[sheet_name]
        
        # Iterate over each column (starting from the second column)
        for col in range(1, df_1.shape[1]):
        # for col in range(1, 5):
            quarter, year = parse_quarter_year_fiin(df_1.iloc[10, col])
            
            # Check if an entry for this quarter and year already exists
            existing_entry = next((item for item in result if item['quarter'] == quarter and item['year'] == year), None)
            
            # when sheet_index > 1, have to find col in specific sheet by look into row 11 of coresponding sheet base on compare quater and year
        
            if sheet_index > 1:
                # Find the correct column in the specific sheet
                col = next((i for i in range(1, df.shape[1]) if parse_quarter_year_fiin(df.iloc[10, i]) == (quarter, year)), None)
                # print(f"col = {col} for map item = {map_item} sheet_index = {sheet_index} and quarter = {quarter} and year = {year}")
            
            
            code = map_item['code']
            row_index = map_item['row_index'] - 1
            value = None if col is None else df.iloc[row_index, col]
            value = None if pd.isna(value) else value
            
            # Negate the value if the code is in the list
            if code in negate_codes and value is not None and isinstance(value, (int, float)):
                value = value * -1
                
            if existing_entry:
                # If entry exists, update it
                existing_entry[code] = value
            else:
                # If entry doesn't exist, create a new one
                data_entry = {'stock_code': stock_code, 'quarter': quarter, 'year': year}
                data_entry[code] = value
                result.append(data_entry)

    # print(json.dumps(result, indent=4, ensure_ascii=False))
    return result, stock_code

def handle_vietstock_data(df: pd.DataFrame, mapping_table: str) -> List[Dict]:
    print(f"mapping_table = {mapping_table}")
    
    mapping_table_df = pd.read_sql(f"SELECT * FROM {mapping_table}", engine)
    mapping = mapping_table_df.to_dict(orient='records')
    result = []

    for map_item in mapping:
        for col in range(2, df.shape[1]):
        # for col in range(2, 9):
            stock_code = df.iloc[5, col].strip()
            date_str = df.iloc[6, col]
            quarter, year = parse_quarter_year(date_str)
            
            # Check if an entry for this quarter and year already exists
            existing_entry = next((item for item in result if item['stock_code'] == stock_code and item['quarter'] == quarter and item['year'] == year), None)
            
            code = map_item['code']
            row_index_data = map_item['row_index']
            row_index = None if pd.isna(row_index_data) else int(row_index_data) - 1
            value = None if row_index is None else df.iloc[row_index, col]
            value = value / 1_000_000_000 if value is not None and isinstance(value, (int, float)) else value
            value = None if pd.isna(value) else value
            
            if existing_entry:
                existing_entry[code] = value
            else:
                data_entry = {'stock_code': stock_code, 'quarter': quarter, 'year': year}
                data_entry[code] = value
                result.append(data_entry)

    # print(json.dumps(result, indent=4, ensure_ascii=False))
    return result
def combine_data_from_db_replace_db(rs: List[Dict], db_data: List[Dict]) -> List[Dict]:
    existing_keys = set((item['stock_code'], item['quarter'], item['year']) for item in rs)
    filtered_db_data = [item for item in db_data if (item['stock_code'], item['quarter'], item['year']) not in existing_keys]
    return rs + filtered_db_data

def combine_data_from_db_not_replace_db(rs: List[Dict], db_data: List[Dict]) -> List[Dict]:
    existing_keys = set((item['stock_code'], item['quarter'], item['year']) for item in db_data)
    filtered_rs_data = [item for item in rs if (item['stock_code'], item['quarter'], item['year']) not in existing_keys]
    return db_data + filtered_rs_data

def read_and_transform_excel(file_path: str) -> List[Dict]:
    isFiin = check_file_from_fiin(file_path)
    df = pd.read_excel(file_path, header=None)
    data_source = extract_data_source(df)
    table_name = data_source + "_report"
    mapping_table = get_mapping_table_name(data_source, isFiin)
    rs = []
    
    # Drop the table before running *** JUST FOR TESTING PURPOSE ***
    # with engine.begin() as connection:
    #     connection.execute(text(f"DROP TABLE IF EXISTS {table_name}"))
    
    if isFiin:
        rs, stock_code  = handle_fiin_data(df, mapping_table, data_source)
    else:
        rs = handle_vietstock_data(df, mapping_table)


    stock_code_row = df[df.iloc[:, 0] == 'Mã CK'].index[0]

    db_data = []
    columns = []
    if data_source == 'phi_tai_chinh':
        columns = phi_tai_chinh_columns_names_cal
        
    if check_table_exists(table_name, engine):
        # Get distinct stock codes from the Excel file
        distinct_stock_codes = [stock_code] if isFiin else df.iloc[stock_code_row, 1:].dropna().unique().tolist()
                
        db_data = get_data_from_db(table_name, distinct_stock_codes, columns, engine)
    
    # refill money transfer data
    combine_data  = []
    if data_source == 'phi_tai_chinh':
        if not isFiin:
            phi_tai_chinh_handle_missing_data(rs, rs)
            remove_month_data(rs)
        if isFiin:
            combine_data = combine_data_from_db_replace_db(rs, db_data)
        else:
            combine_data = combine_data_from_db_not_replace_db(rs, db_data)
            
        phi_tai_chinh_calculate_data(rs, combine_data) 
    
    return rs, isFiin, data_source


def save_to_json(data: List[Dict], output_file: str) -> None:
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Data saved to {output_file}")
    print()
 
def save_to_postgresql(data: List[Dict], isFiin: bool, data_source: str, table_name, engine) -> None:
    
    df = pd.DataFrame(data)
    
    # Check if the table exists, if not create it
    inspector = inspect(engine)
    if table_name not in inspector.get_table_names():
        metadata = MetaData()
        columns = get_table_columns(df, data_source)
        Table(table_name, metadata, *columns)
        metadata.create_all(engine)
    
    # Get existing data from the database
    try:
        existing_data = pd.read_sql_table(table_name, engine)
    except ValueError:
        existing_data = pd.DataFrame(columns=df.columns)
    
    if isFiin:
        update_existing_data(df, existing_data, table_name, engine)
    else:
        only_add_new_data(df, existing_data, table_name, engine)
    print("Data has been successfully saved to PostgreSQL!")
    print()

def update_existing_data(df: pd.DataFrame, existing_data: pd.DataFrame, table_name, engine) -> None:
    # Create key columns for both dataframes
    df_key_column = (df['stock_code'] + df['quarter'].astype(str) + df['year'].astype(str)).to_frame(name='key')
    df = pd.concat([df, df_key_column], axis=1)
    
    existing_key_column = (existing_data['stock_code'] + existing_data['quarter'].astype(str) + existing_data['year'].astype(str)).to_frame(name='key')
    existing_data = pd.concat([existing_data, existing_key_column], axis=1)
    
    # Identify new records
    new_records = df[~df['key'].isin(existing_data['key'])].drop('key', axis=1)
    
    # Identify existing records that need to be replaced
    existing_records = df[df['key'].isin(existing_data['key'])].drop('key', axis=1)
    
    # Replace existing records
    if not existing_records.empty:
        with engine.begin() as connection:
            # Delete existing records
            delete_stmt = text(f"""
                DELETE FROM {table_name}
                WHERE (stock_code, quarter, year) IN (
                    SELECT stock_code, quarter, year
                    FROM (VALUES {','.join([f"('{row['stock_code']}', '{row['quarter']}', '{row['year']}')" for _, row in existing_records.iterrows()])}) AS t(stock_code, quarter, year)
                )
            """)
            connection.execute(delete_stmt)
            
            # Insert updated records
            existing_records.to_sql(table_name, connection, if_exists='append', index=False)
        
        print(f"Replaced {len(existing_records)} existing records.")
    
    # Insert new records
    if not new_records.empty:
        new_records.to_sql(table_name, engine, if_exists='append', index=False)
        print(f"Inserted {len(new_records)} new records.")
    
    if existing_records.empty and new_records.empty:
        print("No records to replace or insert.")
    
    print("Data has been successfully updated in PostgreSQL!")
    print()
    
def only_add_new_data(df: pd.DataFrame, existing_data: pd.DataFrame, table_name, engine) -> None:
    # Get existing data from the database
    # Identify new records based on stock_code, quarter, and year
    if df.empty:
        print("No new data to insert.")
        return

    # Create key columns for both dataframes
    df_key_column = (df['stock_code'] + df['quarter'].astype(str) + df['year'].astype(str)).to_frame(name='key')
    df = pd.concat([df, df_key_column], axis=1)
    
    # Create the 'key' column as a separate DataFrame
    key_column = (existing_data['stock_code'] + existing_data['quarter'].astype(str) + existing_data['year'].astype(str)).to_frame(name='key')
    # Concatenate the new 'key' column with the existing DataFrame
    existing_data = pd.concat([existing_data, key_column], axis=1)
    
    new_records = df[~df['key'].isin(existing_data['key'])].drop('key', axis=1)

    # Insert only new records
    if not new_records.empty:
        new_records.to_sql(table_name, engine, if_exists='append', index=False)
        print(f"Inserted {len(new_records)} new records.")
        
if __name__ == "__main__":
    start_time = time.time()

    import sys

    if len(sys.argv) > 1 and sys.argv[1]:
        file_path = sys.argv[1]
    # else:
    #     file_path = 'C:\projects\chills\\temp\Chung_Khoan_raw.xlsx'
        # file_path = 'C:\projects\chills\CK_VS\CK_VS\ck6.xlsx'
        # file_path = 'C:\projects\chills\Phitaichinh\ctcp1.xlsx'
        # file_path = 'C:\projects\chills\TEMPLATE DATA VISUAL\PHI TAI CHINH\Phi Tai Chinh_raw.xlsx'

    transformed_data, isFiin, data_source = read_and_transform_excel(file_path)
    table_name = data_source + "_report"
    
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
    
    transformed_data = remove_month_data(transformed_data)

    with engine.connect() as connection:
        print("Successfully connected to the database!")
        print()
        save_to_postgresql(transformed_data, isFiin, data_source, table_name, engine)

    end_time3 = time.time()
    execution_time = end_time3 - end_time2
    print(f"Total save_to_postgresql time: {execution_time:.2f} seconds")
    print()
    
    end_time = time.time()
    execution_time = end_time - start_time
    print(f"Total execution time: {execution_time:.2f} seconds")
    print()