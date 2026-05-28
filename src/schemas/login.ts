import z from 'zod'

export const loginSchema = z.object({
    email: z.email("no es un correo"),
    password: z.string().min(1, "la contraseña es obligatoria")
})

export type loginType = z.infer<typeof loginSchema>