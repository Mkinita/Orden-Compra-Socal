/*
  Warnings:

  - You are about to drop the column `proveedorId` on the `ocpedidos` table. All the data in the column will be lost.
  - Added the required column `orden` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ocpedidos` DROP FOREIGN KEY `Ocpedidos_proveedorId_fkey`;

-- AlterTable
ALTER TABLE `ocpedidos` DROP COLUMN `proveedorId`,
    ADD COLUMN `orden` JSON NOT NULL;
