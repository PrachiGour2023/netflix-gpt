// @ts-nocheck
import { Link, useNavigate, type NavigateFunction } from "react-router";
import Button from "../../components/Button";
import Header from "../../layout/Header";
import { useFormik } from "formik";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { validateAuth } from "../../utils/validation";
import FormikInput from "./component/FormikInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/user/userSlice";

export interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const RegistrationScreen = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: (values) => validateAuth(values, true),

    onSubmit: (values) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            updateProfile(user, {
              displayName: values.name,
              photoURL:
                "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                navigate("/dashboard");
              })
              .catch((error) => {
                setErrorMessage(error);
              });
          }
        })
        .catch((error: FirebaseError) => {
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
          <h2 className="font-bold text-white text-3xl mb-5">Sign Up</h2>
          <div>
            <FormikInput
              name="name"
              type="name"
              placeholder="Username"
              formik={formik}
            />
          </div>
          <br />
          <div>
            <FormikInput
              name="email"
              type="email"
              placeholder="Email or mobile number"
              formik={formik}
            />
          </div>
          <br />
          <div>
            <FormikInput
              name="password"
              type="password"
              placeholder="Password"
              formik={formik}
            />
          </div>
          <br />
          <div>
            <FormikInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              formik={formik}
            />
          </div>
          <p className="text-red-600 text-sm my-2">{errorMessage}</p>
          <Button title="Sign Up" />
          <p className="text-gray-400 text-center">OR</p>
          <p className="text-white my-2 text-center">
            Already Registered?{" "}
            <Link to={"/"}>
              <span className="underline cursor-pointer">Sign in now.</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationScreen;
