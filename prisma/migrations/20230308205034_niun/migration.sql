/*
  Warnings:

  - You are about to alter the column `cantidad` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `cantidad02` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `cantidad03` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `cantidad04` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `valor` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `valor01` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `valor02` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `valor03` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `valor04` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `ocpedidos` MODIFY `cantidad` DOUBLE NOT NULL,
    MODIFY `cantidad02` DOUBLE NULL,
    MODIFY `cantidad03` DOUBLE NULL,
    MODIFY `cantidad04` DOUBLE NULL,
    MODIFY `valor` DOUBLE NOT NULL,
    MODIFY `valor01` DOUBLE NULL,
    MODIFY `valor02` DOUBLE NULL,
    MODIFY `valor03` DOUBLE NULL,
    MODIFY `valor04` DOUBLE NULL;
