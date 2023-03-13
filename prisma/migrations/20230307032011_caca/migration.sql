/*
  Warnings:

  - You are about to drop the column `proveedorid` on the `ocpedidos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ocpedidos` DROP FOREIGN KEY `Ocpedidos_proveedorid_fkey`;

-- AlterTable
ALTER TABLE `ocpedidos` DROP COLUMN `proveedorid`;
