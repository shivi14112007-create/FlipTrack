-- Phase B — DO NOT APPLY until:
--   1. Migration 20260713000000_add_listing_model has been applied in this environment, AND
--   2. scripts/migrate-marketplace-to-listings.ts has been run against this database, AND
--   3. Row counts have been verified (see scripts/verify-listing-migration.ts)
--
-- Once verified, also delete the two `marketplace` / `askingPrice` fields (and their
-- @deprecated comments) from `model InventoryItem` in prisma/schema.prisma so the
-- schema and the database stay in sync, then commit both together.

-- AlterTable
ALTER TABLE "InventoryItem" DROP COLUMN "marketplace",
DROP COLUMN "askingPrice";
