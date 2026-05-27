import z from 'zod'

const registerSchema = z.object({
    email: z.email(),
    password: z.string(),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas son diferentes",
    path: ['confirmPassword']
  })

export type registerType = z.infer<typeof registerSchema>