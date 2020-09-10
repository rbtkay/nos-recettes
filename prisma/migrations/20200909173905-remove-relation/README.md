# Migration `20200909173905-remove-relation`

This migration has been generated at 9/9/2020, 7:39:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Recipie" DROP CONSTRAINT "Recipie_ingredientId_fkey"

ALTER TABLE "public"."Recipie" DROP COLUMN "ingredientId";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200909161826-fix-in-one-to-many-relation..20200909173905-remove-relation
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
@@ -19,6 +19,5 @@
 model Ingredient {
   id Int @id @default(autoincrement())
   name String @unique
-  recipies Recipie[] @relation()
 }
```


