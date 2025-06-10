import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from "@mui/material";
import { useField } from "formik";

const TemplateSelect = ({ name }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth sx={{ mb: 2 }} error={meta.touched && Boolean(meta.error)}>
      <InputLabel id={`${name}-label`}>Workspace template *</InputLabel>
      <Select
        labelId={`${name}-label`}
        label="Workspace template"
        {...field}
      >
        <MenuItem value="Template A">Template A</MenuItem>
        <MenuItem value="Template B">Template B</MenuItem>
        <MenuItem value="Template C">Template C</MenuItem>
      </Select>
      {meta.touched && meta.error && (
        <Typography variant="caption" color="error">
          {meta.error}
        </Typography>
      )}
    </FormControl>
  );
};

export default TemplateSelect;
