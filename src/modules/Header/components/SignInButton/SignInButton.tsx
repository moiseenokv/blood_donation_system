'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

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
        </>

    )
}

export default SignInButton
