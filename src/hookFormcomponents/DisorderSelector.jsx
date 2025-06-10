
import {
  FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Typography
} from "@mui/material";
import { Controller } from "react-hook-form";

const disorders = ['PD', 'ET', 'Dyst_G', 'Dyst_NG', 'OCD', 'Tourette', 'Epilepsy', 'Other'];

const DisorderSelector = ({ control, name }) => (
  <FormControl component="fieldset" sx={{ mb: 2 }}>
    <FormLabel>Disorder *</FormLabel>
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (val) => val.length > 0 || "At least one disorder is required",
      }}
      render={({ field, fieldState }) => (
        <>
          <FormGroup row>
            {disorders.map((disorder) => (
              <FormControlLabel
                key={disorder}
                label={disorder}
                control={
                  <Checkbox
                    checked={field.value.includes(disorder)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const value = field.value;
                      if (checked) field.onChange([...value, disorder]);
                      else field.onChange(value.filter((item) => item !== disorder));
                    }}
                  />
                }
              />
            ))}
          </FormGroup>
          <Typography variant="caption" color="error">
            {fieldState.error?.message}
          </Typography>
        </>
      )}
    />
  </FormControl>
);

export default DisorderSelector;
