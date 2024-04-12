import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';

import headshot from '../../resources/images/bitmoji.png'
import resume from '../../resources/documents/resume.pdf'
import { FaEnvelopeOpenText, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  page: {
    minHeight: '100vh',
    padding: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    maxWidth: 1000,
    color: 'white',
    fontSize: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  imageWrapper: {
    background: 'white',
    borderRadius: '50%',
    marginBottom: 25,
    boxShadow: '5px 5px 0px 5px rgba(0,0,0,0.3)',
    [theme.breakpoints.up('md')]: {
      marginRight: 40,
    }
  },
  headshot: {
    clipPath: 'circle(49% at center)',
    maxHeight: '400px',
    maxWidth: '80vw'
  },
  bio: {
    maxWidth: '80vw',
    fontWeight: 500,
  },
  label: {
    color: 'white',
    fontSize: 14,
    transition: '.2s',
    fontWeight: 300,
    opacity: 0,
  },
  contact: {
    display: 'flex',
    flexWrap: 'wrap',
    // flexDirection: 'column',
    // paddding: 5,
    fontSize: 30,
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      marginLeft: 20,
    },
    '& a': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 20,
      '& span': {
        display: 'inline-block',
        background: 'rgba(255,255,255,1)',
        padding: '2px 8px',
        borderRadius: '50%',
        color: 'rgb(28,134,209)',
      },
      '& svg': {
        marginBottom: 5,
      },
      transition: '.5s ease-in-out',
      '&:hover': {
        textDecoration: 'none !important',
        transformOrigin: '50% 50%',
        transform: 'translate(0, -15px) scale(1.1, 1.1)',
        '& $label': {
          paddingTop: -5,
          opacity: 1,
        }
      },
    },
  }
}))

function Story() {
  const classes = useStyles()
  return (
    <div id='story' className={classes.page}>
      
      <div className={classes.text}>
        
        <div className={classes.imageWrapper}>
          {/* <div className={classes.imageBorder}/> */}
          <img className={classes.headshot} src={headshot}/>
        </div>
        <div className={classes.bio}>
          <div className={classes.contact}>
            <a target="_blank" rel="noreferrer noopener" href="mailto:amrictor%40gmail.com">
              <span><FaEnvelopeOpenText/></span>
              <div className={classes.label}>Email</div>
            </a>
            <a target="_blank" rel="noreferrer noopener" href={resume}>
              <span><FaFileDownload/></span>
              <div className={classes.label}>Resume</div>
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://linkedin.com/in/amrictor">
              <span><FaLinkedin/></span>
              <div className={classes.label}>LinkedIn</div>
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://github.com/amrictor">
              <span><FaGithub/></span>
              <div className={classes.label}>Github</div>
            </a>
          </div>
          I am a creative thinker with a background in software engineering. My degree is in Computer Science from Colorado State University and I have worked professionally in full-stack and front-end web development in recent years, but my own whims take me across multiple technical and creative disciplines. These days, I'm prioritizing professional flexibility so that I can follow those whims in all the many directions they lead, taking both contracts and commissions as they strike my interest.
        </div>
      </div>
    </div>
  )
}

export default Story;