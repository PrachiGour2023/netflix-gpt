import React, { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { BottomGradient } from "../components/BottomGradient";
import { LabelInputContainer } from "../components/LabelInputContainer";
import {
    IconBrandGithub,
    IconBrandGoogle,
} from "@tabler/icons-react";
import { checkValidation } from "../../../utils/validation";
import { auth } from "../../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignupPage = ({ handleFormStatus, isLoginForm }: {
    handleFormStatus: () => void;
    isLoginForm: boolean;
}) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = checkValidation({ ...input, isLoginForm })
        setErrorMessage(result)

        if(result === null) {

        createUserWithEmailAndPassword(auth, input.email, input.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage)
            });
        }
    }

    return (
        <>
            <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-3 dark:bg-black">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-red-500 text-center">
                    Welcome to NETFLIX GPT
                </h2>
                <form className="my-4" onSubmit={handleSubmitForm}>
                    <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                id="firstname"
                                placeholder="Tyler"
                                type="text"
                                value={input.firstname}
                                onChange={(e) => setInput({ ...input, firstname: e.target.value })}
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                id="lastname"
                                placeholder="Durden"
                                type="text"
                                value={input.lastname}
                                onChange={(e) => setInput({ ...input, lastname: e.target.value })}
                            />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="projectmayhem@fc.com"
                            type="email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password"
                            placeholder="••••••••"
                            type="password"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })} />
                        <span className="text-xs text-red-500 font-bold">{errorMessage}</span>
                    </LabelInputContainer>


                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit"
                    >
                        Sign up &rarr;
                        <BottomGradient />
                    </button>

                    <div className="text-center mt-2">
                        <span className="text-white text-sm">Already Registered ? <span className="text-blue-500 hover:underline text-sm cursor-pointer" onClick={handleFormStatus}>Sign In</span></span>
                    </div>

                    <div className="my-5 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                    <div className="flex flex-col space-y-4">
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                            type="submit"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                GitHub
                            </span>
                            <BottomGradient />
                        </button>
                        <button
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                            type="submit"
                        >
                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                Google
                            </span>
                            <BottomGradient />
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}





export default SignupPage