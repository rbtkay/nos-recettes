# Migration `20200815003833-recipie-created`

This migration has been generated at 8/15/2020, 2:38:33 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Recipie" (
"id" SERIAL,
"title" text   ,
"description" jsonb   ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200815003833-recipie-created
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Recipie {
+  id Int @id @default(autoincrement())
+  title String?
+  description Json?
+  createdAt DateTime @default(now())
+}
```


