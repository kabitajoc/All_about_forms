// import React from "react";
// import { TextField } from "@mui/material";

// import { useField, FieldConfig } from "formik";

// interface Props extends FieldConfig {
//   label: string;
// }

// const InputField = ({ label, ...props }: Props) => {
//   const [field, meta] = useField(props);

//   return;
//   <TextField fullWidth label={label} {...field} {...props} />;
//   <TextField
//               fullWidth
//               id="name"
//               name="name"
//               label="Name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               error={formik.touched && Boolean(formik.errors.name)}
//               helperText={formik.touched && formik.errors.name}
//             />
//             <TextField
//               fullWidth
//               id="email"
//               name="email"
//               label="Email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               error={formik.touched && Boolean(formik.errors.email)}
//               helperText={formik.touched && formik.errors.email}
//             />
// };

// export default InputField;
