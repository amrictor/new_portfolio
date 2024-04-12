import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

import { education, professional, volunteer } from './data';
import { CalendarToday, Link, PinDrop } from '@material-ui/icons';
import Gallery from '../../components/Gallery';

const styles = theme => ({
  page: {
    padding: '50px',
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
    alignItems: 'flex-start',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    flexShrink: 1,
    maxWidth: 1000,
    color: 'white',
    fontSize: 18,
    
  },
  title: {
    fontSize: 36,
    fontWeight: 600,
  },
  position: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: 600,
    // fontStyle: 'italic',
    textAlign: 'center'
  },
  links: {
    alignItems: 'center',
    textAlign: 'right',
    fontStyle: 'italic',
    '& div': {
      margin: 10,
      '&:first-child': {
        marginLeft: 0
      }
    },
    '& a': {
      color: 'black',
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
  jobInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 39,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    borderRadius: 15,
    border: '2px solid white',
    background: 'white',
    color: 'black',
    padding: 25,
    [theme.breakpoints.down('xs')] :{
      marginTop: 20,
    },
    [theme.breakpoints.up('sm')]: {
      // height: '65vh',
      overflow: 'auto'
    },
    '& a': {
      // color: 'white',
      textDecoration: 'underline'
    },
    '& span': {
      color: 'rgba(28, 134, 209, 1)',
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '50%',
      padding: 4,
        marginLeft: 3,
      '& svg': {
        padding: 2,
        marginBottom: 3,
      }
    },
  },
  gallery: {
    width: '100%',
  },
  singletonGallery: {
    maxHeight: 170,
    maxWidth: 170,
    [theme.breakpoints.down('sm')] : {
      width: '100%' 
    }
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '10px 0'
  },
  techBadge: {
    backgroundColor: 'rgba(28, 134, 209, 1)',
    color: 'white',
    fontWeight: 600,
    borderRadius: 10,
    padding: '3px 10px',
    margin: 3,
    whiteSpace: 'nowrap'
  },
  description: {
    '& ul': {
      paddingLeft: 25,
    },
    overflow: 'auto',
    maxHeight: 250,
    paddingRight: 10,
    '&::-webkit-scrollbar': {
      width: 12,
      padding: 2,
      margin: 10
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(28, 134, 209, 0.3)',
      border: '1px solid transparent',
      backgroundClip: 'padding-box',
      borderRadius: 15,
      // boxShadow: '5px 5px rgba(0,0,0,0.3)',
    },
  },
  jobHeader: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'right'
    },
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
    console.log(window)
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
            {/* <div className={classes.directoryHeader}>Education</div>
            {education.map(job => <div key={`${job.company}_link`} className={`${classes.directoryItem} ${this.state.job.company === job.company ? classes.selectedItem : ''}`} onClick={()=>this.setJob(job)}>
              {job.company}
            </div>)} */}
          </div>
          <div className={classes.jobInfoWrapper}>
            <div id='job_info' className={classes.text}>
              <div className={classes.jobHeader}>
                <div className={classes.links}>
                  {/* {this.state.job.link && <div><a rel="noreferrer" target="_blank" href={`http://${this.state.job.link}`}>{this.state.job.link}</a><span><Link/></span></div>} */}
                  <div>{this.state.job.location} <span><PinDrop/></span></div>
                  <div>{this.state.job.dates} <span><CalendarToday/></span></div>
                </div>
                { this.state.job.logo && window.innerWidth > 350
                  ? <img src={this.state.job.logo} alt={this.state.job.company} width='40%' /> 
                  : <div className={classes.title}>{this.state.job.company}</div>
                }
              </div>
              
              {/* <div className={classes.divider}/> */}
              {this.state.job.position && <div className={classes.position}>{this.state.job.position}</div>}
              {/* <div className={classes.links}>
                {this.state.job.link && <div><Link/> <a rel="noreferrer" target="_blank" href={`http://${this.state.job.link}`}>{this.state.job.link}</a></div>}
                <div><PinDrop/> {this.state.job.location}</div>
                <div><CalendarToday/> {this.state.job.dates}</div>
              </div> */}
              {this.state.job.images && this.state.job.images.length > 0 && <div className={`${classes.gallery} ${this.state.job.images.length === 1 ? classes.singletonGallery : ''}`}> <Gallery small imageOnly title='' data={this.state.job.images}/></div>}  
              
              <div className={classes.technologies}>
                {this.state.job.technologies?.map(tech =>
                  <div className={classes.techBadge}>{tech}</div>
                )}
              </div>
              <div className={classes.description}>
                {this.state.job.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default withStyles(styles)(Work);