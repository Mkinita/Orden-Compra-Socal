/*
  Warnings:

  - Added the required column `proveedorid` to the `Ocpedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ocpedidos` ADD COLUMN `proveedorid` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Ocpedidos` ADD CONSTRAINT `Ocpedidos_proveedorid_fkey` FOREIGN KEY (`proveedorid`) REFERENCES `Proveedores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
