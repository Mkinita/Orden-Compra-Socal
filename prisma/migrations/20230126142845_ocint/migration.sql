/*
  Warnings:

  - You are about to alter the column `cantidad` on the `orden` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `cantidad` INTEGER NOT NULL;
