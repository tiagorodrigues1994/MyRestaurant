import { Button, Stack, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom'
import Banner from '../components/images/banner.jpeg'
export default function Home() {
    return (
        <Layout >
            <Stack sx={{ height: '90vh',
             backgroundImage: `url(${Banner})`,
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             height: '90vh',
             '@media (max-width:600px)': {
                justifyContent: 'center',
                alignItems: 'center'
            },
        }}>
                <Stack
                    sx={{
                       width:'auto',
                       ml:'30px',
                       '@media (max-width:600px)': {
                        marginLeft: 0,
                        borderRadius: '10px',
                        width: '90%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor: '#121619',
                        color: 'white',
                    },
                      
                    }}>
                    <Typography variant='h4' sx={{
                        fontWeight: 'bold',
                        fontSize: '70px',
                        fontFamily: "Gill Sans, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        '@media (max-width:600px)': {
                            fontSize: '40px',
                            height: '30px',
                            margin: '30px 0',
                            color: "white"
                        },
                    }}>
                        Food Wedsite
                    </Typography>
                    <Typography variant='p' sx={{
                        mt: '15px',
                        p: '0px',
                        fontSize: '44px',
                        color: "white",
                        fontFamily: "Gill Sans, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        '@media (max-width:600px)': {
                            fontSize:"30px",
                            color: "white"
                        },
                        
                    }}>
                        Best Food In California
                    </Typography>
                    <Button variant="contained"
                        sx={{
                            width: '200px',
                            height:'50px',
                            mt:'20px',
                            background:'black',
                            fontSize:'20px',
                            '&:hover': {
                                backgroundColor: 'gray',
                                color: 'black',
                                transition: '0.3s ease-in'
                            },
                            '@media (max-width:600px)': {
                                backgroundColor:'white',
                                color:'#121619',
                                mb:'30px',
                                width:'150px',
                                height:'30px',
                                fontSize:'16px'
                            },
                        }}
                        component={Link}
                        to={'/'}>
                        Order Now
                    </Button>
                </Stack>
            </Stack>

        </Layout>
    )
}