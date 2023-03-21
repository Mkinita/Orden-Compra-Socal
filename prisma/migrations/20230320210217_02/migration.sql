/*
  Warnings:

  - You are about to drop the column `pedido02` on the `ordenobra` table. All the data in the column will be lost.
  - Added the required column `pedido` to the `OrdenObra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordenobra` DROP COLUMN `pedido02`,
    ADD COLUMN `pedido` JSON NOT NULL;
