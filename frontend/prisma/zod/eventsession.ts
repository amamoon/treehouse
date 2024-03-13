import * as z from "zod"
import { CompleteAvailability, relatedAvailabilitySchema } from "./index"

export const eventSessionSchema = z.object({
  id: z.string(),
  code: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  startTime: z.date(),
  endTime: z.date(),
})

export interface CompleteEventSession extends z.infer<typeof eventSessionSchema> {
  availabilities: CompleteAvailability[]
}

/**
 * relatedEventSessionSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedEventSessionSchema: z.ZodSchema<CompleteEventSession> = z.lazy(() => eventSessionSchema.extend({
  availabilities: relatedAvailabilitySchema.array(),
}))
