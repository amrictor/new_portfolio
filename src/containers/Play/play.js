import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Gallery from '../../components/Gallery';
import data from './data';


const useStyles = makeStyles({
  page: {
    minHeight: '100vh',
    padding: '75px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  galleryHeader: {
    fontSize: 40,
    margin: '0px 30px',
    color: 'white',
    textTransform: 'lowercase',
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: 3,
    whiteSpace: 'nowrap',
    marginTop: 0,
    position: 'relative',
    paddingBottom: 15,
    '&::after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      height: 1,
      width: 100
    }
  },
  text: {
    maxWidth: 1000,
    color: 'white',
    fontSize: 18
  }
})

function Play() {
  const classes = useStyles()
  return (
    <div id='play' className={classes.page}>
      <div className={classes.galleryHeader}>Projects</div>
      <Gallery title="Projects" data={data}/>
    </div>
  )
}

export default Play;