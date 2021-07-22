import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import resume from './data/resume_data.json'
import aboutSelf from './data/portfolio_data.json'
import {ashar_main, ashar_mobile, avatar, organic_create, organic_table, tg_admin, tg_bot} from "./assets";
class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData:
          {
              "basic_info": {
                  "section_name": {
                      "about": "About me",
                      "projects": "Projects",
                      "skills": "Skills",
                      "experience": "Experience"
                  }
              },
              "projects": [
                  {
                      "title": "Сrowdfunding web-app Ashar",
                      "startDate": "2021",
                      "description": "",
                      "images": [
                          ashar_main,
                          ashar_mobile
                      ],
                      "url": "https://ashar.club",
                      "technologies": [
                          {
                              "class": "devicon-react-plain",
                              "name": "React"
                          },
                          {
                              "class": "devicon-redux-original",
                              "name": "Redux"
                          }
                      ]
                  },
                  {
                      "title": "Support backend and frontend of a telegram bot",
                      "startDate": "2021",
                      "description": "DyikanDos is a personal online assistant for a farmer. The bot is sending messages with all sorts of information.",
                      "images": [
                          tg_bot,
                          tg_admin
                      ],
                      "url": "https://t.me/strong_village_bot",
                      "technologies": [
                          {
                              "class": "devicon-angularjs-plain",
                              "name": "Angular"
                          },
                          {
                              "class": "devicon-typescript-plain",
                              "name": "TypeScript"
                          },
                          {
                              "class": "devicon-postgresql-plain",
                              "name": "PostgreSQL"
                          }
                      ]
                  },
                  {
                      "title": "Organic in KG",
                      "startDate": "2020",
                      "description": "Development of commercial mobile online store for the sale of organic products",
                      "images": [
                         organic_table,
                          organic_create
                      ],
                      "url": "https://github.com/sinkrait00/OrganicInKG-Frontend-1",
                      "technologies": [
                          {
                              "class": "devicon-react-plain",
                              "name": "React"
                          },
                          {
                              "class": "devicon-redux-original",
                              "name": "Redux"
                          },
                          {
                              "class": "devicon-javascript-plain",
                              "name": "JavaScript"
                          }
                      ]
                  }
              ],
              "experience": [
                  {
                      "company": "Agrosmart",
                      "title": "Information place for student, university and employers",
                      "years": "06.2021",
                      "mainTech": [
                          "React js"
                      ],
                      "technologies": [
                          "React js",
                          "Redux + Redux saga",
                          "JavaScript"
                      ]
                  },
                  {
                      "company": "Agrosmart",
                      "title": "Support backend and frontend of a telegram bot",
                      "years": "05.2021",
                      "mainTech": [
                          "Angular",
                          "PostgreSQL",
                          "Express js"
                      ],
                      "technologies": [
                          "REST API",
                          "RxJS",
                          "TypeScript",
                          "Bootstrap",
                          "Node.js (Express js)",
                          "Postgresql",
                          "Angular Material"
                      ]
                  },
                  {
                      "company": "Agrosmart",
                      "title": "Сrowdfunding app Ashar",
                      "years": "02.2021 - 04.2021",
                      "mainTech": [
                          "React js"
                      ],
                      "technologies": [
                          "React js",
                          "Redux + Redux thunk",
                          "JavaScript"
                      ]
                  },
                  {
                      "company": "Neobis",
                      "title": "Social project for the sale of eco products",
                      "years": "09.2020 - 12.2020",
                      "mainTech": [
                          "React js"
                      ],
                      "technologies": [
                          "React js",
                          "Redux + Redux thunk",
                          "JavaScript"
                      ]
                  }
              ]
          },
      sharedData: {
          "basic_info": {
              "name": "Arseniy Rybalov",
              "titles": [ "Front-end Developer", "Good man"],
              "social": [
                  {
                      "name": "github",
                      "url": "https://github.com/sinkrait00",
                      "class": "fab fa-github"
                  },
                  {
                      "name": "instagram",
                      "url": "https://www.instagram.com/arseniy.rs",
                      "class": "fab fa-instagram"
                  },
                  {
                      "name": "telegram",
                      "url": "https://t.me/sinkrait",
                      "class": "fab fa-telegram"
                  }
              ],
              "image": avatar
          },
          "skills": {
              "icons": [
                  {
                      "name": "HTML 5",
                      "class": "devicon-html5-plain",
                      "level": "95"
                  },
                  {
                      "name": "CSS 3",
                      "class": "devicon-css3-plain",
                      "level": "95"
                  },
                  {
                      "name": "Redux",
                      "class": "devicon-redux-original",
                      "level": "80"
                  },
                  {
                      "name": "Vue",
                      "class": "devicon-vuejs-plain",
                      "level": "80"
                  },
                  {
                      "name": "React",
                      "class": "devicon-react-plain",
                      "level": "80"
                  },
                  {
                      "name": "Angular",
                      "class": "devicon-angularjs-plain",
                      "level": "80"
                  },
                  {
                      "name": "TypeScript",
                      "class": "devicon-typescript-plain",
                      "level": "90"
                  },
                  {
                      "name": "JavaScript",
                      "class": "devicon-javascript-plain",
                      "level": "70"
                  },
                  {
                      "name": "Sass",
                      "class": "devicon-sass-original",
                      "level": "75"
                  },
                  {
                      "name": "Bootstrap",
                      "class": "devicon-bootstrap-plain",
                      "level": "85"
                  },
                  {
                      "name": "C#",
                      "class": "devicon-csharp-plain",
                      "level": "65"
                  },
                  {
                      "name": "Postgresql",
                      "class": "devicon-postgresql-plain",
                      "level": "60"
                  }
              ]
          }
      },
    };
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
