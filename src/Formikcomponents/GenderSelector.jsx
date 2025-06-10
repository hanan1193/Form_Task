import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from "@mui/material";
import { useField } from "formik";

const GenderSelector = ({ name }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl component="fieldset" error={meta.touched && Boolean(meta.error)} sx={{ mb: 2 }}>
      <FormLabel component="legend">Gender *</FormLabel>
      <RadioGroup row {...field}>
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
      </RadioGroup>
      {meta.touched && meta.error && (
        <Typography variant="caption" color="error">
          {meta.error}
        </Typography>
      )}
    </FormControl>
  );
};

export default GenderSelector;
