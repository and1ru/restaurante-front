import z from 'zod'

export const createSedeSchema = z.object({
    country: z.string().min(1, "el campo es requerido"),
    city: z.string().min(1, "el campo es requerido"),
    address: z.string().min(1, "el campo es requerido"),
    table: z.number().min(1, "debe poner almenos 1")
})

export type createSedeType = z.infer<typeof createSedeSchema>