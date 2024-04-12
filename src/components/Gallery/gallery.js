import { withStyles, Dialog, DialogTitle, IconButton, DialogContent } from "@material-ui/core";
import { UncontrolledCarousel } from 'reactstrap'
import { Close, GitHub, Link, Description } from "@material-ui/icons";
import React from "react";

const styles = theme => ({
  gallery: {
    maxWidth: 1000,
    textAlign: 'center'
  },
  container: {
    margin: '0 auto'
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
    paddingBottom: 8,
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
  galleryGrid: {
    display: 'inline-grid',
    width: '100%',
    gridTemplateColumns: props => `repeat(auto-fit, minmax(${props.small ? 150 : 225}px, 1fr))`,
    gridAutoRows: props => `minmax(${props.small ? 150 : 225}px, max-content)`,
    gap: 10,
    padding: 10,
  },
  galleryItem: {
    borderRadius: 15,
    border: '2px solid white',
    overflow: 'hidden',
    position: 'relative',
    margin: '4px',
    '& img' : {
      cursor: 'pointer',
      display: 'block',
      oObjectFit: 'cover',
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    }
  },
  galleryItemText: {
    display: 'none'
  },
  dialog: {
    maxWidth: 1000,
    maxHeight: '75%',
    overflow: 'hidden',
    margin: 50,
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    letterSpacing: 0,
    '& a': {
      color: 'black !important',
    },
    '& div': {
      margin: '0 20px'
    }
  },
  dialogTitle: {
    margin: 0,
    padding: '20px 40px',
    maxWidth:'100%',
    fontSize: props => props.imageOnly ? 20 : 40,
    textTransform: 'lowercase',
    letterSpacing: props => props.imageOnly ? 0 : 3,
    textAlign: 'center',
  },
  overlay: {
    padding: 15,
    zIndex: '1 !important',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    cursor: 'pointer',
    background: 'rgba(0,0,0,0)',
    color: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.2s',
    fontSize: 22,
    '&:hover': {
      background: 'rgba(0,0,0,.6)',
      color: props => props.imageOnly ? 'transparent' : 'white',
    }
  },
  modalText: { 
    flexShrink: 1,
    minHeight: '45%',
    maxHeight: '100%',
    overflow: 'auto',
    [theme.breakpoints.up('md')] : {
      marginLeft: 16,
    },
    [theme.breakpoints.down('sm')] : {
      marginTop: 16,
      flexShrink: 0,
      maxHeight: 'unset',
    },
    minWidth: '40%',
  },
  body: {
    '& .carousel': {
      [theme.breakpoints.up('sm')] : {
        width: props => !props.imageOnly ? '400px' : '',
      },
      display: 'flex',
      alignItems: 'center',
      margin: '0 30px',
    },
    '& .carousel-inner': {
      [theme.breakpoints.up('sm')] : {
        width: props => !props.imageOnly ? '400px' : '',
      },     
      height: '100%',
      width: '100%', 
    },
    '& .carousel-item': {
      height: '100%',
      width: '100%',
      verticalAlign: 'middle',
      '& img': {
        margin: 'auto',
        [theme.breakpoints.up('sm')] : {
          width: props => !props.imageOnly ? '100%' : 'unset !important',
        },  
        maxHeight: '100%',
        maxWidth: '100%',
      }
    },
    '& .d-none': {
      display: 'none'
    },
    '& .carousel-control-prev': {
      width: 30,
      transform: 'translateX(-30px)',
      justifyContent: 'flex-start',
    },
    '& .carousel-control-next': {
      width: 30,
      transform: 'translateX(30px)',
      justifyContent: 'flex-end',
    },
    '& .carousel-control-prev-icon': {
      cursor: 'pointer',
      opacity:'1',
      filter: 'invert(45%)',
    },
    '& .carousel-control-next-icon': {
      cursor: 'pointer',
      opacity:'1',
      filter: 'invert(45%)',
    },
    display: 'flex',
    justifyContent: 'center',
    maxHeight: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'scroll',
      justifyContent: 'unset',
    }
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'grey'
  },
})



class Gallery extends React.Component {
  
  state = {
    item: null
  }

  toggleModal(item) {
    this.setState({ item })
  }

  renderModal() {
    const { item } = this.state;
    const { classes } = this.props;
    const images = item ? item.images.map((image, index) => 
      ({
        src: image.src,
        id: index,
        caption: '',
        altText: '',
        header: '',
        key: index,
      })
    ) : [];

    return (
      <Dialog
        open={!!item}
        PaperProps={{className: classes.dialog}} 
        scroll='paper'
        onClose={() => this.toggleModal(null)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {item && <DialogTitle className={classes.dialogTitle} disableTypography>
          {item.title}
          <div className={classes.links}>
              {item.link && <div><Link/> <a href={item.link} rel="noreferrer" target="_blank">Live page</a></div>}
              {item.github && <div><GitHub/> <a href={item.github} rel="noreferrer" target="_blank">Github</a></div>}
              {item.report && <div><Description/> <a href={item.report} rel="noreferrer" target="_blank">Report</a></div>}
          </div>
          <IconButton aria-label="close" size="small" className={classes.closeButton} onClick={()=>this.toggleModal(null)}>
            <Close />
          </IconButton>
        </DialogTitle>}
        {item ? <DialogContent className={classes.body} dividers>
          <UncontrolledCarousel 
            className={classes.modalImage} 
            items={images} 
            interval={false} 
            indicators={false} 
            controls={images.length>1}
          />
          {item.description && <div className={classes.modalText}>
            {item.description}
          </div>}
          {/* <a href="#" className={classes.closeButton}>&times;</a> */}
        </DialogContent> : <div>No data</div>}
      </Dialog>
    )
  }

  render() {
    const { classes, data } = this.props;
    const tags = data.reduce((prev, prop) => {
      // console.log(prev, prop)
      return [...prev, ...(prop.tags || []).filter(tag => {
        // console.log(prev, tag, prev.includes(tag))
        return !prev.includes(tag)
      })]
    }, []);

    
    // console.log(tags)
    
    return (
      <section className={classes.gallery}>
        {this.renderModal()}
        <div className={classes.container}>
          <div className={classes.galleryGrid}>
            {data.map((item, index)=>
              <div className={classes.galleryItem} key={index} onClick={() => this.toggleModal(item)}>
                <img src={item.images[0].src} alt={item.images[0].src}/>
                <div className={classes.overlay}>{item.title}</div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Gallery);
