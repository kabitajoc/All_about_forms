import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmpassword: Yup.string()
    // .oneOf([Yup.ref("password"), "password must match"])
    .oneOf([Yup.ref("password")], "Passwords must match") // Custom error message
    .required("Confirm Password is required"),
});

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission, e.g., make an API request
      console.log(values);
    },
  });

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          formik.touched.firstName &&
          !formik.errors.firstName &&
          formik.touched.lastName &&
          !formik.errors.lastName
        );
      case 2:
        return (
          formik.touched.email &&
          !formik.errors.email &&
          formik.touched.password &&
          !formik.touched.password &&
          formik.touched.confirmpassword &&
          !formik.touched.confirmpassword
        );
      case 3:
        return true; // Step 3 is always valid
      default:
        return false;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Multi-Step Form</h1>
      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Step 1: Personal Information
          </h2>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              {...formik.getFieldProps("firstName")}
              className="border p-2 w-full"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500">{formik.errors.firstName}</div>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps("lastName")}
              className="border p-2 w-full"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500">{formik.errors.lastName}</div>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Step 2: Contact Information
          </h2>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              className="border p-2 w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps("password")}
              className="border p-2 w-full"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="confirmpassword"
              id="confirmpassword"
              {...formik.getFieldProps("confirmpassword")}
              className="border p-2 w-full"
            />
            {formik.touched.confirmpassword &&
              formik.errors.confirmpassword && (
                <div className="text-red-500">
                  {formik.errors.confirmpassword}
                </div>
              )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Step 3: Review and Submit
          </h2>
          <div>
            <p>First Name: {formik.values.firstName}</p>
            <p>Last Name: {formik.values.lastName}</p>
            <p>Email: {formik.values.email}</p>
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <button onClick={handlePrevStep} className="bg-gray-300 p-2">
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={handleNextStep}
            className={`bg-blue-500 text-white p-2 ${
              !isStepValid() ? "disabled" : ""
            }`}
            disabled={!isStepValid()}
          >
            Next
          </button>
        ) : (
          <button type="submit" className="bg-green-500 text-white p-2">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
