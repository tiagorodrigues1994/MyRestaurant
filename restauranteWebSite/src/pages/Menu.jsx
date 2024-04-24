import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MenuList } from '../components/data/data'
import Layout from '../components/layout/Layout';

export default function Menu() {
    return (
        <Layout>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    MenuList.map(menu => (
                        <Card key={menu.id}
                            sx={{
                                maxWidth: '390px',
                                display: 'flex',
                                m: 3,
                                borderRadius:'20px',
                                border: '2px solid orange',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    
                                }

                            }}>
                            <CardActionArea>
                                <CardMedia sx={{
                                    minHeight: '400px',
                                    borderBottom:'solid 2px black'
                                }}
                                    component={'img'}
                                    src={menu.image}
                                    alt={menu.name} />

                                <CardContent >
                                    <Typography variant='h5' gutterBottom component={'div'}>
                                        {menu.name}
                                    </Typography>
                                    <Typography sx={{ fontWeight: '500', fontSize: '18px', py: '20px' }} variant='body2'>
                                        {menu.description}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', color: 'orange' }} variant='p'>
                                        {menu.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </Layout>
    )
}