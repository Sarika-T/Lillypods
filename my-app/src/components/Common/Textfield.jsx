import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ width: '100%' ,'& > :not(style)': { width: '100%',color:'white',border:'1px solid grey',borderRadius:'20px'} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" placeholder='Enter Your Email Here' variant="outlined" />
    </Box>
  );
}
