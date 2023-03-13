/*
  Warnings:

  - You are about to drop the column `descripcion` on the `ocpedidos` table. All the data in the column will be lost.
  - Added the required column `descripcion0` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocpedidos` DROP COLUMN `descripcion`,
    ADD COLUMN `descripcion0` VARCHAR(191) NOT NULL,
    ADD COLUMN `descripcion01` VARCHAR(191) NULL,
    ADD COLUMN `descripcion02` VARCHAR(191) NULL;
