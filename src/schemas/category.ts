import z from 'zod'

export const categorySchema = z.object({
    name: z.string().min(1,"")
})

export type categoryType = z.infer<typeof categorySchema>