import { z } from 'zod';

export const userRoles = [
    { label: 'Admin', value: 'admin'},
    { label: 'Donor', value: 'donor'},
    { label: 'Recepient', value: 'recepient'},
]

export const registerFormSchema = z.object({
    name: z.string().min(2, "To short").max(50, "To Big"),
    email: z.string().email('Please input correct email address').min(5).max(100),
    password: z.string().min(8).max(100),
    role: z.enum(userRoles.map((role) => role.value) as [string, ...string[]])
})

export const loginFormSchema = z.object({
    email: z.string().email('Please input correct email address').min(5).max(100),
    password: z.string().min(8).max(100),
    role: z.string().min(1, 'Please select role')
})