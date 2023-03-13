-- AlterTable
ALTER TABLE `ocpedidos` ADD COLUMN `anular` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `finalizado` BOOLEAN NOT NULL DEFAULT false;
