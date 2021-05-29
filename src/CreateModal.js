import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { Grid,TextField,Button } from '@material-ui/core';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  inputField:{
      width:"25rem"
  },
  descrription:{
    width:"25rem",
    marginTop:"1em"

  }
}));

export default function CreateModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [inputDataTitle, setinputDataTitle] = React.useState("");
  const [inputDataDesc, setinputDataDesc] = React.useState("");

 
  const handleDesc=(e)=>{
  
    setinputDataDesc(e.target.value)

  }

  const handleTitle = (e)=>{
    setinputDataTitle(e.target.value)
  }

  const handleData = ()=>{
    props.handleCreatePost({title: inputDataTitle,
      body: inputDataDesc,
      userId: 1})
      props.handleCreate()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid item container justify="space-between" alignItems="center">
      <h2 id="simple-modal-title">Create New Post</h2>
    <CloseIcon  onClick={props.handleCreate}/>

      </Grid>
      <Grid item sm={4} >
        
      <TextField
          id="standard-password-input"
          label="Title"
          type="TextField"
         
          variant="outlined"
          onChange={handleTitle}
          className={classes.inputField}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          onChange={handleDesc}

          variant="outlined"
          className={classes.descrription}

        />
      </Grid>
      <Grid item container justify="space-around" alignItems="center" style={{marginTop:"2em"}}>
      <Button variant="contained" color="inherit" onClick={props.handleCreate}>
        CANCEL
      </Button>
      <Button variant="contained" color="primary" onClick={handleData}>
        CREATE
      </Button>
      </Grid>
      <CreateModal />
    </div>
  );

  return (
    <div>
      
      <Modal
        open={props.modalVisibleNow}
        onClose={props.handleCreate}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}