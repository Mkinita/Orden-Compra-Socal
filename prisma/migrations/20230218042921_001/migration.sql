/*
  Warnings:

  - You are about to drop the column `descripcion0` on the `ocpedidos` table. All the data in the column will be lost.
  - Added the required column `descripcion` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocpedidos` DROP COLUMN `descripcion0`,
    ADD COLUMN `descripcion` VARCHAR(191) NOT NULL;
