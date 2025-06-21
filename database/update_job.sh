#!/bin/bash
# Tao Thu muc logs neu chua co
mkdir -p ./logs
LOGFILE="/root/scripts/logs/update_users_$(date +%F).log"
# Cau lenh sql can chay
SQL="SELECT id, username, from_date, to_date FROM users WHERE to_date < CURRENT_DATE AND from_date IS NOT NULL AND to_date IS NOT NULL and is_vip = 1;"
SQL1="UPDATE users SET is_vip = 0 WHERE to_date < CURRENT_DATE AND from_date IS NOT NULL AND to_date IS NOT NULL and is_vip = 1;"
# Ghi log thoi gian
echo "[$(date '+%Y-%m-%d %H:%M:%S')] dang cap nhat du lieu..." >> "$LOGFILE"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Danh sach user sap cap nhat:" >> "$LOGFILE"
# Thực thi câu lệnh
PGPASSWORD=investchill123 psql -h 127.0.0.1 -p 5432 -U postgres -d investnchilldb -c "$SQL" >> "$LOGFILE"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Bat dau cap nhat is_vip = 0..." >> "$LOGFILE"
PGPASSWORD=investchill123 psql -h 127.0.0.1 -p 5432 -U postgres -d investnchilldb -c "$SQL1" >> "$LOGFILE"
# Ghi log hoàn tất
echo "[$(date '+%Y-%m-%d %H:%M:%S')] cap nhat xong" >> "$LOGFILE"