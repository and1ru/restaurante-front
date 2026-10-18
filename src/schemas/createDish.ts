import z from 'zod'

export const createDishSchema = z.object({
    name: z.string().min(1, "Dish name is required"),
    image: z.file().min(1, "Must select an image"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(1, "Description is required")
})

export type createDishType = z.infer<typeof createDishSchema>