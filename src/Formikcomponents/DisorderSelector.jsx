import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography
} from "@mui/material";
import {  useFormikContext } from "formik";

const disorders = ['PD', 'ET', 'Dyst_G', 'Dyst_NG', 'OCD', 'Tourette', 'Epilepsy', 'Other'];

const DisorderSelector = ({ name }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  const fieldValue = values[name] || [];

  const handleChange = (disorder) => (event) => {
    const checked = event.target.checked;
    if (checked) {
      setFieldValue(name, [...fieldValue, disorder]);
    } else {
      setFieldValue(name, fieldValue.filter((item) => item !== disorder));
    }
  };

  return (
    <FormControl component="fieldset" sx={{ mb: 2 }}>
      <FormLabel component="legend">Disorder *</FormLabel>
      <FormGroup row>
        {disorders.map((disorder) => (
          <FormControlLabel
            key={disorder}
            label={disorder}
            control={
              <Checkbox
                checked={fieldValue.includes(disorder)}
                onChange={handleChange(disorder)}
              />
            }
          />
        ))}
      </FormGroup>
      {touched[name] && errors[name] && (
        <Typography variant="caption" color="error">
          {errors[name]}
        </Typography>
      )}
    </FormControl>
  );
};

export default DisorderSelector;
