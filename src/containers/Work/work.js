import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

import { professional, volunteer } from './data';
import { CalendarToday, Link, PinDrop } from '@material-ui/icons';
import Gallery from '../../components/Gallery';

const styles = theme => ({
  page: {
    padding: '75px',
    minHeight: '100vh',
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
  inner: {
    padding: 10,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    flexShrink: 1,
    maxWidth: 1000,
    color: 'white',
    fontSize: 18,
    
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
    textAlign: 'center'
  },
  position: {
    fontSize: 30,
    fontWeight: 500,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  links: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    '& div': {
      margin: 10,
      '&:first-child': {
        marginLeft: 0
      }
    },
    '& a': {
      color: 'white',
      textDecoration: 'none !important',
      '&:hover' : {
        textDecoration: 'underline !important'
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      '& div': {
        margin: '10px 0px',
      },
    },
  },
  directory: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minWidth: 260,
    [theme.breakpoints.up('sm')]: {
      marginRight:20,
      height: '65vh',
      overflow: 'auto'
    },
  },
  directoryHeader: {
    textTransform: 'lowercase',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 500,
    margin: 5,
  },
  directoryItem: {
    border: '2px solid white',
    textAlign: 'right',
    background: 'white',
    color: 'rgba(28, 134, 209, 1)',
    '&:hover': {
      color: 'white',
      background: 'rgba(28, 134, 209, 1)',
      cursor: 'pointer',
    },
    padding: 5,
    margin: 2,
    fontWeight: 600
  },
  selectedItem: {
    color: 'white',
    background: 'rgba(28, 134, 209, 1)',
  },
  text: {
    '&::-webkit-scrollbar': {
      width: 25,
      padding: 2,
      margin: 10
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'white',
      border: '8px solid transparent',
      backgroundClip: 'padding-box',
      borderRadius: 15,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 15,
    border: '2px solid white',
    padding: 25,
    [theme.breakpoints.down('xs')] :{
      marginTop: 20
    },
    [theme.breakpoints.up('sm')]: {
      height: '65vh',
      overflow: 'auto'
    },
    '& a': {
      color: 'white',
      textDecoration: 'underline'
    },
  },
  gallery: {
    width: '100%',
  },
  singletonGallery: {
    width: '50%',
    [theme.breakpoints.down('sm')] : {
      width: '100%' 
    }
  }
})

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: professional[0]
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.job.company !== this.state.job.company) {
      document.getElementById('job_info').scrollTop = 0;
    }
  }

  setJob = (job) => {
    this.setState({job})
  }

  render() {
    const { classes } = this.props;
    return (
      <div id='work' className={classes.page}>
        <div className={classes.galleryHeader}>Experience</div>
        <div className={classes.inner}>
          <div className={classes.directory}>
            <div className={classes.directoryHeader}>Professional</div>
            {professional.map(job => <div key={`${job.company}_link`} className={`${classes.directoryItem} ${this.state.job.company === job.company ? classes.selectedItem : ''}`} onClick={()=>this.setJob(job)}>
              {job.company}
            </div>)}
            <div className={classes.directoryHeader}>Volunteer</div>
            {volunteer.map(job => <div key={`${job.company}_link`} className={`${classes.directoryItem} ${this.state.job.company === job.company ? classes.selectedItem : ''}`} onClick={()=>this.setJob(job)}>
              {job.company}
            </div>)}
          </div>
          <div id='job_info' className={classes.text}>
            { this.state.job.logo 
              ? <img src={this.state.job.logo} alt="iSalesCRM" width='50%' className={classes.logo}/> 
              : <div className={classes.title}>{this.state.job.company}</div>
            }
            <div className={classes.position}>{this.state.job.position}</div>
            <div className={classes.links}>
              {this.state.job.link && <div><Link/> <a rel="noreferrer" target="_blank" href={`http://${this.state.job.link}`} rel="noreferrer" target="_blank">{this.state.job.link}</a></div>}
              <div><PinDrop/> {this.state.job.location}</div>
              <div><CalendarToday/> {this.state.job.dates}</div>
            </div>
            {this.state.job.images && this.state.job.images.length > 0 && <div className={`${classes.gallery} ${this.state.job.images.length === 1 ? classes.singletonGallery : ''}`}> <Gallery small imageOnly title='' data={this.state.job.images}/></div>}  
            <div>
              {this.state.job.description}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default withStyles(styles)(Work);