// lib/db.ts
import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://nguyetheli:nguyetheli12042003@@103.216.118.90:5432/sale_data",
  ssl: false,
});

export default pool;
