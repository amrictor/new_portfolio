import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';

import headshot from '../../resources/images/headshot.png'

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
  headshot: {
    clipPath: 'circle(45% at center)',
    maxHeight: '500px',
    maxWidth: '80vw',
    [theme.breakpoints.up('md')]: {
      marginRight: 40,
    }
  },
  bio: {
    maxWidth: '80vw',
  }
}))

function Story() {
  const classes = useStyles()
  return (
    <div id='story' className={classes.page}>
      
      <div className={classes.text}>
        <img className={classes.headshot} src={headshot}/>
        <div className={classes.bio}>
          I am a full-stack developer with a Computer Science degree from Colorado State University. My recent professional work is primarily focused within the realm of design and the front end, but my personal and volunteer projects still delve into complex server and architecture questions, database work, and even some physical prototyping. Some of my recurring development interests include social gaming, natural language processing, web design, and pretty much any other way you can think of to combine art and code. I am also in constant pursuit of ways I can simplify my own life (or those of my pets and plants) through automation, so I’m fairly comfortable with a Raspberry Pi and a 3D printer, and right at home in a Makerspace. My ideal career encourages imaginative design solutions, both technical and artistic. Above anything else, I value creativity, diversity, and a respectful collaborative work environment.
        </div>
      </div>
    </div>
  )
}

export default Story;