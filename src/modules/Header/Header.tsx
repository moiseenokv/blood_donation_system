import React from 'react'
import SignInButton from './components/SignInButton/SignInButton'

export function Header() {
    return (
        <header className='flex flex-col'>
            <div className='flex justify-between bg-primary px-20 py-6'>
                <div>
                    <h1 className='text-2xl text-white font-bold'>S . H . E . Y</h1>
                </div>
                <SignInButton />
            </div>
            <div>
            </div>
        </header>
    )
}