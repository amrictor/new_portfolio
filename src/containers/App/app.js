import React, { useEffect } from 'react'
import Waves from '../../components/Waves';
import withStyles from '@material-ui/core/styles/withStyles';
import Story from '../Story';
import Skills from '../Skills';
import Work from '../Work';
import Play from '../Play';
import { Button } from '@material-ui/core';
import { AiOutlineToTop } from 'react-icons/ai'

const styles ={
  title: {
    fontSize: 40,
    margin: '0px 30px',
    // textAlign: 'center',
    textTransform: 'lowercase',
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: 5,
    transition: '.8s',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: 400,
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200, 
    paddingTop: 40,
    margin: '0px auto  100vh',
    transition: '.8s',
    position: 'sticky',
    top: 0,
    zIndex: 2,
  },
  links: {
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  link: {
    margin: '0px 30px',
    textTransform: "uppercase",
    borderBottom: '2px solid transparent',
    transition: '.2s',
    '&:hover': {
      borderColor: 'rgba(28, 134, 209, 1)',
      cursor: 'pointer',
    }
  },

  scrolledLink: {
    borderColor: 'white',
  },
  scrollToTop: {
    color: 'white',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    position: 'fixed',
    // background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 25,
    width: 45,
    height: 45,
    bottom: 15,
    right: 15,
    transition: '.2s',
    '&:hover' : {
      background: 'rgba(0, 0, 0, 0.1)',
      cursor: 'pointer'
    }
  }
}

function getScrollPosition({ element, useWindow }) {
  const isBrowser = typeof window !== `undefined`
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

function isScrolledIntoView(id) {
  let el = document.getElementById(id)
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  let isVisible = elemTop < window.innerHeight && elemBottom >= .2*window.innerHeight;
  return isVisible;
}

class App extends React.Component {
  state = {
    page:'top'
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll)
  }

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  handleScroll = () => {
    let page = [ 'story', 'skills', 'work', 'play','top'].filter(isScrolledIntoView)[0];
    if(page && this.state.page !== page) this.setState({ page : page })
    let { y } = getScrollPosition({});
    let scrollUp = document.getElementById('scrollToTop')
    let nav = document.getElementById('navigation')
    let links = document.getElementById('links')
    let title = document.getElementById('title')
    if (y < -0.6*window.innerHeight) {
      links.style.background = 'rgba(28, 134, 209, .7)';
      nav.style.color = 'white';
      title.style.maxWidth = '0px';
      title.style.maxHeight = '0px'
      title.style.margin = '0px';
      scrollUp.style.display='flex';
    }
    else {
      links.style.background = 'transparent';
      nav.style.color = 'black';
      title.style.maxHeight = '60px'
      title.style.maxWidth = '350px'
      title.style.margin = '30px';
      scrollUp.style.display='none';
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  scrollTo(id) {
    const elem = document.getElementById(id);
    elem.scrollIntoView(({
      behavior: 'smooth',
      block: 'start'
    }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div id='top'>
        <Waves/> 
        <div id='navigation' className={classes.navigation}>
          {document.body.offsetWidth < 825 && <div className={classes.title} id='title'>Abigail Rictor</div>}
          <div className={classes.links} id='links'>
            <div className={`${classes.link} ${this.state.page === 'story' ? classes.scrolledLink : ''}`} onClick={()=>this.scrollTo('story')}>Story</div>
            <div className={`${classes.link} ${this.state.page === 'skills' ? classes.scrolledLink : ''}`} onClick={()=>this.scrollTo('skills')}>Skills</div>
            {document.body.offsetWidth >= 825 && <div className={classes.title} id='title'>Abigail Rictor</div>}
            <div className={`${classes.link} ${this.state.page === 'work' ? classes.scrolledLink : ''}`} onClick={()=>this.scrollTo('work')}>Work</div>
            <div className={`${classes.link} ${this.state.page === 'play' ? classes.scrolledLink : ''}`} onClick={()=>this.scrollTo('play')}>Play</div>
          </div>
        </div>
        <Story/>
        <Skills/>
        <Work/>
        <Play/>
        <div className={classes.scrollToTop} id='scrollToTop' onClick={()=>this.scrollTo('top')}><AiOutlineToTop/></div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
