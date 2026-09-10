import z from 'zod'

export const branchDishSchema = z.object({
    price: z.string().min(1, "must be greater than 0")
})

export type branchDishType = z.infer<typeof branchDishSchema>