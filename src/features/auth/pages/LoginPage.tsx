import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { BottomGradient } from "../components/BottomGradient";
import { LabelInputContainer } from "../components/LabelInputContainer";
import { useRef, useState } from "react";
import { checkValidation } from "../../../utils/validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/slice/userSlice";
import { useNavigate } from "react-router";


const LoginPage = ({ handleFormStatus }: {
    handleFormStatus: () => void;
}) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = checkValidation({
            email: email.current?.value,
            password: password.current?.value,
        });

        setErrorMessage(result)
        if (!email.current || !password.current) return;

        if (result === null) {
            signInWithEmailAndPassword(auth, email?.current?.value, password.current?.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(addUser({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName
                    }))
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
            <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-5 dark:bg-black">
                <h2 className="text-xl font-bold text-neutral-800 dark:text-red-500 text-center">
                    Welcome Back !
                </h2>
                <form className="my-8" onSubmit={handleSubmitForm}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input ref={email} id="email" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input ref={password} id="password" placeholder="••••••••" type="password" />
                        <span className="text-xs text-red-500 font-bold">{errorMessage}</span>
                    </LabelInputContainer>

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit"
                    >
                        Sign In &rarr;
                        <BottomGradient />
                    </button>

                    <div className="text-center mt-4">
                        <span className="text-white text-sm">New to Netflix ? <span className="text-blue-500 hover:underline text-sm cursor-pointer" onClick={handleFormStatus}>Sign up</span></span>
                    </div>

                </form>
            </div>
        </>
    )
}

export default LoginPage