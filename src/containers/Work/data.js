import isales from '../../resources/images/iSalesCRM_logo_white.png';
import hpe from '../../resources/images/HPE.png';
import pelco from '../../resources/images/pelco.png';

import mbk from '../../resources/images/mbklogowhite.svg';
import extralife from '../../resources/images/extra-life.png';
import lumberjack from '../../resources/images/redactedlumberjack.png';

import pelco1 from '../../resources/images/pelco1.png';

import mbk1 from '../../resources/images/mbk1.png';
import mbk2 from '../../resources/images/mbk2.png';
import mbk3 from '../../resources/images/mbk3.png';

import acmw1 from '../../resources/images/acmw1.jpg';
import acmw2 from '../../resources/images/acmw2.jpg';
import acmw3 from '../../resources/images/acmw3.png';
import acmw4 from '../../resources/images/acmw4.jpg';

import extralife1 from '../../resources/images/extralife1.jpg';


export const professional = [
  {
    company: "iSalesCRM",
    position: "Front End Software Engineer",
    location: "Denver, Colorado",
    dates: "April, 2020 - Today",
    logo: isales,
    images: [],
    description: <div>
      I am currently a Front End Software Engineer at iSalesCRM on a small but effective engineering team. The company 
      is at a critical point of growth as it takes its success and revenue and pours it back into the engineering 
      department and the progress of the company on the whole. Joining the company at this stage has given me a unique 
      perspective on transitioning from a small to a medium sized company, and more importantly, on how that change 
      affects the software. My position gives me the opportunity to influence the direction of our system’s architecture 
      and design, while also learning from the decisions of the more experienced developers around me.
      <br/><br/>
      I get to work on large features solo or collaboratively with senior developers at the company and I am constantly 
      learning how to tackle new problems that arise with scaling applications. I have the creative freedom to make my 
      own design choices as I work on new elements and the trust and respect from my superiors to offer suggestions and 
      ideas about important aspects of our software.
    </div>,
    link: "isalescrm.io"
  },
  {
    company: "Hewlett Packard Enterprise",
    position: "Software Development Intern",
    location: "Fort Collins, Colorado",
    dates: "Summer, Fall 2019",
    logo: hpe,
    images: [{title: "Lumberjack, a log processor", images: [{src: lumberjack, caption:"Lumberjack"}]}],
    description: <div>
      At the beginning of my HPE internship, I was given a problem: too much developer time was being spent combing through 
      log files from multiple systems, each with 100k+ lines. I was given creative control to solve this problem and over a 
      six month period, I developed Lumberjack (so titled because it broke down logs).
      <br/><br/>
      Lumberjack was a log processing service I wrote for Hewlett Packard Enterprise. It was one of my first experiences 
      designing an application end to end and it consisted of three main parts: a robust C# parsing system that processed new 
      logs every night, a PostgresQL database to store the parsed information and a Node GraphQL server to access it, and the 
      ReactJS interface built to display linked events in a flow that accurately emulated data flow across multiple machines 
      working off of different time servers.
    </div>,
    link: "hpe.com"
  },
  {
    company: "Pelco",
    position: "Software Quality Assurance Intern",
    location: "Fort Collins, Colorado",
    dates: "Summer - Fall 2018",
    logo: pelco,
    images: [],
    description: <div>
      At Pelco, I spent the first few weeks of my internship doing manual testing for security camera firmware. This helped me learn my way around the camera models, the bug submission process, and the company pipeline in general before I got to join a remote QA automation team with whom I wrote API tests using Python and the Robot Framework for a proprietary video management system that tracks feeds from and interfaces with Pelco's cameras and certain third party devices.
      <br/><br/>
      Being my first experience in a software-focussed workplace, a lot of what I took away from the job are foundational skills that I now consider second nature. It was my first time using Git. My first daily stand-ups. My first kanban boards. I learned what a REST API was and how to use Postman. I started out clicking my way through network interfaces for security cameras and looking for bugs and by the end, I was taking tasks off the same pile as the rest of my team of full-time QA engineers.
    </div>,
    link: "pelco.com"
  }
]

