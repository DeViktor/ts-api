-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "github_id" INTEGER NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "login" TEXT NOT NULL
);

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
