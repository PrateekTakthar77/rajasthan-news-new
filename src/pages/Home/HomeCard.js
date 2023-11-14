import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material'
import { Typography, Grid, Box } from '@mui/material';

const HomeCard = ({ result, onClick }) => {

    function createMarkup(htmlContent) {
        return { __html: htmlContent };
    }
    return (
        <Grid item xs={12} sm={12} md={4} lg={4}>

            <Card variant="outlined" >
                <CardActionArea onClick={onClick}>
                    <Box>
                    <CardMedia
                        component="img"
                        height="200"
                        image={result?.photo}
                        alt="Main Image"
                        

                    />
                    </Box>
                    <CardContent>
                    <Box sx={{}}>
                        <Typography gutterBottom sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            color: "#D2122E",
                            fontSize: "18px",
                            fontFamily:"Poppins", 
                            fontWeight: "600",
                            textAlign: "justify",
                           
                        }}>
                            {result?.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            color: "black",
                            fontSize: "15px",
                            fontWeight: "500",
                            fontFamily:"Poppins",
                            textAlign: "justify"
                        }} dangerouslySetInnerHTML={createMarkup(result?.description)} />
                    </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        
    )
}

export default HomeCard