export const volunteer = [
  {
    company: "My Brother's Keeper 617",
    position: "Project manager, developer",
    location: "Boston, Massachusetts",
    dates: "August, 2020 - Today",
    logo: mbk,
    images: [
      {title: "Community posts", images: [{src: mbk1, alt:"MBK App Prototype"}]}, 
      {title: "Calendar events", images: [{src: mbk2, alt:"MBK App Prototype"}]}, 
      {title: "Profile", images: [{src: mbk3, alt:"MBK App Prototype"}]}
    ],
    description: <div>
      I am among a team of seven engineers working on an internal social network for the Boston nonprofit My Brother’s 
      Keeper 617. MBK617 does some amazing work for black youth in the Boston area and we’re doing what we can to make 
      some of that work a little easier for them. I’m beyond excited about this project, which we were connected to through 
      the super cool efforts of <a rel="noreferrer" target="_blank" href="https://buildforblacklives.com">Build For Black Lives</a>.
      <br/><br/>
      While this project is still deeply in its beginning phases, my contribution so far has largely been on the architectural 
      and administrative sides of things, writing repository skeletons, making stack decisions, and doing database setup. I have
      also done some prototyping for the app's layout and design. In the works is a React Native mobile app and a Node server using 
      a Mongodb non-relational database. 
    </div>,
    link: "mbk617.com"
  },
  {
    company: "Extra Life",
    position: "Project leader, event coordinator",
    location: "Fort Collins, Colorado",
    dates: "November, 2019",
    logo: extralife,
    images: [{ title: "Poster", images: [{src: extralife1, alt:"Extra Life poster"}] }],

    description: <div>
      Extra Life is a lovely organization that facilitates charity events across the continent by providing a platform to 
      receive donations at and an easy system for directing those funds to a local children's hospital. During my final semester 
      of my undergraduate degree, I had the pleasure of planning a 24 hour Extra Life event on CSU's campus, marketed primarily to
      the Computer Science department. I obtained sponsorships and funding from local businesses, coordinated venue needs, and 
      ended up raising over $1000 for a local children’s hospital and having a fantastic day filled with all kinds of games (video, 
      board, trivia, roleplaying, etc.).
    </div>,
    link: "extra-life.org"
  },
  {
    company: "ACM-W",
    position: "Treasurer, Webmaster, Ex-officio",
    location: "Fort Collins, Colorado",
    dates: "August 2016 - December 2019",
    // logo: acmw,
    images: [
      { title: "Hiking with ACM-W", images: [{src: acmw1, caption:"Hiking with ACM-W"}] }, 
      { title: "ACM-W Community Board Game Night", images: [{src: acmw2, caption:"ACM-W Community Board Games"}] }, 
      { title: "Grace Hopper, 2018", images: [{src: acmw3, caption:"Grace Hopper, 2018"}] }, 
      { title: "Collegian Photo", images: [{src: acmw4, caption:"Collegian Photo"}] }
    ],
    description: <div>
      ACM-W was a grounding force in my life throughout the duration of my experience at Colorado State University. I sought out community 
      with the club and found it, and was happy to spend the remainder of my time in school working to bring that community to others. I 
      started a long running tradition of department game nights with consistently high attendence from students and staff, which has continued 
      even in my absence. I served in multiple leadership positions, including Treasurer and Webmaster, for the organization. I also mentored
      new leadership after stepping down as an officer. 
      <br/><br/>
      While working with this organization, I organized, attended, and volunteered for events designed both to foster community amongst 
      and create opportunities for women and minorities in Computer Science. We had many outreach projects focussed on introducing STEM
      topics at elementary, middle, and high school levels to local students in underserved communities and taught recurring "Binary Bracelets"
      workshops to young girls with an interest in STEM at the annual "Expanding Your Horizons" conference in Northern Colorado.
      <br/><br/>
      The organization was also a part of department-wide efforts to send students on scholarship (or otherwise) to the annual Grace Hopper 
      Celebration and the Richard Tapia Conference. This included panels of students and staff who have attended in the past, as well as a 
      series of informational meetings leading up to the conferences, providing a space to plan out the experience and meet others who
      would be in attenance. I got to attend the Grace Hopper Celebration twice during school, once on scholarship from CSU and once funded 
      directly by a combination of donations from local businesses and travel grants from the school.
    </div>,
  },
  {
    company: "Maker Comittee",
    position: "Founding member, Officer",
    location: "Fort Collins, Colorado",
    dates: "October 2018 - December 2019",
    images: [],
    description: <div>
      The Maker Comittee, and later "Makers Club", at Colorado State University was a group of engineering students working to faciliate student access to and interest in equipment for prototyping, woodworking, and metalworking at the newly built Nancy Richardson Design Center. We worked closely with the staff of the RDC to develop plans for workshops and semester-long competitions sponsored by local businesses, which were implemented after my graduation.
      <br/><br/>
      We hosted specialized trainings for the lab equipment, taught by RDC staff during club meetings. Students learned to use 3D modeling software, vector illustration software, and safety and methods for using lab equipment such as laser cutters, 3D printers, embroidery machines, and many other CNC devices as well as woodworking and metalworking tools and machines. 
    </div>,
  }
]
