import z from 'zod'

export const createRestaurantSchema = z.object({
    ownerName: z.string().min(1, "Owner name is required"),
    nameRestaurant: z.string().min(1, "Restaurant name is required"),
    email: z.email("Must be an email"),
    password: z.string().min(8, "Password must be at least 8 length"),
    confirmPassword: z.string().min(8, "Confirm password must be at least 8 length")
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords no match",
    path: ["confirmPassword"]
})

export type createRestaurantType = z.infer<typeof createRestaurantSchema>