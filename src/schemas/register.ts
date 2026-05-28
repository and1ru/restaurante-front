import z from 'zod'

export const registerSchema = z.object({
    email: z.email("no es un correo"),
    password: z.string().min(1, "la contraseña es obligatoria"),
    confirmPassword: z.string().min(1, "debe confirmar la contraseña")
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas son diferentes",
    path: ['confirmPassword']
  })

export type registerType = z.infer<typeof registerSchema>