import { TextField } from "@mui/material";
import { useField } from "formik";

const TextInput = ({ name, label, type = "text" }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      sx={{ mb: 2 }}
    />
  );
};

export default TextInput;
