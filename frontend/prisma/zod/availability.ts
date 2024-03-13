import * as z from "zod"
import { CompleteUser, relatedUserSchema, CompleteEventSession, relatedEventSessionSchema } from "./index"

export const availabilitySchema = z.object({
  id: z.string(),
  userId: z.string(),
  eventSessionId: z.string(),
  startTime: z.date(),
  endTime: z.date(),
})

export interface CompleteAvailability extends z.infer<typeof availabilitySchema> {
  user: CompleteUser
  eventSession: CompleteEventSession
}

/**
 * relatedAvailabilitySchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedAvailabilitySchema: z.ZodSchema<CompleteAvailability> = z.lazy(() => availabilitySchema.extend({
  user: relatedUserSchema,
  eventSession: relatedEventSessionSchema,
}))
