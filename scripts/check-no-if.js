import { execSync } from "child_process";

try {
  execSync('grep -r "if (" ./src', { stdio: "ignore" });
  console.error("❌ You cannot use if statements anywhere in the application!");
  process.exit(1);
} catch {
  console.log("✅ No ifs found!");
  process.exit(0);
}
