-- CreateTable
CREATE TABLE "content" (
    "id" TEXT NOT NULL,
    "firsname" TEXT NOT NULL,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "Message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "content_id_key" ON "content"("id");
