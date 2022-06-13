/*
  Warnings:

  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "account";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mount" REAL,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Accounts_userId_key" ON "Accounts"("userId");
