import {Component} from '@angular/core';
import {LevelService} from './level.service.js';

@Component({
  selector: 'fountain-app',
  template: require('./cv.html'),
  host: {'(window:scroll)': 'track($event)'}
})
export class CVComponent {
  constructor(levels: LevelService) {
    this.levels = levels;
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

    this.techSkills = [
      "HTML5", "JavaScript", "PHP", "Silverlight",
      "C++", "C#", "Java", "C",
      "JQuery", "Angular", "SASS",
      "Yeoman", "Grunt", "Gulp",
      "WordPress", "Heroku", "Node.js", "Android SDK", "MVC frameworks",
      "MySQL", "MongoDB",
      "Unity", "MS Office", "Adobe Photoshop", "Git", "Python", "Matlab"
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

  solution = ["Heroku", "Angular", "SASS", "Silverlight", "Unity", "Grunt", "Adobe Photoshop", "MongoDB"];
  secretProgress = 0;
  skillSecret(skill) {
    if (skill === this.solution[this.secretProgress]) {
      if (this.secretProgress === this.solution.length - 1) {
        this.levels.triggerChallenge("techSkillSecret");
      } else {
        this.secretProgress++;
      }
    }
  }

  tripToJapan() {
    this.levels.triggerChallenge("tripToJapan");
  }
  dualWield() {
    this.levels.triggerChallenge("dualWield");
  }

  nextSkillSecret(skill) {
    return this.secretProgress !== 0 && skill === this.solution[this.secretProgress];
  }

  track($event) {
    const body = document.body;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.levels.triggerChallenge("bottomOfCV");
    }
  }
}
