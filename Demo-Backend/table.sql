-- CREATE QUERY FOR USER

CREATE TABLE `project`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contact_number` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
-- INSERT QUERY FOR USER

INSERT INTO users(userid,firstname,lastname,email,contactnumber,role,password)
values('admin.a','admin','admin','admin123@gmail.com','9898976554','admin','admin@123');



-- CREATE QUERY FOR VOYAGE PLAN

create table voyageplan
(
    StartPortname varchar(255) NOT NULL,
    DestinationPortname varchar(255) NOT NULL,
    Cosplat decimal(65) NOT NULL,
    cosplong decimal(65) NOT NULL,
    Eosplat decimal(65) NOT NULL,
    Eosplong decimal(65) NOT NULL,
    Cosptime TIMESTAMP NOT NULL,
    Displacement INT(100) NOT NULL,
    FuelDensity INT(100) NOT NULL,
    LowerCalorific INT(100),
    EarliestETA TIMESTAMP NOT NULL,
    JustTimeETA  TIMESTAMP NOT NULL
);


-- INSERT QUERY FOR VOYAGE PLAN
insert into voyageplan ( StartPortname,
        DestinationPortname,
        Cosplat ,
        Cosplong,
        Eosplat,
        Eosplong,
        Cosptime,
        Displacement ,
        FuelDensity,
        LowerCalorific,
        EarliestETA,
        JustTimeETA )
values('Japan','China','1.23','1.4','3.4','3.8','2023-02-03 09:03','1000','200','400','2023-02-03 09:03','2023-02-03 09:03');

-- CREATE QUERY FOR VOYAGE PATH(STARTING AND DESTINATION)
create table voyagepath(
    StartPortname varchar(255) NOT NULL,
    DestinationPortname varchar(255) NOT NULL,
)



-- INSERT QUERY FOR VOYAGE PATH
insert into voyagepath( StartPortname,DestinationPortname)values('Japan','China');


--CRETAE VESSEL FORM

CREATE TABLE `project`.`vessel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `imo_number` VARCHAR(45) NOT NULL,
  `flag_id` INT NOT NULL,
  `vessel_type_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `imo_number_UNIQUE` (`imo_number` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

--CRETAE VESSEL FORM new table
CREATE TABLE `smartshipdemo`.`vessel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `imo_number` VARCHAR(255) NOT NULL,
  `flag_id` INT NOT NULL,
  `vessel_type_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

--INSERT INTO VESSEL FORM

insert into vessels( VesselName ,IMONumber, VesselType,flag,VesselId)values('ATHIRA1 VESSEL','123WE','BULK CARRIER','JAPAN','1');

--CREATE FLAG DB
create table flags(
    FlagId INT AUTO_INCREMENT UNIQUE,
    flagname varchar (255) NOT NULL
);

insert into flags(FlagId,flagname)values('1','japan');

--CREATE VESSELMAPPING TABLE

create table vesselmapping( Userid varchar(200) NOT NULL,VesselName varchar(200) NOT NULL,VesselId INT AUTO_INCREMENT UNIQUE);

--INSERT IN TO vesselmapping

insert into vesselmapping(Userid,VesselName,VesselId) values('Riswana.e','ATHIRA1 VESSEL,ATHIRA2 VESSEL','1');

-- CREATE TABLE flag

CREATE TABLE `project`.`flag` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- create table  vesselType

CREATE TABLE `project`.`vessel_type` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- create table  vessel_user_mapping

CREATE TABLE `project`.`vessel_user_mapping` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vessel_name` VARCHAR(45) NOT NULL,
  `vessel_id` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- create table  voyage


CREATE TABLE `project`.`voyage` (
  `id` INT NOT NULL,
  `start_port` VARCHAR(45) NOT NULL,
  `destination_port` VARCHAR(45) NOT NULL,
  `cosp_lat` VARCHAR(45) NOT NULL,
  `cosp_long` VARCHAR(45) NOT NULL,
  `eosp_lat` VARCHAR(45) NOT NULL,
  `eosp_long` VARCHAR(45) NOT NULL,
  `cosp_time` DATETIME NOT NULL,
  `displacement` INT NULL,
  `fuel_density` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
ALTER TABLE `project`.`voyage` 
ADD COLUMN `lower_calorific` INT NULL AFTER `fuel_density`,
ADD COLUMN `earliest_eta` DATETIME NOT NULL AFTER `lower_calorific`,
ADD COLUMN `justeta` DATETIME NOT NULL AFTER `earliest_eta`,
ADD COLUMN `bunker` VARCHAR(45) NULL AFTER `justeta`,
ADD COLUMN `vessel_id` INT NULL AFTER `bunker`;
