// @ts-nocheck
import InputField from "../../../components/InputField";
import type { FormikProps } from "formik";
import type { ComponentProps } from "react";

type FormikInputProps<T> = {
  name: keyof T & string;
  formik: FormikProps<T>;
} & ComponentProps<typeof InputField>;

const FormikInput = ({ name, formik, ...props }: FormikInputProps) => {
  const error = formik.touched[name] && formik.errors[name];
  return (
    <div>
      <InputField
        {...props}
        name={name}
        value={formik.values[name]}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        fieldClass={error ? "border-red-600" : "border-gray-400"}
      />
      {error && <p className="text-red-600 text-sm">{formik?.errors[name]}</p>}
    </div>
  );
};

export default FormikInput;
