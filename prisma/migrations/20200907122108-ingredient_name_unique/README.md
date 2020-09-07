# Migration `20200907122108-ingredient_name_unique`

This migration has been generated at 9/7/2020, 2:21:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "Ingredient.name_unique" ON "public"."Ingredient"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200824023602-ingredient-creation..20200907122108-ingredient_name_unique
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
@@ -19,7 +19,7 @@
 }
 model Ingredient {
   id Int @id @default(autoincrement())
-  name String
+  name String @unique
   recipies Recipie[] @relation(references: [id])
 }
```


