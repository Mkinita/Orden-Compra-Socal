/*
  Warnings:

  - Added the required column `proveedorId` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocpedidos` ADD COLUMN `proveedorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Ocpedidos` ADD CONSTRAINT `Ocpedidos_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `Proveedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
