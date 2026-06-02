import z from 'zod'

export const reservationSchema = z.object({
    day: z.date(),
    hour: z.string(),
    people: z.number(),
    name: z.string(),
})

export type reservationType = z.infer<typeof reservationSchema>