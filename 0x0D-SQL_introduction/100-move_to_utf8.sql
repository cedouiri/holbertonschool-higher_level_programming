-- 3 first students in the Batch ID=3
-- because Batch 3 is the best!
ALTER DATABASE hbtn_0c_0 charset=utf8mb4;
USE hbtn_0c_0;
ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4;
ALTER TABLE first_table MODIFY name VARCHAR(256) CHARACTER SET utf8mb4;
