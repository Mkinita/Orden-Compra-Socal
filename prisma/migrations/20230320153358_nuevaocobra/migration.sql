-- CreateTable
CREATE TABLE `Obra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `cantidad` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdenObra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `cantidad` VARCHAR(191) NOT NULL,
    `valor` VARCHAR(191) NOT NULL,
    `obra` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `patente` VARCHAR(191) NOT NULL,
    `pedido02` JSON NOT NULL,
    `pedido03` JSON NOT NULL,
    `emisor` VARCHAR(191) NOT NULL,
    `Kilometraje` VARCHAR(191) NOT NULL,
    `propietario` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,
    `finalizado` BOOLEAN NOT NULL DEFAULT false,
    `anular` BOOLEAN NOT NULL DEFAULT false,
    `estado01` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
