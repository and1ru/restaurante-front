import z from 'zod'

export const hireSchema = z.object({
    name: z.string().min(1,"Employee name is required"),
    email: z.email("must be an email"),
    password: z.string().min(8,"Password must be at least 8 length"),
    role: z.enum(["ADMIN", "CASHIER", "WAITRESS", "CHEF", "RECEPTIONIST"], { message:"Role is required" }),
    branch: z.number().positive().min(1, "Must select any branch"),
    // coerce convierte automáticamente un valor de entrada al tipo de dato que necesitas antes de validarlo
    // puede ser un string, number o boolean
    salary: z.coerce.number().positive("Salary must be positive").min(1, "Salary is required")
})

export type hireType = z.infer<typeof hireSchema>