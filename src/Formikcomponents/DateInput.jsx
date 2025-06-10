import { TextField } from "@mui/material";
import { useField } from 'formik';

const DateInput = ({ name, label = "Date of birth" }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      type="date"
      fullWidth
      label={label}
      InputLabelProps={{ shrink: true }}
      sx={{ mb: 2 }}
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default DateInput;
