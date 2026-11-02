import 'dotenv/config'
import { z } from 'zod'

const envSchema = z
  .object({
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    PORT: z.coerce.number().int().min(1).max(65535).default(3001),
    FRONTEND_URL: z
      .string()
      .url()
      .refine((value) => ['http:', 'https:'].includes(new URL(value).protocol), {
        message: 'FRONTEND_URL must use HTTP or HTTPS',
      })
      .optional()
      .transform((value) => (value ? new URL(value).origin : undefined)),
  })
  .superRefine((configuration, context) => {
    if (
      configuration.NODE_ENV === 'production' &&
      !configuration.FRONTEND_URL
    ) {
      context.addIssue({
        code: 'custom',
        path: ['FRONTEND_URL'],
        message: 'FRONTEND_URL is required in production',
      })
    }
  })

const configuration = envSchema.parse(process.env)

export const env = {
  ...configuration,
  FRONTEND_URL: configuration.FRONTEND_URL ?? 'http://localhost:5173',
}
