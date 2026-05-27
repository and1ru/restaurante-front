import z from 'zod'

export const createRestaurantSchema = z.object({
    nameRestaurant: z.string().min(1, "el campo es requerido")
})

export type createRestaurantType = z.infer<typeof createRestaurantSchema>