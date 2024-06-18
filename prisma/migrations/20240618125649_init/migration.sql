-- CreateTable
CREATE TABLE `Section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lat` INTEGER NOT NULL,
    `lon` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sensor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `min` DECIMAL(65, 30) NOT NULL,
    `max` DECIMAL(65, 30) NOT NULL,
    `offset` DECIMAL(65, 30) NOT NULL,
    `fk_section` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SensorData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` DECIMAL(65, 30) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `fk_sensor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sensor` ADD CONSTRAINT `Sensor_fk_section_fkey` FOREIGN KEY (`fk_section`) REFERENCES `Section`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SensorData` ADD CONSTRAINT `SensorData_fk_sensor_fkey` FOREIGN KEY (`fk_sensor`) REFERENCES `Sensor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
