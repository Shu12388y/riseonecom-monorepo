/*
  Warnings:

  - A unique constraint covering the columns `[userid]` on the table `PaymentInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PaymentInfo_userid_key" ON "PaymentInfo"("userid");
