import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css-files/intro.css';
import './css-files/education.css';
import './css-files/experience.css';
import './css-files/skills.css';

const cssContentColor = "#64ffda";

function openCollegeLink() {
  window.open("http://www.skcet.ac.in/");
}

function openSchoolLink() {
  window.open("http://kongumhss.in/");
}

class Education extends React.Component {
  render() {
    return(
      <section class="education" id="education">
       <h3 class="education-topic">Education</h3>

       <div class="clg-skl clg">
        <img class="clg-skl-logo" src="/static/clg_logo.png" alt="College Pic" />
         <div>
          <h1 class="clg-skl-name" onClick={() => openCollegeLink()}>SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
          <p class="clg-skl-values clg-skl-year">BE - ECE (2K13 - 17)</p>
          <p class="clg-skl-values">Secured - 9 / 10</p>
         </div>
       </div>

       <div class="clg-skl skl">
        <img class="clg-skl-logo" src="/static/skl_logo.jpeg" alt="School Pic" />
         <div>
          <h1 class="clg-skl-name" onClick={() => openSchoolLink()}>KONGU VELLALAR MATRICULATION HIGHER SECONDARY SCHOOL</h1>
          <p class="clg-skl-values  clg-skl-year">CSC (2K11 - 13)</p>
          <p class="clg-skl-values">Secured - 9.5 / 10</p>
         </div>
       </div>
      </section>
    );
  }
}

class Skills extends React.Component {
  render() {
    return(
      <section class="skills" id="skills">
        <h1 id="skills-topic">Personal Skills</h1>
        <p class="exp-skills-content">Here are a few technologies I've been working:</p>

        <table>
        <tr>
          <th>Front-end</th>
          <th>Back-end</th>
        </tr>
        <tr>
          <td>
            <ul class="skills-lists">
              <li class="skills-list">HTML</li>
              <li class="skills-list">JS - ReactJS, EmberJS, JQuery</li>
              <li class="skills-list">CSS</li>
            </ul>
          </td>
          <td>
          <ul class="skills-lists">
            <li class="skills-list">Java</li>
            <li class="skills-list">C/C++</li>
            <li class="skills-list">Postgresql</li>
          </ul>            
          </td>
        </tr>
      </table>

      <div class="exp-skills-content soft-skills">Soft Skills</div>
      <div class="exp-skills">
        <div class="exp-skill"><li>Problem Solving</li></div>
        <div class="exp-skill"><li>Adaptability</li></div>
        <div class="exp-skill"><li>Design</li></div>
        <div class="exp-skill"><li>Team Work</li></div>
        <div class="exp-skill"><li>Management</li></div>
      </div>
     </section>
    );
  }
}

class Experience extends React.Component {
  render() {
    return(
      <section class="experience" id="experience">
       <h3 class="experience-topic">Work Experience</h3>
       <p class="comp-name">Zoho Corporation, <span class="comp-loc">Chennai, Tamil Nadu</span></p>
       <p class="comp-des">Member Technical Staff</p>
       <img class="comp-pic" src="/static/zohoone.png" alt="Company Pic" />

       <ul class="exp-lists">
        <li class="exp-list">Zoho One, a product with all Zoho apps in one suite, used to run entire business.</li>
        <li class="exp-list">Developed end to end web app framework for Automation in Zoho One product.</li>
        <li class="exp-list">Enhanced features to adapt REST APIs and scheduled Report generation.</li>
        <li class="exp-list">Implemented process improvements to smooth Development cycle and increased Collaboration.</li>
        <li class="exp-list">As a part of Accounts team, grabbed knowledge of Accounts' concepts such as SAML, SSO, MFA, etc</li>
       </ul>
      </section>
    );
  }
}

class Intro extends React.Component {
  render() {
    return(
      <section class="intro" id="intro">
        <div class="icon-bar">
          <a href="#g" class="gmail">G</a> 
          <a href="#t" class="twitter">T</a> 
          <a href="#l" class="linkedin">L</a>
          <a href="#g" class="github">G</a> 
        </div>
        <img class="profile-pic" src="/static/vasu.jpeg" alt="Profile Pic" />
        <div class="content">
         <div class="hi" style={{color: cssContentColor}}>Hi, this is</div>
         <h1 class="myname">VasanthKumar</h1>
         <h2 class="myprof">Software Engineer</h2>
         <p class="mydesc">
          I'm a <strong><i>Full Stack Software Developer</i></strong>, specializing in building web applications and everything in between.
         </p>
          <div class="get-in-touch outer-box">Get In Touch</div>
        </div>
      </section>
    );
  }
}

class Content extends React.Component {
  render() {
    return(
      <div>
        <Intro />
        <Experience />
        <Skills />
        <Education />
     </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div class="whole" id="whole">
        <div class="header">
          {/* <div>hi</div> --> Create icon here*/}
          <ul class="header-lists">
           <li class="header-list outer-box"><a href="#resume">Resume</a></li>
           <li class="header-list"><a href="#education">Education</a></li>
           <li class="header-list"><a href="#skills">Skills</a></li>
           <li class="header-list"><a href="#experience">Experience</a></li>
           <li class="header-list activ"><a href="#intro">Intro</a></li>
          </ul>
        </div>
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));



// let mainNavLinks = document.querySelectorAll("nav ul li a");
// let mainSections = document.querySelectorAll("main section");

// let lastId;
// let cur = [];

// window.addEventListener("scroll", event => {
//   let fromTop = window.scrollY;

//   mainNavLinks.forEach(link => {
//     let section = document.querySelector(link.hash);

//     if (
//       section.offsetTop <= fromTop &&
//       section.offsetTop + section.offsetHeight > fromTop
//     ) {
//       link.classList.add("current");
//     } else {
//       link.classList.remove("current");
//     }
//   });
// });





// var header = document.getElementsByClassName("header")[0];
//   var btns = header.getElementsByTagName("li");
//   console.log(btns.length);
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       var current = document.getElementsByClassName("activ");
//       current[0].className = current[0].className.replace(" activ", "");
//       this.className += " activ";
//     });
//   }