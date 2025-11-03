import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { userRoles, loginFormSchema } from '../../helpers/validation';


export function LoginForm() {

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
            role: ''
        },
    })


    const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
        console.log('Submit: ', values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <h1 className='text-xl font-bold text-primary'>Loginto  your account</h1>
                <hr className="border border-gray-300" />
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
                            Dont have an account?{" "}
                        </p>
                        <Link href='/?formType=register' className='text-sm text-primary font-semibold'>
                            Register
                        </Link>
                    </div>
                </div>
                <Button className='cursor-pointer' type="submit">Login</Button>
            </form>
        </Form>
    )
}
