import React from "react";
import { FormikConfig, FormikValues, Formik, Form } from "formik";
import { Button } from "@mui/material";
import { useState } from "react";
function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  return (
    <div>
      <Formik {...props}>
        <Form autoComplete="off">
          {currentChild}

          {step >= 0 ? (
            <Button onClick={() => setStep((s) => s - 1)}>Back</Button>
          ) : null}
          <Button type="submit">Next</Button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikStepper;
