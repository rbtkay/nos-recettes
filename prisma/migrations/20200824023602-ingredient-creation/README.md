# Migration `20200824023602-ingredient-creation`

This migration has been generated at 8/24/2020, 4:36:02 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Ingredient" (
"id" SERIAL,
"name" text  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."_IngredientToRecipie" (
"A" integer  NOT NULL ,
"B" integer  NOT NULL )

CREATE UNIQUE INDEX "_IngredientToRecipie_AB_unique" ON "public"."_IngredientToRecipie"("A","B")

CREATE  INDEX "_IngredientToRecipie_B_index" ON "public"."_IngredientToRecipie"("B")

ALTER TABLE "public"."_IngredientToRecipie" ADD FOREIGN KEY ("A")REFERENCES "public"."Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_IngredientToRecipie" ADD FOREIGN KEY ("B")REFERENCES "public"."Recipie"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200815003833-recipie-created..20200824023602-ingredient-creation
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
@@ -13,6 +13,13 @@
 model Recipie {
   id Int @id @default(autoincrement())
   title String?
   description Json?
+  ingredients Ingredient[] @relation(references: [id])
   createdAt DateTime @default(now())
+}
+
+model Ingredient {
+  id Int @id @default(autoincrement())
+  name String
+  recipies Recipie[] @relation(references: [id])
 }
```


