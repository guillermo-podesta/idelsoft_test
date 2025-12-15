import "dotenv/config";
import {z} from "zod";

const environmentVariablesSchema = z.object({
  BOOKCART_APP_URL: z.string().min(1, {message: "Required"}),
  BOOKCART_TEST_USER_EMAIL: z.string().min(1, {message: "Required"}),
  BOOKCART_TEST_USER_PASSWORD: z.string().min(1, {message: "Required"}),
  TEST_ENVIRONMENT: z.string().min(1, {message: "Required"})
});

type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;

const environmentVariables = environmentVariablesSchema.parse({
  BOOKCART_APP_URL: process.env.BOOKCART_APP_URL,
  BOOKCART_TEST_USER_EMAIL: process.env.BOOKCART_TEST_USER_EMAIL,
  BOOKCART_TEST_USER_PASSWORD: process.env.BOOKCART_TEST_USER_PASSWORD,
  TEST_ENVIRONMENT: process.env.TEST_ENVIRONMENT
});

export default environmentVariables;

export type {EnvironmentVariables};
