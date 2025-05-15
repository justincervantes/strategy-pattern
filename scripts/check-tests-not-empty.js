import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

// Get __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure tests/unit exists
const testsDir = path.join(__dirname, "../tests/unit");

try {
  // Check if tests/unit exists
  if (!fs.existsSync(testsDir)) {
    console.error("❌ You should write unit tests (tests/unit does not exist)");
    process.exit(1);
  }

  // Check if tests/unit contains any files
  const files = fs.readdirSync(testsDir);
  if (files.length === 0) {
    console.error("❌ You should write unit tests (tests/unit is empty)");
    process.exit(1);
  }

  console.log("✅ Valid tests found!");
  process.exit(0);
} catch (error) {
  console.error(`❌ Error checking tests/unit: ${error.message}`);
  process.exit(1);
}
