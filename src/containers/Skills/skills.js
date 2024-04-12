import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';

import { FaPython as Python, FaJava as Java, FaJsSquare as JS, FaHtml5 as HTML, FaReact, FaSass as Sass, FaNodeJs, FaRaspberryPi, FaPhp } from 'react-icons/fa'
import { FaGitSquare as Git, FaMicrosoft as Windows, FaLinux as Linux, FaCss3Alt as CSS} from 'react-icons/fa'
import { GoTerminal as Bash } from 'react-icons/go';
import { 
  SiRedux as Redux, 
  SiGraphql as GraphQL, 
  SiTypescript as TypeScript, 
  SiMysql as MySQL, 
  SiMongodb as Mongodb, 
  SiTwilio as Twilio, 
  SiPostgresql as PostgresQL, 
  SiJest as Jest, 
  SiPostman as Postman, 
  SiTensorflow
} from 'react-icons/si';

import { Cpp,Unity, Csharp } from '../../resources/code_icons'
import { AiOutlineConsoleSql } from 'react-icons/ai';

const useStyles = makeStyles({
  page: {
    minHeight: '100vh',
    padding: '75px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    margin: '0px 30px 10px',
    textAlign: 'center',
    textTransform: 'lowercase',
    color: 'white',
    letterSpacing: 3
  },
  text: {
    maxWidth: 1000,
    color: 'white',
    fontSize: 18
  },
  badges: {
    maxWidth: 1000,
    fontSize: 35,
    color: 'white',
    margin: '10px auto 0px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  badge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    margin: 'auto',
    transition: '.5s ease-in-out',
    minWidth: 80,
    '&:hover' : {
      transformOrigin: '50% 50%',
      transform: 'translate(0, -10px) scale(1.1, 1.1)',
      '& $label': {
        paddingTop: -2,
        opacity: 1,
      }
    },
  },
  label: {
    fontSize: 14,
    transition: '.2s',
    fontWeight: 300,
    paddingTop: 10,
    opacity: 0,
  }
})

function Skills() {
  const classes = useStyles()
  const softwareBadge = (name, icon) => {
    return (
      <div className={classes.badge}>
          {icon}
          <div className={classes.label}>{name}</div>
      </div>
    );
  }
  return (
    <div id='skills' className={classes.page}>
      <div className={classes.title}>
        Expert
      </div>
      <div className={classes.badges}>
        {softwareBadge("React", <FaReact id="React"/>, "top")}
        {softwareBadge("Javascript", <JS id="Javascript"/>, "top")}
        {softwareBadge("Jest", <Jest id="Jest"/>, "top")}
        {softwareBadge("HTML", <HTML id="HTML5"/>, "top")}
        {softwareBadge("CSS", <CSS id="CSS"/>, "top")}
        {softwareBadge("Sass", <Sass id="Sass"/>, "top")}
      </div>
      <div className={classes.badges}>
        {softwareBadge("TypeScript", <TypeScript id="TypeScript"/>, "top")}
        {softwareBadge("Redux", <Redux id="Redux"/>, "top")}
        {softwareBadge("Node.js", <FaNodeJs id="Node"/>, "top")}
        {softwareBadge("Python", <Python id="Python"/>, "top")}
      </div>

      <div className={classes.title}>
        Proficient
      </div>
      <div className={classes.badges}>
        {softwareBadge("C#", <Csharp id="Csharp"/>, "top")}
        {softwareBadge("Java", <Java id="Java"/>, "top")}
        {softwareBadge("C++", <Cpp id="Cpp"/>, "top")}
        {softwareBadge("PHP", <FaPhp id="Cpp"/>, "top")}
        {softwareBadge("Twilio", <Twilio id="Twilio"/>, "top")}
        {softwareBadge("Tensorflow", <SiTensorflow id="Tensorflow"/>, "top")}
      </div>
      <div className={classes.badges}>
        {softwareBadge("Raspberry Pi", <FaRaspberryPi id="Raspberry Pi"/>, "top")}
        {softwareBadge("Bash", <Bash id="ShellScript"/>, "top")}
        {softwareBadge("SQL", <AiOutlineConsoleSql id="SQL"/>, "top")}
        {softwareBadge("MongoDB", <Mongodb id="Mongodb"/>, "top")}
        {softwareBadge("GraphQL", <GraphQL id="GraphQL"/>, "top")}
      </div>
    </div>
  )
}

export default Skills;