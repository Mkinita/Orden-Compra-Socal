/*
  Warnings:

  - You are about to drop the column `descripcionid` on the `proveedores` table. All the data in the column will be lost.
  - Added the required column `roveedoresid` to the `Descripcion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `proveedores` DROP FOREIGN KEY `Proveedores_descripcionid_fkey`;

-- AlterTable
ALTER TABLE `descripcion` ADD COLUMN `roveedoresid` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `proveedores` DROP COLUMN `descripcionid`;

-- AddForeignKey
ALTER TABLE `Descripcion` ADD CONSTRAINT `Descripcion_roveedoresid_fkey` FOREIGN KEY (`roveedoresid`) REFERENCES `Proveedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
