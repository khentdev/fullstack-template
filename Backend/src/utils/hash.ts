import { createHash } from "crypto";
const hashData = (data: string) => createHash("sha256").update(data).digest("hex")
export default hashData