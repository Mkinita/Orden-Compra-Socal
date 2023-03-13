/*
  Warnings:

  - You are about to drop the column `comuna` on the `ocpedidos` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `ocpedidos` table. All the data in the column will be lost.
  - You are about to drop the column `fono` on the `ocpedidos` table. All the data in the column will be lost.
  - You are about to drop the column `rut` on the `ocpedidos` table. All the data in the column will be lost.
  - You are about to drop the column `senores` on the `ocpedidos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ocpedidos` DROP COLUMN `comuna`,
    DROP COLUMN `direccion`,
    DROP COLUMN `fono`,
    DROP COLUMN `rut`,
    DROP COLUMN `senores`;
