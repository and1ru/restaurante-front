import z from 'zod'

export const createBranchSchema = z.object({
    name: z.string().min(1,"this field is required"),
    country: z.string().min(1, "this field is required"),
    city: z.string().min(1, "this field is required"),
    address: z.string().min(1, "this field is required"),
    table: z.string().min(1, "debe poner almenos 1")
})

export type createBranchType = z.infer<typeof createBranchSchema>