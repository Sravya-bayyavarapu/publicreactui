import React from 'react';
import "./home.css";
import Outline32CInfo from '@mds/mds-icons/icons/svg/outline-32-c-info.svg';
import Outline32SingleContent03 from '@mds/mds-icons/icons/svg/outline-32-single-content-03.svg';
import {
    Typography,
    DISPLAY_ONE,
    DISPLAY_TWO,
    DISPLAY_THREE,
    DISPLAY_FOUR,
    DISPLAY_FIVE,
    DISPLAY_SIX,
    HEADING_ONE,
    HEADING_TWO,
    HEADING_THREE,
    HEADING_FOUR,
    HEADING_FIVE,
    HEADING_SIX,
} from '@mds/mds-reactjs-library';

function Home() {
  
  return (
    <div className="Home">
    <main>
      <section class="py-5" style={{"background-color":"#051C2C"}} >
          <div class="container">
              <div class="row">
                  <div class="col-9"> 
                      <div class="text-center py-4 text-white" style={{color:"#FFFFFF", fontFamily: "Bower"}}>
                        <Typography type={DISPLAY_FOUR}>Welcome to the DLPS Intake Portal</Typography>
                      </div>
                      <p class="lead" style={{color:"#FFFFFF"}}>We are here to partner with you to manage your digital learning objects and instructor 
                      led training on the<br></br>Firm's learning platforms.For support and questions around Learn and LearnNow, contact us &nbsp;  
                      <a href="#">here.</a></p>
                  </div>
                  <div class="col">
                      <img src="Banner.png" class= "img-fluid" alt="McKinsey logo" />
                  </div>
              </div>
          </div>
      </section>
    
      <section class="py-5 bg-light">
          <div class="container">
              <div style={{flexDirection:"row", display:'flex', justifyContent: "space-evenly"}}>
                  <div class="bg-white p-3 border" style={{flexGrow:0.5, margin:10, borderBlockColor: "#D0D0D0"}}>
                      <div class="box-part text-center">
                            <img src={Outline32CInfo} alt="outline info circle"></img>
                          <div class="title mt-3" style={{paddingBottom:10}}>
                              <Typography type={HEADING_SIX}>Get Started</Typography>
                          </div>
                          <div class="text mb-3">
                              <span>Get the guidance you need to submit or modify your learning objects</span>
                          </div>
                      </div>
                  </div>
                  <div class="bg-white p-3 border"style={{flexGrow:1, margin:10, borderBlockColor: "#D0D0D0"}}>
                      <div class="box-part text-center">
                            <img src={Outline32SingleContent03} alt="outline single content"></img>
                          <div class="title mt-3" style={{paddingBottom:10}}>
                              <Typography type={HEADING_SIX}>Manage Requests</Typography>
                          </div>
                          <div class="text mb-3">
                              <span>Submit, modify or track your requests</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    
      <section id="testimonial" class="py-5 bg-light">
          <div class="container">
              <div class="text-left py-4" style={{color: "FFFFFF", width:464, height:50, marginTop:-90,fontSize:52}}>
                  <Typography type={DISPLAY_FOUR}>Create New Request</Typography>
              </div>
              <div style={{paddingTop:50}}>
                <p class="lead text-muted">The DLPS Operations team can help you upload and manage your digital learning objects instructor<br></br>
                    led training in Learn and assist you in LearnNow. To learn more about the learning objects and to identify<br></br>
                    which form to use , please refer to the &nbsp;  
                      <a href="#">Glossary of Terms.</a></p>
              </div>
             
              <div class="row bg-white p-3 border" style={{borderBlockColor: "#D0D0D0"}}>
                <div class="col-6 col-md" style={{paddingTop:20}}>
                    <Typography type={HEADING_SIX}>Digital Learning</Typography>
                    <div>
                    <p class="text-muted" style={{paddingTop:10}}>Create or modify online courses, materials
                    (PDF or URL), and videos hosted on Learn</p>
                    </div>
                    <ul class="list-unstyled text-small">
                        <li><a href="#">Digital learning: create or modify</a></li>
                        <li><a href="#">Digital learning: assign users</a></li>
                        <li><a href="#">Curriculum: create or modify</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md" style={{paddingTop:20}}>
                    <Typography type={HEADING_SIX}>Instructor led training</Typography>
                    <div>
                    <p class="text-muted" style={{paddingTop:10}}>Create or modify events and sessions 
                    (offerings of the event) hosted on Learn</p>
                    </div>
                    <ul class="list-unstyled text-small">
                        <li><a href="#">Event: create or modify</a></li>
                        <li><a href="#">Session: create or modify</a></li>
                        <li><a href="#">Sessions: bulk create</a></li>
                        <li><a href="#">Session: cancel</a></li>
                        <li><a href="#">Submit session roster</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md" style={{paddingTop:20}}>
                    <Typography type={HEADING_SIX}>Other requests</Typography>
                    <div>
                    <p class="text-muted" style={{paddingTop:10}}>Request access, report an issue, request a general action or provide your feedback.</p>
                    </div>
                    <ul class="list-unstyled text-small">
                        <li><a href="#">Training and report administrator access</a></li>
                        <li><a href="#">Learning tools and platforms access</a></li>
                        <li><a href="#">General request</a></li>
                    </ul>
                </div>
                <div class="row bg-white mt-1" style={{lineHeight:2, paddingTop:10, color: "#2251FF", borderTop: "1px solid black"}}>
                <Typography type={HEADING_SIX} href="#">View my requests &nbsp;&gt;</Typography>
              </div> 
              </div>
          </div>
      </section>
    
      <section id="testimonial" class="py-5 bg-light">
          <div class="container">
              <div class="text-left py-4" style={{marginTop:-70, fontFamily:"Bower", color:"#000000"}}>
                  <Typography type={DISPLAY_FOUR}>Quick Reference</Typography>
              </div>
              <div class="row bg-white p-3 border" style={{borderBlockColor: "#D0D0D0"}}>
                <div class="col-6 col-md" style={{paddingTop:20}}>
                    <Typography type={HEADING_SIX} >Learning catalog</Typography>
                    <ul class="list-unstyled text-small" style={{paddingTop:20}}>
                        <li><a href="#">Learning catalog report</a></li>
                        <li><a href="#">Future session catalog report</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md" style={{paddingTop:20}}>
                    <Typography type={HEADING_SIX} >Related links</Typography>
                    <ul class="list-unstyled text-small" style={{paddingTop:20}}>
                        <li><a href="#">LearnNow</a></li>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">Other learning content platforms</a></li>
                    </ul>
                </div>
              </div>
          </div>
      </section>
    
    </main>
    </div>
  );
}

export default Home;
