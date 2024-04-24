import { Box, Paper, TableCell, TableContainer, TableHead, Table, TableRow, Typography, TableBody } from '@mui/material';
import Layout from '../components/layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

export default function Contact() {
    return (
        <Layout >
            <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: 'bold', mb: 2 } }}>
                <Typography variant='h4'>
                    Contact My Restaurant
                </Typography>
                <Typography variant='p'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maxime possimus temporibus numquam vitae ab placeat enim neque. Architecto reiciendis amet necessitatibus quibusdam, fuga, quas dolore sed velit distinctio mollitia doloremque voluptate. Nobis quia laborum in, harum ducimus repudiandae cum?
                </Typography>
            </Box>
            <Box sx={{m:3,width:'600px', ml:10, "@media (max-width:700px)":{
                width:'300px'
            }}}>
                <TableContainer component={Paper}>
                    <Table aria-label="contac table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{bgcolor:'black', color:'white'}} align='center'>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 0800 000 000 (tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MailIcon sx={{ color: 'skyblue', pt: 1 }} /> help@gmail.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: 'skyblue', pt: 1 }} /> 12121212313
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}