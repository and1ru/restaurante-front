import z from 'zod'

export const categorySchema = z.object({
    name: z.string().min(1,"this field is required")
})

export type categoryType = z.infer<typeof categorySchema>