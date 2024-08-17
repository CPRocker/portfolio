import { type Config } from "./node_modules/.deno/tailwindcss@3.4.1/node_modules/tailwindcss/types/index.d.ts";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
} satisfies Config;
