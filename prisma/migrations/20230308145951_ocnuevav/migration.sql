/*
  Warnings:

  - Added the required column `obra` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocpedidos` ADD COLUMN `cantidad01` VARCHAR(191) NULL,
    ADD COLUMN `cantidad02` VARCHAR(191) NULL,
    ADD COLUMN `cantidad03` VARCHAR(191) NULL,
    ADD COLUMN `cantidad04` VARCHAR(191) NULL,
    ADD COLUMN `descripcion03` VARCHAR(191) NULL,
    ADD COLUMN `descripcion04` VARCHAR(191) NULL,
    ADD COLUMN `obra` VARCHAR(191) NOT NULL,
    ADD COLUMN `valor` DOUBLE NOT NULL,
    ADD COLUMN `valor01` DOUBLE NULL,
    ADD COLUMN `valor02` DOUBLE NULL,
    ADD COLUMN `valor03` DOUBLE NULL,
    ADD COLUMN `valor04` DOUBLE NULL;
