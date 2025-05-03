/*
  Warnings:

  - A unique constraint covering the columns `[orderCreationId]` on the table `PaymentInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PaymentInfo_userid_key";

-- CreateIndex
CREATE UNIQUE INDEX "PaymentInfo_orderCreationId_key" ON "PaymentInfo"("orderCreationId");
