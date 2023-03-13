/*
  Warnings:

  - You are about to alter the column `cantidad01` on the `ocpedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `ocpedidos` MODIFY `cantidad01` DOUBLE NULL;
