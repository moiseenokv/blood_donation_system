import { useForm } from "react-hook-form"
import { z } from 'zod';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { 
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { userRoles, registerFormSchema } from "../../helpers/validation";


export function RegisterForm() {

    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            name: "",
            email: '',
            password: '',
            role: ''
        },
    })


    const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
        console.log('Submit: ', values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <h1 className='text-xl font-bold text-primary'>Register your account</h1>
                <hr className="border border-gray-300" />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Email..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Password..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Role</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        className="flex gap-5 mt-1"
                                        onValueChange={field.onChange}
                                        {...field}
                                    >
                                        {userRoles
                                            .filter((role) => role.value !== "admin")
                                            .map(({ label, value }) => (
                                                <div className="flex items-center space-x-2" key={value}>
                                                    <RadioGroupItem value={value} id={value} />
                                                    <Label htmlFor="option-one">{label}</Label>
                                                </div>
                                            ))}

                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <p className="text-sm">
                            Already have an account?{" "}
                        </p>
                        <Link href='/?formType=login' className='text-sm text-primary font-semibold'>
                            Login
                        </Link>
                    </div>
                </div>
                <Button className='cursor-pointer' type="submit">Register</Button>
            </form>
        </Form>
    )
}
