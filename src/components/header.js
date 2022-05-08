import React from "react";

function Header() {
    return (
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
    );
  }
  export default Header;