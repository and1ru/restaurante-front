import z from 'zod'

export const filterEmployee = z.object({
    employeeName: z.string(),
    employeeBranchId: z.string(),
    employeeRole: z.enum(["ADMIN", "CASHIER", "CHEF", "RECEPTIONIST", "WAITRESS", ""])
})

export type filterEmployeeType = z.infer<typeof filterEmployee>