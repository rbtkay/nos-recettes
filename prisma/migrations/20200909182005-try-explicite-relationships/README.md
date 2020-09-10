# Migration `20200909182005-try-explicite-relationships`

This migration has been generated at 9/9/2020, 8:20:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."IngredientInRecipie" (
"recipieId" integer  NOT NULL ,
"ingredientId" integer  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("recipieId","ingredientId"))

ALTER TABLE "public"."IngredientInRecipie" ADD FOREIGN KEY ("recipieId")REFERENCES "public"."Recipie"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."IngredientInRecipie" ADD FOREIGN KEY ("ingredientId")REFERENCES "public"."Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200909173905-remove-relation..20200909182005-try-explicite-relationships
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
@@ -13,11 +13,23 @@
 model Recipie {
   id Int @id @default(autoincrement())
   title String?
   description Json?
+  ingredients IngredientInRecipie[]
   createdAt DateTime @default(now())
 }
 model Ingredient {
   id Int @id @default(autoincrement())
   name String @unique
+  recipies IngredientInRecipie[]
+}
+
+model IngredientInRecipie {
+  recipieId Int 
+  recipie Recipie @relation(fields: [recipieId], references: [id])
+  ingredientId Int
+  ingredient Ingredient @relation(fields: [ingredientId], references: [id])
+  createdAt DateTime @default(now())
+
+  @@id([recipieId, ingredientId])
 }
```


