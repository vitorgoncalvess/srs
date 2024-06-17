BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Animal] (
    [id_animal] INT NOT NULL IDENTITY(1,1),
    [species] NVARCHAR(1000) NOT NULL,
    [habitat] NVARCHAR(1000) NOT NULL,
    [identifier] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Animal_pkey] PRIMARY KEY CLUSTERED ([id_animal])
);

-- CreateTable
CREATE TABLE [dbo].[Sensor] (
    [id_sensor] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Sensor_pkey] PRIMARY KEY CLUSTERED ([id_sensor])
);

-- CreateTable
CREATE TABLE [dbo].[DataSensor] (
    [id_data] INT NOT NULL IDENTITY(1,1),
    [valor] NVARCHAR(1000) NOT NULL,
    [created_at] NVARCHAR(1000) NOT NULL,
    [fk_sensor] INT NOT NULL,
    CONSTRAINT [DataSensor_pkey] PRIMARY KEY CLUSTERED ([id_data])
);

-- CreateTable
CREATE TABLE [dbo].[AnimalSensor] (
    [fk_animal] INT NOT NULL,
    [fk_sensor] INT NOT NULL,
    [min] DECIMAL(32,16) NOT NULL,
    [max] DECIMAL(32,16) NOT NULL,
    [offset] DECIMAL(32,16) NOT NULL,
    CONSTRAINT [AnimalSensor_pkey] PRIMARY KEY CLUSTERED ([fk_animal],[fk_sensor])
);

-- AddForeignKey
ALTER TABLE [dbo].[DataSensor] ADD CONSTRAINT [DataSensor_fk_sensor_fkey] FOREIGN KEY ([fk_sensor]) REFERENCES [dbo].[Sensor]([id_sensor]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AnimalSensor] ADD CONSTRAINT [AnimalSensor_fk_animal_fkey] FOREIGN KEY ([fk_animal]) REFERENCES [dbo].[Animal]([id_animal]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AnimalSensor] ADD CONSTRAINT [AnimalSensor_fk_sensor_fkey] FOREIGN KEY ([fk_sensor]) REFERENCES [dbo].[Sensor]([id_sensor]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
