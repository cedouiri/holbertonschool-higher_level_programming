-- a script that creates the table hbtn_0d_usa on your MySQL server
CREATE TABLE IF NOT EXISTS hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS `hbtn_0d_usa.states` (
	`id` INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
	`name` VARCHAR(256) NOT NULL);
