-- AlterTable
ALTER TABLE "User" ADD COLUMN     "additionPlans" TEXT;

-- CreateTable
CREATE TABLE "PaymentInfo" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "orderCreationId" TEXT NOT NULL,
    "razorpayPaymentId" TEXT NOT NULL,
    "razorpayOrderId" TEXT NOT NULL,
    "razorpaySignature" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Authorized'
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentInfo_id_key" ON "PaymentInfo"("id");
