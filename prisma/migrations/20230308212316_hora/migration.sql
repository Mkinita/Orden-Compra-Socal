/*
  Warnings:

  - You are about to alter the column `cantidad01` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `cantidad02` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `cantidad03` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `cantidad04` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `valor01` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `valor02` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `valor03` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `valor04` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `ocpedidos` MODIFY `cantidad` VARCHAR(191) NOT NULL,
    MODIFY `cantidad01` VARCHAR(191) NULL,
    MODIFY `cantidad02` VARCHAR(191) NULL,
    MODIFY `cantidad03` VARCHAR(191) NULL,
    MODIFY `cantidad04` VARCHAR(191) NULL,
    MODIFY `valor` VARCHAR(191) NOT NULL,
    MODIFY `valor01` VARCHAR(191) NULL,
    MODIFY `valor02` VARCHAR(191) NULL,
    MODIFY `valor03` VARCHAR(191) NULL,
    MODIFY `valor04` VARCHAR(191) NULL;
