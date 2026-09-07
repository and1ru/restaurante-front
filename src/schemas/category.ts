import z from 'zod'

export const categorySchema = z.object({
    name: z.string().min(1,"must be at least 8 length")
})

export type categoryType = z.infer<typeof categorySchema>