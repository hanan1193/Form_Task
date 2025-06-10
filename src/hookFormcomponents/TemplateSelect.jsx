
import {
  FormControl, InputLabel, Select, MenuItem, Typography
} from "@mui/material";
import { Controller } from "react-hook-form";

const TemplateSelect = ({ control, name, rules }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <FormControl fullWidth sx={{ mb: 2 }} error={!!fieldState.error}>
        <InputLabel>Workspace template *</InputLabel>
        <Select label="Workspace template" {...field}>
          <MenuItem value="Template A">Template A</MenuItem>
          <MenuItem value="Template B">Template B</MenuItem>
          <MenuItem value="Template C">Template C</MenuItem>
        </Select>
        <Typography variant="caption" color="error">
          {fieldState.error?.message}
        </Typography>
      </FormControl>
    )}
  />
);

export default TemplateSelect;
