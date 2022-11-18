import {createTheme} from '@mui/material';

const theme=createTheme({
    palette:{
        mode:"dark",
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius:20,
                },
            },
        },
    },
    typography:{
        button:{
            fontSize:"1rem",
        },
    },


    },
)
export default theme