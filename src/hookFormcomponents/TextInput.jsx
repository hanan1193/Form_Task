
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextInput = ({ name, label, control, rules }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField
        fullWidth
        label={label}
        {...field}
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
    )}
  />
);

export default TextInput;
