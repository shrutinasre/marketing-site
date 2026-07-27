import { Pool } from "pg";

// Reuse a single pool across hot reloads / serverless invocations.
declare global {
  var _vighnexPgPool: Pool | undefined;
}

export function getPool(): Pool {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is not set. Configure it in .env.local to enable lead persistence."
    );
  }

  if (!global._vighnexPgPool) {
    global._vighnexPgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      idleTimeoutMillis: 30_000,
    });
  }
  return global._vighnexPgPool;
}
