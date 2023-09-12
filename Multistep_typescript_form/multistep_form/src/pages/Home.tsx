// import { CheckBox } from "@mui/icons-material";
import { Card, CardContent, TextField } from "@mui/material";
import { Form, Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import { object, number, mixed } from "yup";
import FormikStepper from "./FormikStepper";
// import React from "react";

function Home() {
  return (
    <div>
      <Card>
        <CardContent>
          <FormikStepper
            initialValues={{
              firstName: "",
              lastName: "",
              millionaire: false,
              money: 0,
              description: "",
            }}
            validationSchema={object({
              money: mixed().when("millionaire", {
                is: true,
                then: number()
                  .required()
                  .min(
                    1000000,
                    "Because you said you are millionaire. You need to have 1 million"
                  ),
                otherwise: number().required(),
              }),
            })}
            onSubmit={() => {}}
          >
            <div>
              <Field
                name="firstName"
                component={TextField}
                label="First Name"
              />
              <Field name="lastName" component={TextField} label="Last Name" />
              <Field
                name="firstName"
                component={CheckboxWithLabel}
                Label={{ label: "I am millionaire" }}
              />
            </div>
            <div>
              <Field
                name="money"
                type="number"
                component={TextField}
                label="All the money I have"
              />
            </div>
            <div>
              <Field
                name="description"
                component={TextField}
                label="Description "
              />
            </div>
          </FormikStepper>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
