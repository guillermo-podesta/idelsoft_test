import "dotenv/config";
import {z} from "zod";

// TODO: Add more environment variables as needed, update yml and gh actions vars for using them when requested.

const environmentVariablesSchema = z.object({
  BOOKCART_APP_URL: z.string().min(1, {message: "Required"})
});

type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;

const environmentVariables = environmentVariablesSchema.parse({
  BOOKCART_APP_URL: process.env.BOOKCART_APP_URL
});

export default environmentVariables;

export type {EnvironmentVariables};
