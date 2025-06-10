
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from '../hookFormcomponents/TextInput';
import GenderSelector from '../hookFormcomponents/GenderSelector';
import DateInput from '../hookFormcomponents/DateInput';
import DisorderSelector from '../hookFormcomponents/DisorderSelector';
import TemplateSelect from '../hookFormcomponents/TemplateSelect';

const AddPatientHookForm = () => {
  const {
    control,
    handleSubmit,
    // formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      disorders: [],
      template: ''
    }
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Typography variant="h5" gutterBottom>Add a patient</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextInput name="firstName" label="First name" control={control} rules={{ required: 'First name is required' }} />
          <TextInput name="lastName" label="Last name" control={control} rules={{ required: 'Last name is required' }} />
        </Box>
        <GenderSelector name="gender" control={control} rules={{ required: 'Gender is required' }} />
        <DateInput name="dob" control={control} rules={{ required: 'Date of birth is required' }} />
        <DisorderSelector name="disorders" control={control} />
        <TemplateSelect name="template" control={control} rules={{ required: 'Template is required' }} />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button type="submit" variant="contained" color="error">Save</Button>
          <Button variant="outlined">Cancel</Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddPatientHookForm;
