interface FormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}

export const validateAuth = (values: FormValues, isRegister: boolean) => {
  const errors: Partial<FormValues> = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Email is not valid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      values.password
    )
  ) {
    errors.password = "Password is not valid";
  }

  if (isRegister) {
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Confirm password is not matched with password";
    }
  }

  return errors;
};
