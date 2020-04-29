# Migration `20200430025740-create_user`

This migration has been generated at 4/30/2020, 2:57:40 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
    "email" text  NOT NULL ,
    "id" SERIAL,
    "name" text   ,
    PRIMARY KEY ("id")
) 

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200430025740-create_user
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+datasource postgresql {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+// --------------------------------------
+model User {
+  id    Int     @default(autoincrement()) @id
+  email String  @unique
+  name  String?
+}
```


