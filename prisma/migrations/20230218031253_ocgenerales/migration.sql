-- CreateTable
CREATE TABLE `Ocpedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `folio` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `cantidad` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `senores` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `rut` VARCHAR(191) NOT NULL,
    `fono` VARCHAR(191) NOT NULL,
    `comuna` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
