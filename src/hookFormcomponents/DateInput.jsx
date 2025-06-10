
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const DateInput = ({ control, name, rules }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField
        type="date"
        fullWidth
        label="Date of birth"
        InputLabelProps={{ shrink: true }}
        sx={{ mb: 2 }}
        {...field}        
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
      />
    )}
  />
);

export default DateInput;
