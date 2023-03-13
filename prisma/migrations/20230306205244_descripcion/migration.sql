-- CreateTable
CREATE TABLE `Proveedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `rut` VARCHAR(191) NOT NULL,
    `fono` VARCHAR(191) NOT NULL,
    `comuna` VARCHAR(191) NOT NULL,
    `descripcionid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Descripcion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Proveedores` ADD CONSTRAINT `Proveedores_descripcionid_fkey` FOREIGN KEY (`descripcionid`) REFERENCES `Descripcion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
