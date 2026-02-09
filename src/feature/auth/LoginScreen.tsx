import { Link, useNavigate, type NavigateFunction } from "react-router";
import Button from "../../components/Button";
import Header from "../../layout/Header";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import FormikInput from "./component/FormikInput";
import { validateAuth } from "../../utils/validation";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}
const LoginScreen = () => {
  const navigate: NavigateFunction = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => validateAuth(values, false),

    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredentail) => {
          const user = userCredentail.user;
          console.log(user);

          if (user) {
            navigate("/dashboard");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    },
  });

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
            <FormikInput
              name={"email"}
              formik={formik}
              type={"email"}
              placeholder="Email or mobile number"
            />
          </div>
          <br />
          <div>
            <FormikInput
              name={"password"}
              formik={formik}
              type={"password"}
              placeholder="Password"
            />
          </div>
          <p className="text-red-600 text-sm my-2">{errorMessage}</p>
          <Button title="Sign In" />
          <p className="text-gray-400 text-center">OR</p>
          <p className="underline text-white text-center cursor-pointer">
            Forgot password ?
          </p>
          <p className="text-white my-2 text-center">
            New to Netflix?{" "}
            <Link to={"/signup"}>
              <span className="underline cursor-pointer">Sign up now.</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
