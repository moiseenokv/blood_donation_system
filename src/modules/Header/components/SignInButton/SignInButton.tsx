'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { AuthSheetComponent } from '../AuthSheetComponent/AuthSheetComponent'

function SignInButton() {
    const [openAuthSheet, setOpenAuthSheet] = useState<boolean>(() => false);

    const authSheetTriggerHandler = () => {
        setOpenAuthSheet((prev) => !prev)
    }

    return (
        <>
            <Button variant={'outline'} onClick={authSheetTriggerHandler}>
                Sign In
            </Button>
            <AuthSheetComponent open={openAuthSheet} onOpenChange={authSheetTriggerHandler} />
        </>

    )
}

export default SignInButton
