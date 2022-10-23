import { resolve } from "path";
import { readFileSync } from "fs";
import getConfig from "./config"

const resume = readFileSync(resolve(__dirname, "resume.json"));

export default getConfig(JSON.parse(resume));
