/*
  Warnings:

  - Added the required column `fechasolicitud` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocpedidos` ADD COLUMN `fechasolicitud` DATETIME(3) NOT NULL;
