/*
  Warnings:

  - You are about to drop the column `pedido01` on the `orden` table. All the data in the column will be lost.
  - Added the required column `proveedor` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `pedido01`,
    ADD COLUMN `proveedor` JSON NOT NULL;
