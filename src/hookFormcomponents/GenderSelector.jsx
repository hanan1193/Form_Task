
import {
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography
} from "@mui/material";
import { Controller } from "react-hook-form";

const GenderSelector = ({ control, name, rules }) => (
  <FormControl component="fieldset" error={!!rules} sx={{ mb: 2 }}>
    <FormLabel>Gender *</FormLabel>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <RadioGroup row {...field}>
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>
          <Typography variant="caption" color="error">
            {fieldState.error?.message}
          </Typography>
        </>
      )}
    />
  </FormControl>
);

export default GenderSelector;
