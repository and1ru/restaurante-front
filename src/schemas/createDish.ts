import z from 'zod'

export const createDishSchema = z.object({

})

export type createDishType = z.infer<typeof createDishSchema>