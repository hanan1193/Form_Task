// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import TextInput from '../hookFormcomponents/TextInput';
// import GenderSelector from '../hookFormcomponents/GenderSelector';
// import DateInput from '../hookFormcomponents/DateInput';
// import DisorderSelector from '../hookFormcomponents/DisorderSelector';
// import TemplateSelect from '../hookFormcomponents/TemplateSelect';

// const AddPatientHookForm = () => {
//   const {
//     control,
//     handleSubmit,
//     // formState: { errors } 
//   } = useForm({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       gender: '',
//       dob: '',
//       disorders: [],
//       template: ''
//     }
//   });

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data, null, 2));
//   };

//   return (
//     <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
//       <Typography variant="h5" gutterBottom>
//         Add a patient
//       </Typography>

//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//           <TextInput
//             name="firstName"
//             label="First name"
//             control={control}
//             rules={{ required: 'First name is required' }}
//           />
//           <TextInput
//             name="lastName"
//             label="Last name"
//             control={control}
//             rules={{ required: 'Last name is required' }}
//           />
//         </Box>

//         <GenderSelector
//           name="gender"
//           control={control}
//           rules={{ required: 'Gender is required' }}
//         />

//         <DateInput
//           name="dob"
//           control={control}
//           rules={{
//             required: 'Date of birth is required',
//             validate: value =>
//               new Date(value) <= new Date() || 'Date of birth cannot be in the future'
//           }}
//         />

//         <DisorderSelector name="disorders" control={control} />

//         <TemplateSelect
//           name="template"
//           control={control}
//           rules={{ required: 'Template is required' }}
//         />

//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button type="submit" variant="contained" color="error">
//             Save
//           </Button>
//           <Button variant="outlined">
//             Cancel
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default AddPatientHookForm;

//2-
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useForm, useFieldArray } from 'react-hook-form';
import TextInput from '../hookFormcomponents/TextInput';
import GenderSelector from '../hookFormcomponents/GenderSelector';
import DateInput from '../hookFormcomponents/DateInput';
import DisorderSelector from '../hookFormcomponents/DisorderSelector';
import TemplateSelect from '../hookFormcomponents/TemplateSelect';

const AddPatientHookForm = () => {
  const { control, handleSubmit ,reset} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      disorders: [],
      templates: [{ value: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'templates', // array name for workspace templates
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add a patient
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* First and last name inputs */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextInput
            name="firstName"
            label="First name"
            control={control}
            rules={{ required: 'First name is required' }}
          />
          <TextInput
            name="lastName"
            label="Last name"
            control={control}
            rules={{ required: 'Last name is required' }}
          />
        </Box>

        {/* Gender radio buttons */}
        <GenderSelector
          name="gender"
          control={control}
          rules={{ required: 'Gender is required' }}
        />

        {/* Date of birth picker */}
        <DateInput
          name="dob"
          control={control}
          rules={{
            required: 'Date of birth is required',
            validate: (value) => {
              const selectedDate = new Date(value);
              const today = new Date();
              return selectedDate <= today || 'Date of birth cannot be in the future';
            },
          }}
        />

        {/* Disorder checkboxes */}
        <DisorderSelector name="disorders" control={control} />

        <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
          Workspace templates *
        </Typography>

        {/* Dynamic workspace templates list */}
        {fields.map((field, index) => (
          <Box
            key={field.id}
            sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
          >
            <TemplateSelect
              name={`templates.${index}.value`}
              control={control}
              rules={{ required: 'Template is required' }}
            />
            {index > 0 && (
              <Button
                variant="outlined"
                color="error"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            )}
            {/* Add more button next to the first template */}
            {index === 0 && (
              <Button
                type="button"
                variant="outlined"
                size="small"
                onClick={() => append({ value: '' })}
                sx={{ mt: -2 }}
              >
                Add more workspace
              </Button>
            )}
          </Box>
        ))}

        {/* Submit and cancel buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button type="submit" variant="contained" color="error">
            Save
          </Button>
          <Button variant="outlined" onClick={() => reset()>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddPatientHookForm;
