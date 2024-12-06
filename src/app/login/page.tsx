import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LoginForm } from "./LoginForm"
import style from './login.module.css'

const SignIn = () => {
  return (
    <div className="h-full flex justify-center items-center" >
      <Card className={`w-[450px] ${style.loginContent}`}>
        <CardHeader>
          <CardTitle>LOGIN</CardTitle>
        </CardHeader>
        <CardContent >
            <LoginForm/>
        </CardContent>
        {/* <CardFooter className="flex justify-center">
          <Label className="underline text-[16px]">Reset Password</Label>
        </CardFooter> */}
      </Card>

    </div>

  )
}

export default SignIn