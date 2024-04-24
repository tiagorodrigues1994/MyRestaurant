import { Button, TextField, Stack } from '@mui/material';

import Header from "./Header";
import Footer from './Footer';

export default function Layout({children}){
    return(
        <Stack >
 <Header/>
        <Stack >
            {children}
        </Stack>
        <Footer />
        </Stack>
       

        
    )
}