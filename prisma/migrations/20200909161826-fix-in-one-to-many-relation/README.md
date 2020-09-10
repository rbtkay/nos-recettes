# Migration `20200909161826-fix-in-one-to-many-relation`

This migration has been generated at 9/9/2020, 6:18:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Ingredient" DROP CONSTRAINT "Ingredient_recipieId_fkey"

ALTER TABLE "public"."Ingredient" DROP COLUMN "recipieId";

ALTER TABLE "public"."Recipie" ADD COLUMN "ingredientId" integer   ;

ALTER TABLE "public"."Recipie" ADD FOREIGN KEY ("ingredientId")REFERENCES "public"."Ingredient"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200909155912-one-to-many-relation-recipie-ingredient..20200909161826-fix-in-one-to-many-relation
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,12 +13,12 @@
 model Recipie {
   id Int @id @default(autoincrement())
   title String?
   description Json?
-  ingredients Ingredient[] @relation()
   createdAt DateTime @default(now())
 }
 model Ingredient {
   id Int @id @default(autoincrement())
   name String @unique
+  recipies Recipie[] @relation()
 }
```


