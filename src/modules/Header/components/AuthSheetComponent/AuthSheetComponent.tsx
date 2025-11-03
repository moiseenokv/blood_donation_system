import { useSearchParams } from "next/navigation"
import {
    Sheet, SheetContent, SheetHeader, SheetTitle,SheetDescription
} from "@/components/ui/sheet"
import { LoginForm, RegisterForm } from "@/modules/AuthenticationForms/"


type AuthSheetComponentType = {
    open: boolean;
    onOpenChange: () => void;
}

export function AuthSheetComponent({ open, onOpenChange }: AuthSheetComponentType) {


    const searchParams = useSearchParams();
    const formType = searchParams.get('formType');
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="flex justify-center items-center h screen px-10">
                    {formType === 'register' ? <RegisterForm /> : <LoginForm />}
                </div>
            </SheetContent>
        </Sheet>
    )
}
