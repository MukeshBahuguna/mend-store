import React from 'react'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const Auth = () => {
  return (
    <div className='flex justify-center gap-10'>
        <LoginLink className='border-[hsl(var(--card-foreground))] border-[1px] p-1 rounded-md'>Sign in</LoginLink>
        <RegisterLink className='border-[hsl(var(--card-foreground))] border-[1px] p-1 rounded-md'>Sign up</RegisterLink>
    </div>
    
  )
}

export default Auth