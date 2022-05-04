import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
function App() {
  
  return (
    
<div className="App">
<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <span class="text-wrap" style={{width: 110}}>McKinsey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Company</span>
      <div class="container">
          <div>Digital Learning Platforms & Solutions (DLPS) Operations</div>
          <div class="collapse navbar-collapse d-flex w-100" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item active">
                      <a class="nav-link p-3" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link p-3" href="#">My requests</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link p-3" href="#">Guides and resources</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link p-3" href="#">Reporting</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link p-3" href="#">Meet the team</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</header>
<main>
  <section class="py-5 bg-dark">
      <div class="container">
          <div class="text-center py-4 text-white">
              <h1>Welcome to the DLPS Intake Portal</h1>
          </div>
          <div class="row">
              <div>
                  <p class="lead text-muted">We are here to partner with you to manage your digital learning objects and instructor lcd training on the 
                  Firm's learning platforms. for support and questions around Learn and LearnNow, contact us &nbsp;  
                  <a href="#">here.</a></p>
              </div>
          </div>
      </div>
  </section>

  <section class="py-5 bg-light">
      <div class="container">
          <div class="row">
              <div class="col-md-6 col-sm-6 mb-2 bg-white p-3">
                  <div class="box-part text-center">
                      <i class="fa fa-info-circle fa-3x mb-3" aria-hidden="true"></i>
                      <div class="title">
                          <h4>Get Started</h4>
                      </div>
                      <div class="text mb-3">
                          <span>Get the guidance you need to submit or modify your learning objects</span>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-sm-6 mb-2 bg-white p-3">
                  <div class="box-part text-center">
                      <i class="fa fa-file fa-3x mb-3" aria-hidden="true"></i>
                      <div class="title">
                          <h4>Manage Requests</h4>
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
          <div class="text-left py-4">
              <h1>Create New Request</h1>
          </div>
          <div>
            <p class="lead text-muted">The DLPS Operations team can help you upload and manageyour digital learning objects instructor led 
                  training in Learn and assist you in Learn Now. To learn more about the learning objects and to identify which form to use , please
                  refer to the &nbsp;  
                  <a href="#">Glossary of Terms.</a></p>
          </div>
         
          <div class="row bg-white p-3">
            <div class="col-6 col-md">
                <h5>Digital Learning</h5>
                <div>
                <p class="text-muted">Create or modify online courses, materials
                (PDF or URL), and videos hosted on Learn</p>
                </div>
                <ul class="list-unstyled text-small">
                    <li><a href="#">Digital learning create or modify</a></li>
                    <li><a href="#">Digital learning assign users</a></li>
                    <li><a href="#">Curriculum create or modify</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Instructor led training</h5>
                <div>
                <p class="text-muted">Create or modify events and sessions 
                (offerings of the event) hosted on Learn</p>
                </div>
                <ul class="list-unstyled text-small">
                    <li><a href="#">Event create or modify</a></li>
                    <li><a href="#">Sessions create or modify</a></li>
                    <li><a href="#">Sessions bulk create</a></li>
                    <li><a href="#">Sessionscancel</a></li>
                    <li><a href="#">Submit session roster</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Other requests</h5>
                <div>
                <p class="text-muted">Requerst administrator access</p>
                </div>
                <ul class="list-unstyled text-small">
                    <li><a href="#">Training and report administration</a></li>
                    <li><a href="#">Learning tools and platforms</a></li>
                    <li><a href="#">General request</a></li>
                </ul>
            </div>
          </div>
      </div>
  </section>

  <section id="testimonial" class="py-5 bg-light">
      <div class="container">
          <div class="text-left py-4">
              <h1>Quick Reference</h1>
          </div>
          <div class="row bg-white p-3">
            <div class="col-6 col-md">
                <h5>Learning catalog</h5>
                <ul class="list-unstyled text-small">
                    <li><a href="#">Learning catalog</a></li>
                    <li><a href="#">Future session catalog</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Related links</h5>
                <ul class="list-unstyled text-small">
                    <li><a href="#">LearnNow</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Other learning content platforms</a></li>
                </ul>
            </div>
          </div>
      </div>
  </section>

</main>
<footer>
    <div class="float-start p-5" style={{width: 110}}>McKinsey &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&Company</div>
    <div class="float-end p-5">
      <i class="fa fa-envelope" aria-hidden="true"></i>
      &nbsp;<a href="#">Contact us</a>
    </div>
</footer>
      
    </div>
  );
}

export default App;
