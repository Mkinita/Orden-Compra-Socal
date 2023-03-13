/*
  Warnings:

  - Added the required column `emisor` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocpedidos` ADD COLUMN `emisor` VARCHAR(191) NOT NULL;
