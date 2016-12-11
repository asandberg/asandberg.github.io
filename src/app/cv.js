import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./cv.html')
})
export class CVComponent {
  constructor() {
    this.workExperience = [
      {
        name: "Futurice",
        time: "05/2014 - 08/2014",
        desc: "As a junior web developer at Futurice I was responsible for working directly with clients to design, create, and maintain web and mobile applications. The work involved technologies such as HTML5, CSS3, JavaScript, AngularJS, Drupal, Node.js, and Git.",
        img: "/img/futurice.png"

      },
      {
        name: "Aalto University, Department of Media",
        time: "08/2012 - 06/2013",
        desc: "At Aalto I worked as a web developer in LeGroup, Learning Environments research group. I was responsible for the implementation of projects ranging from prototypes to WordPress plugins and web applications. The work involved technologies such as HTML5, CSS3, JavaScript, jQuery, PHP, MySQL, and WordPress.",
        img: "/img/aalto.png"
      },
      {
        name: "LudoCraft",
        time: "02/2012 - 06/2012",
        desc: "I worked in a project team creating prototypes of existing game designs. Additionally, I did front-end web development for various websites including teaser pages and browser-based games. The work involved technologies such as Unity3d, C#, HTML5, CSS3, JavaScript, PHP, and MySQL.",
        img: "/img/ludocraft.png"
      },
      {
        name: "Finnish Russia Society",
        time: "12/2010 - 03/2011",
        desc: "I was responsible for the implementation of KuKa, a database for Finnish Russia contacts of culture and civic societies. The work involved technologies such as PHP, MySQL, HTML, and JavaScript.",
        img: "/img/suomivenaja.png"
      }
    ];

    this.education = [
      {
        name: "Degree Program in Information Studies and Interactive Media",
        school: "University of Tampere",
        time: "2013 – ",
        desc: "Interactive media, game studies, Internet, social media, information science. Minor studies: information technology, programming, project management, user interface design, Japanese language.<br/><br/>One year of exchange studies in Daito Bunka University, <strong>Tokyo, Japan</strong>.",
        img: "/img/tampereuniversity.png"
      },
      {
        name: "Vocational Qualification in Business Information Technology",
        school: "Oulu Vocational College",
        time: "2009 – 2012",
        desc: "Studies oriented in game programming. Game design and development, web development, databases, 3d modeling, information processing, customer service, business administration, accounting, project management. <br>Dual qualification in Oulu High School for Adults.",
        img: "/img/osao.png"
      }
    ];

    this.techSkills = [
      "HTML5", "JavaScript", "PHP", "ActionScript", "Silverlight",
      "C++", "C#", "Java", "C",
      "JQuery", "Angular", "SASS",
      "Yeoman", "Grunt", "Gulp",
      "WordPress", "Heroku", "Node.js", "Android SDK", "MVC frameworks",
      "MySQL", "MongoDB",
      "Unity", "MS Office", "Adobe Photoshop", "Git"
    ];
    this.techSkills.sort();

    this.languages = [
      {language: "Finnish", level: "Native"},
      {language: "English", level: "Excellent"},
      {language: "Japanese", level: "Conversational level, JLPT N3 certification"},
      {language: "Swedish", level: "Basics, studies in 2006 - 2010, 2014"},
      {language: "German", level: "Basics, studied in 2004 - 2009"}
    ];
  }
}
