import Button from "../../components/Button";
import InputField from "../../components/InputField";
import Header from "../../layout/Header";
import { useFormik } from "formik";

interface FormValues {
  email: string;
  password: string;
}
const LoginScreen = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
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

      return errors;
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const handleChange = (e: { target: { name: string; value: string } }) => {
  //   setInput((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/274d310a-9543-4b32-87f3-147b372abc00/web/IN-en-20251201-TRIFECTA-perspective_baf6d3bc-eece-4a63-bcbb-e0a2f5d9d9ec_large.jpg"
        alt="bg_img"
      />
      <div className="">
        <Header />

        <form
          onSubmit={formik.handleSubmit}
          className="absolute top-25 left-2/6 bg-black/90 p-15 rounded-md"
        >
          <h2 className="font-bold text-white text-3xl mb-5">Sign In</h2>

          <div>
            <InputField
              name="email"
              value={formik?.values?.email}
              handleChange={formik?.handleChange}
              handleBlur={formik?.handleBlur}
              placeholder="Email or mobile number"
              fieldClass={
                formik?.touched?.email && formik?.errors?.email
                  ? "border-red-600"
                  : "border-gray-400"
              }
            />
            {formik?.touched?.email && formik?.errors?.email && (
              <p className="text-red-600 text-sm">{formik?.errors?.email}</p>
            )}
          </div>
          <br />
          <div>
            <InputField
              name="password"
              value={formik?.values?.password}
              handleBlur={formik?.handleBlur}
              handleChange={formik?.handleChange}
              placeholder="Password"
              fieldClass={
                formik?.touched?.password && formik?.errors?.password
                  ? "border-red-600"
                  : "border-gray-400"
              }
            />
            {formik?.touched?.password && formik?.errors?.password && (
              <p className="text-red-600 text-sm">{formik?.errors?.password}</p>
            )}
          </div>
          <Button title="Sign In" />
          <p className="text-gray-400 text-center">OR</p>
          <p className="underline text-white text-center cursor-pointer">
            Forgot password ?
          </p>
          <p className="text-white my-2 text-center">
            New to Netflix?{" "}
            <span className="underline cursor-pointer">Sign up now.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
