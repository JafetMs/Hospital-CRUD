-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('M', 'F', 'Other');

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "cityOfOrigin" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalOfOrigin" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "tutorPhone" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
