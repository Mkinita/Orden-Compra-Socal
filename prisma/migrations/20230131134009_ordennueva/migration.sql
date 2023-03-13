/*
  Warnings:

  - Added the required column `ciudad` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comuna` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fono` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rut` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senores` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `ciudad` VARCHAR(191) NOT NULL,
    ADD COLUMN `comuna` VARCHAR(191) NOT NULL,
    ADD COLUMN `direccion` VARCHAR(191) NOT NULL,
    ADD COLUMN `fono` VARCHAR(191) NOT NULL,
    ADD COLUMN `rut` VARCHAR(191) NOT NULL,
    ADD COLUMN `senores` VARCHAR(191) NOT NULL;
