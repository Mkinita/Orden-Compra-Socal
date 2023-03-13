/*
  Warnings:

  - You are about to drop the column `roveedoresid` on the `descripcion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `descripcion` DROP FOREIGN KEY `Descripcion_roveedoresid_fkey`;

-- AlterTable
ALTER TABLE `descripcion` DROP COLUMN `roveedoresid`;
