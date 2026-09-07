import z from 'zod'

export const createRestaurantSchema = z.object({
    ownerName: z.string().min(1, "this field is required"),
    nameRestaurant: z.string().min(1, "this field is required"),
    email: z.email().min(1, "this field is required"),
    password: z.string().min(8, "must be at least 8 length"),
    confirmPassword: z.string().min(8, "must be at least 8 length")
}).refine(data => data.password === data.confirmPassword, {
    message: "passwords no match",
    path: ["confirmPassword"]
})

export type createRestaurantType = z.infer<typeof createRestaurantSchema>