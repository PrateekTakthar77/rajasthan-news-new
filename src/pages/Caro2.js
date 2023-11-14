import React, { useEffect, useState } from 'react';
import { Divider, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeCard from './HomeCard';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BreakingNewsTitle from '../BreakingNews/BreakingNewsTitle';
import { Card, CardMedia } from '@mui/material';
import Carousel from 'react-grid-carousel';
// import "./HomeCarousell.css"
// import "../Home/HomeCarousell.css"

import redTia from "../../assets/images/RedTriangle.png";
import add from "../../assets/images/img10.jpeg"

import breakingnews from "../../assets/images/breakingNews.jpeg"
import election from "../../assets/images/election.jpeg"
import sportsimg from "../../assets/images/sportsimg.jpeg"
import eduimg from "../../assets/images/educationimg.jpeg"
import Techimg from "../../assets/images/TechnoImg.jpeg"
import Entimg from "../../assets/images/entertainmentimg.jpeg"


import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"
import CircularProgress from '@mui/material/CircularProgress';


function Home() {
  const [loading, setLoading] = useState(true);
  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then(() => {
      setLoading(false)
    })
  }, [])


  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }}>
      {/* ... your existing code ... */}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: "column" }}>
          <CircularProgress style={{ color: '#0a2351' }} />
          <Typography style={{ fontFamily: "Poppins", fontSize: "15px", fontWeight: "500", marginTop: "10px" }} >Loading...</Typography>
        </div>
      ) : (
        <Box sx={{ flexGrow: 1, backgroundColor: "#fff" }} style={{}} >

          {/* Breaking news */}

          <BreakingNewsTitle />


          {/* Carousell */}

          <Grid container sx={{ marginTop: "15px" }}>
            <Grid item xs={12} sm={12} md={0.4} lg={0.4}></Grid>
            <Grid item xs={12} sm={12} md={11.2} lg={11.2}>
              <Carousel cols={4} rows={1} gap={10} loop={true} showDots={false} dotColorActive='#795548' dotColorInactive='#ccc' style={{ padding: "10px" }}>


                <Carousel.Item width="20%">
                  <Link to="/breakingnews" style={{ textDecoration: "none" }}>
                    <Card >
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={breakingnews}
                        title="Contemplative Reptile"
                        sx={{ position: "relative", height: "100px", width: "100%" }}
                      />
                      <Typography
                        sx={{
                          // position: "absolute",
                          top: "20%",
                          width: "8-0%",
                          textAlign: "center",
                          color: "#011e29",
                          backgroundColor: "none",
                          fontFamily: "Poppins",
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        ब्रेकिंग न्यूज
                      </Typography>
                    </Card>
                  </Link>
                </Carousel.Item>


                <Carousel.Item width="20%">
                  <Link to="/elections" style={{ textDecoration: "none" }}>
                    <Card >
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={election}
                        title="Contemplative Reptile"
                        sx={{ position: "relative", height: "100px", width: "100%" }}
                      />
                      <Typography
                        sx={{
                          // position: "absolute",
                          top: "20%",
                          width: "8-0%",
                          textAlign: "center",
                          color: "#011e29",
                          backgroundColor: "none",
                          fontFamily: "Poppins",
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        चुनाव 2023
                      </Typography>
                    </Card>
                  </Link>
                </Carousel.Item>

                <Carousel.Item width="20%">
                  <Link to="/sports" style={{ textDecoration: "none" }}>
                    <Card >
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={sportsimg}
                        title="Contemplative Reptile"
                        sx={{ position: "relative", height: "100px", width: "100%" }}
                      />
                      <Typography
                        sx={{
                          // position: "absolute",
                          top: "20%",
                          width: "8-0%",
                          textAlign: "center",
                          color: "#011e29",
                          backgroundColor: "none",
                          fontFamily: "Poppins",
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        स्पोर्ट्स
                      </Typography>
                    </Card>
                  </Link>
                </Carousel.Item>

                <Carousel.Item width="20%">
                  <Link to="/education" style={{ textDecoration: "none" }}>
                    <Card >
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={eduimg}
                        title="Contemplative Reptile"
                        sx={{ position: "relative", height: "100px", width: "100%" }}
                      />
                      <Typography
                        sx={{
                          // position: "absolute",
                          top: "20%",
                          width: "8-0%",
                          textAlign: "center",
                          color: "#011e29",
                          backgroundColor: "none",
                          fontFamily: "Poppins",
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        एजुकेशन
                      </Typography>
                    </Card>
                  </Link>
                </Carousel.Item>

                <Carousel.Item width="20%">
                  <Link to="/technology" style={{ textDecoration: "none" }}>
                    <Card >
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={Techimg}
                        title="Contemplative Reptile"
                        sx={{ position: "relative", height: "100px", width: "100%" }}
                      />
                      <Typography
                        sx={{
                          // position: "absolute",
                          top: "20%",
                          width: "8-0%",
                          textAlign: "center",
                          color: "#011e29",
                          backgroundColor: "none",
                          fontFamily: "Poppins",
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        टेक्नोलॉजी
                      </Typography>
                    </Card>
                  </Link>
                </Carousel.Item>

                <Carousel.Item width="20%">
                  <Link to="/entertainment" style={{ textDecoration: "none" }}>
                    <Card >
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={Entimg}
                        title="Contemplative Reptile"
                        sx={{ position: "relative", height: "100px", width: "100%" }}
                      />
                      <Typography
                        sx={{
                          // position: "absolute",
                          top: "20%",
                          width: "8-0%",
                          textAlign: "center",
                          color: "#011e29",
                          backgroundColor: "none",
                          fontFamily: "Poppins",
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        मनोरंजन
                      </Typography>
                    </Card>
                  </Link>
                </Carousel.Item>


              </Carousel>


            </Grid>



            <Grid item xs={12} sm={12} md={0.4} lg={0.4}></Grid>

          </Grid>

          {/* CONTENT */}

          <Grid container sx={{ marginTop: "5px" }}>
            <Grid xs={12} sm={12} md={0.5} lg={0.5}
              sx={{
                // backgroundColor: "yellow"
              }}
            ></Grid>

            <Grid item xs={12} sm={12} md={8.5} lg={8.5} paddingBlock={2}
              sx={{
                //  backgroundColor: "green" ,
                padding: "10px"
              }}
            >

              {/* --------ALL NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between" sx={{ paddingTop: '15px' }}>
                < Box style={{ display: "flex", flexDirection: "row" }}>
                  <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic", fontFamily: "Poppins" }}>HINDI NEWS</Typography>
                  <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
                </Box>

                <Box style={{ textDecoration: 'none' }}>
                  <Link to={'/all'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "12px", fontWeight: "700", fontFamily: "Poppins" }}>
                      और देखें
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  {Articles?.map((result, index) => index < 6 && (
                    <HomeCard key={index} result={result} onClick={() => {
                      console.log('navigate');
                      navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                    }} />
                  ))}
                </Grid>
              </Box>

              {/* --------BJP NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between" sx={{ paddingTop: '15px' }}>
                < Box style={{ display: "flex", flexDirection: "row" }}>
                  <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic", fontFamily: "Poppins" }}>BJP</Typography>
                  <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
                </Box>
                <Box style={{ textDecoration: 'none' }}>
                  <Link to={'/bjpnews'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "12px", fontWeight: "700", fontFamily: "Poppins" }}>
                      और देखें
                    </Typography>
                  </Link>

                </Box>
              </Box>

              <Box>
                <Box >
                  <Grid container spacing={3}>
                    {Articles?.filter(item => item.subcategory[0] === "bjp").map((result, index) => index < 6 && (
                      <HomeCard key={index} result={result} onClick={() => {
                        console.log('navigate');
                        navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                      }} />
                    ))}
                  </Grid>
                </Box>
              </Box>

              {/* --------CONGRESS NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between">
                < Box style={{ display: "flex", flexDirection: "row" }}>
                  <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic", fontFamily: "Poppins" }}>CONGRESS</Typography>
                  <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
                </Box>
                <Box style={{ textDecoration: 'none' }}>
                  <Link to={'/congressnews'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "12px", fontWeight: "700", fontFamily: "Poppins" }}>
                      और देखें
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  {Articles?.filter(item => item.subcategory[0] === "congress").map((result, index) => index < 6 && (
                    <HomeCard key={index} result={result} onClick={() => {
                      console.log('navigate');
                      navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                    }} />
                  ))}
                </Grid>
              </Box>

              {/* --------SPORTS NEWS------------------------------------------------ */}

              <Box display="flex" justifyContent="space-between" sx={{ paddingTop: '15px' }}>
                < Box style={{ display: "flex", flexDirection: "row" }}>
                  <Typography style={{ fontSize: "35px", fontWeight: "700", fontStyle: "italic", fontFamily: "Poppins" }}>SPORTS</Typography>
                  <img src={redTia} style={{ width: "28px", height: "28px", marginTop: "10px", marginLeft: "10px" }} />
                </Box>
                <Box style={{ textDecoration: 'none' }}>
                  <Link to={'/sportsnews'} style={{ textDecoration: 'none' }}>
                    <Typography style={{ textDecoration: 'none', color: 'red', fontSize: "12px", fontWeight: "700", fontFamily: "Poppins" }}>
                      और देखें
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  {Articles?.filter(item => item.subcategory[0] === "sports" || item.subcategory[0] === "cricket").map((result, index) => index < 6 && (
                    <HomeCard key={index} result={result} onClick={() => {
                      console.log('navigate');
                      navigate(`/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`, { state: { data: result } });
                    }} />
                  ))}
                </Grid>
              </Box>

            </Grid >


            {/* --------ADVERTISEMENT------------------------------------------------ */}


            <Grid item xs={12} sm={12} md={2.7} lg={2.7}
              sx={{
                // backgroundColor: "purple",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={add2} alt='add' style={{ width: "260px", height: "250px", alignSelf: "center" }} />
              <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add4} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
              <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
            </Grid>
            <Grid xs={12} sm={12} md={0.3} lg={0.3}>

            </Grid>
          </Grid >
        </Box >
      )}
    </Box>
  )
}

export default Home