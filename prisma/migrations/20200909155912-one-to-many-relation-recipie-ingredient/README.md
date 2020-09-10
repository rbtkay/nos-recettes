# Migration `20200909155912-one-to-many-relation-recipie-ingredient`

This migration has been generated at 9/9/2020, 5:59:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."_IngredientToRecipie" DROP CONSTRAINT "_IngredientToRecipie_A_fkey"

ALTER TABLE "public"."_IngredientToRecipie" DROP CONSTRAINT "_IngredientToRecipie_B_fkey"

ALTER TABLE "public"."Ingredient" ADD COLUMN "recipieId" integer   ;

ALTER TABLE "public"."Ingredient" ADD FOREIGN KEY ("recipieId")REFERENCES "public"."Recipie"("id") ON DELETE SET NULL ON UPDATE CASCADE

DROP TABLE "public"."_IngredientToRecipie";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200907122108-ingredient_name_unique..20200909155912-one-to-many-relation-recipie-ingredient
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
@@ -13,13 +13,12 @@
 model Recipie {
   id Int @id @default(autoincrement())
   title String?
   description Json?
-  ingredients Ingredient[] @relation(references: [id])
+  ingredients Ingredient[] @relation()
   createdAt DateTime @default(now())
 }
 model Ingredient {
   id Int @id @default(autoincrement())
   name String @unique
-  recipies Recipie[] @relation(references: [id])
 }
```


