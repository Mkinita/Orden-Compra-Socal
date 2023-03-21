/*
  Warnings:

  - Added the required column `Kilometraje` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propietario` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `Kilometraje` VARCHAR(191) NOT NULL,
    ADD COLUMN `propietario` VARCHAR(191) NOT NULL;
