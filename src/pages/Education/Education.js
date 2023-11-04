import React, { useEffect } from 'react';
import HomeCard from '../Home/HomeCard';
import { Box, Typography, Grid } from '@mui/material';
import Carousel from 'react-grid-carousel';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { getArticles } from '../../Redux/actions/Home';
import { useSelector } from 'react-redux';

import add1 from "../../assets/images/add1.jpeg"
import add2 from "../../assets/images/add2.jpeg"
import add3 from "../../assets/images/add3.jpeg"
import add4 from "../../assets/images/add4.jpeg"
import add5 from "../../assets/images/add5.jpeg"


function Education() {

  const { Articles } = useSelector(state => state.HomeReducer)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <>

<div className="carousel-container">
            <Carousel cols={5} rows={1} gap={10} loop={true} dotColorActive='#795548' dotColorInactive='#ccc'>

                <Carousel.Item>
                    {/* <Link to="/"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>UPSC</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>

                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                        <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>CAT</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>

                <Carousel.Item>
                   {/* <Link to="/elections"> */}
                   <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>GATE</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>

                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>CBSE</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>

                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>NCERT</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>JR ENGG</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>UPTAT</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>CTAT</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>TECHNOLOGY</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Link to="/elections"> */}
                    <div style={{ backgroundColor: "#606060", height: "50px", width: "100%%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "10px" }}>
                            <h3 style={{ color: "#fff", fontFamily: "Poppins", fontSize: "25px", fontWeight: "700" }}>BSC</h3>
                        </div>
                    {/* </Link> */}
                </Carousel.Item>


            </Carousel>
        </div >

      <Box marginTop={5} sx={{ flexGrow: 1 }} >

        <Grid container>

          <Grid item xs={12} sm={12} md={0.3} lg={0.3} marginTop={2}
          // sx={{backgroundColor:"blue"}}
          >
          </Grid>

          <Grid item xs={12} sm={12} md={8.7} lg={8.7} paddingBlock={2}>

            <Box>
              <Grid container spacing={3}>
                {Articles?.filter(item => item.category[0] === "education").map((result, index) => (
                  <HomeCard key={index} result={result} onClick={() => {
                    console.log('navigate');
                    navigate(`/fullnews/${result?.category[0]}/${result?.title}`, { state: { data: result } });
                  }} />
                ))}
              </Grid>
            </Box>

          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3} sx={{
            marginTop: "16px",
            display: "flex",
            //  backgroundColor:"green",
            flexDirection: "column",
          }} >
            <img src={add2} alt='add' style={{ width: "260px", height: "250px", alignSelf: "center" }} />
            <img src={add3} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
            <img src={add5} alt='add' style={{ width: "260px", height: "250px", marginTop: "20px", alignSelf: "center" }} />
          </Grid>

        </Grid>

      </Box>
    </>
  )
}

export default Education;

