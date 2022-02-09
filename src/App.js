import { useState } from 'react';

// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

// import { ThemeProvider } from '@mui/system';
import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';

import Skeleton from '@mui/material/Skeleton';

function VerticalDivider() {
  return (
    <Box pb={4} pt={4}>
      <Divider />
    </Box>
  );
}

const MyCustomDiv = styled('div')({
  backgroundColor: 'aliceblue',
  padding: 4,
});

export default function App() {
  const [inputValue, setInputValue] = useState('');

  const [age, setAge] = useState(10);
  const [sliderValue, setSliderValue] = useState(10);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log('App.js (35) - value', value);

    setAge(value);
  };

  const handleChangeSlider = (e) => {
    const { value } = e.target;
    console.log('App.js (35) - value', value);

    setSliderValue(value);
  };

  const handleClick = () => {
    console.log('click');
  };

  const handleOnChange = (e) => {
    const { value } = e.target;

    setInputValue(value);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const isButtonDisabled = inputValue.length > 3 ? false : true;

  const isLoading = false;

  if (isLoading)
    return (
      <Box p={4}>
        <Container>
          <CircularProgress />
        </Container>
      </Box>
    );

  // if (isLoading)
  //   return (
  //     <Box p={4}>
  //       <Container>
  //         <Skeleton variant='text' />
  //         <Skeleton variant='circular' width={40} height={40} />
  //         <Skeleton variant='rectangular' width={210} height={118} />
  //       </Container>
  //     </Box>
  //   );

  return (
    <Box p={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <div>1</div>
          </Grid>

          <Grid item md={3}>
            <div>2</div>
          </Grid>

          <Grid item md={3}>
            <div>3</div>
          </Grid>

          <Grid item md={3}>
            <div>4</div>
          </Grid>
        </Grid>

        <VerticalDivider />

        <Box
          //Styled system Utilities
          // padding={8}
          // mt={10}
          //Custom CSS (in JS) styles
          sx={{
            backgroundColor: 'gray',
            ':hover': {
              backgroundColor: 'lightgray',
            },
          }}
        >
          {/* //Styled Component */}
          {/* <MyCustomDiv> */}
          <TextField
            value={inputValue}
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
            onChange={handleOnChange}
          />
          {/* </MyCustomDiv> */}
        </Box>

        <VerticalDivider />

        <Button
          disabled={isButtonDisabled}
          onClick={handleClick}
          variant='contained'
          sx={{
            backgroundColor: 'red',
          }}
        >
          Press me
        </Button>

        <VerticalDivider />

        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />

        <VerticalDivider />

        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>

          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='male'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='other' control={<Radio />} label='Other' />
          </RadioGroup>
        </FormControl>

        <VerticalDivider />

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Age</InputLabel>

          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            label='Age'
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <VerticalDivider />

        <Slider
          aria-label='Slider'
          value={sliderValue}
          onChange={handleChangeSlider}
        />

        <VerticalDivider />

        <AccessAlarm />
        <ThreeDRotation />
      </Container>
    </Box>
  );
}

//** This is the alert/Snackbar component */
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

// export default function App() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleClick = () => {
//     setIsOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setIsOpen(false);
//   };

//   const action = (
//     <>
//       <Button color='secondary' size='small' onClick={handleClose}>
//         UNDO
//       </Button>

//       <IconButton
//         size='small'
//         aria-label='close'
//         color='inherit'
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize='small' />
//       </IconButton>
//     </>
//   );

//   return (
//     <div>
//       <Button onClick={handleClick}>Open simple snackbar</Button>

//       <Snackbar
//         open={isOpen}
//         autoHideDuration={1000}
//         onClose={handleClose}
//         message='Mensaje de alerta'
//         action={action}
//       />
//     </div>
//   );
// }
