type ValidationProps = {
    email: string | undefined;
    password: string | undefined;
    firstname?: string;
    lastname?: string;
    isLoginForm?: boolean | null;
};

export const checkValidation = ({ email = "", password = "", firstname = "", lastname = "",isLoginForm }: ValidationProps) => {

    console.log(isLoginForm)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,}$/;
    const nameRegex = /^[a-zA-Z]+$/;

    if (!emailRegex.test(email)) return "Email is not valid";
    if (!passwordRegex.test(password)) return "Password is not valid";

    if (!isLoginForm && isLoginForm !== undefined && !nameRegex.test(firstname)) return "First name must contain only letters";
    if (!isLoginForm && isLoginForm !== undefined && !nameRegex.test(lastname)) return "Last name must contain only letters";

    return null;
}