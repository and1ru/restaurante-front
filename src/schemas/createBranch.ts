import z from 'zod'

export const createBranchSchema = z.object({
    name: z.string().min(1,"Branch name is required"),
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(1, "Address is required"),
    table: z.string().min(1, "must have at least 1 table")
})

export type createBranchType = z.infer<typeof createBranchSchema>