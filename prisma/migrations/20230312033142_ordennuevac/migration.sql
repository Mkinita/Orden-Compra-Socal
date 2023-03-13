/*
  Warnings:

  - You are about to drop the column `faenaId` on the `equipo` table. All the data in the column will be lost.
  - You are about to drop the column `comuna` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `direccion` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `fono` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `rut` on the `orden` table. All the data in the column will be lost.
  - You are about to drop the column `senores` on the `orden` table. All the data in the column will be lost.
  - Added the required column `obra` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proveedor` to the `Orden` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `equipo` DROP FOREIGN KEY `Equipo_faenaId_fkey`;

-- AlterTable
ALTER TABLE `equipo` DROP COLUMN `faenaId`;

-- AlterTable
ALTER TABLE `orden` DROP COLUMN `comuna`,
    DROP COLUMN `direccion`,
    DROP COLUMN `fono`,
    DROP COLUMN `rut`,
    DROP COLUMN `senores`,
    ADD COLUMN `obra` VARCHAR(191) NOT NULL,
    ADD COLUMN `proveedor` JSON NOT NULL,
    ADD COLUMN `valor` VARCHAR(191) NOT NULL;
