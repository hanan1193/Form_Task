import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInput from '../Formikcomponents/TextInput.jsx';
import GenderSelector from '../Formikcomponents/GenderSelector';
import DateInput from '../Formikcomponents/DateInput';
import DisorderSelector from '../Formikcomponents/DisorderSelector';
import TemplateSelect from '../Formikcomponents/TemplateSelect';


const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date().required('Date of birth is required'),
  disorders: Yup.array().min(1, 'At least one disorder is required'),
  template: Yup.string().required('Template is required')
});

const AddPatientFormikForm = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Typography variant="h5" gutterBottom>Add a patient</Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          dob: '',
          disorders: [],
          template: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {() => (
          <Form noValidate>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextInput name="firstName" label="First name" />
              <TextInput name="lastName" label="Last name" />
            </Box>
            <GenderSelector name="gender" />
            <DateInput name="dob" />
            <DisorderSelector name="disorders" />
            <TemplateSelect name="template" />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button type="submit" variant="contained" color="error">Save</Button>
              <Button type="reset" variant="outlined">Cancel</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddPatientFormikForm;



