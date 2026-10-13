import z from 'zod'

export const reservationSchema = z.object({
    day: z.string(),
    hour: z.string(),
    people: z.number(),
    name: z.string(),
    phone: z.string()
})

export type reservationType = z.infer<typeof reservationSchema>