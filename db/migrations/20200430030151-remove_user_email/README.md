# Migration `20200430030151-remove_user_email`

This migration has been generated at 4/30/2020, 3:01:51 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "public"."User.email"

ALTER TABLE "public"."User" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN "name" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200430025740-create_user..20200430030151-remove_user_email
--- datamodel.dml
+++ datamodel.dml
@@ -1,15 +1,14 @@
 datasource postgresql {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
 }
 // --------------------------------------
 model User {
-  id    Int     @default(autoincrement()) @id
-  email String  @unique
-  name  String?
+  id   Int    @default(autoincrement()) @id
+  name String
 }
```


