import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid }from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Progress from "./Progress"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SinglePost(props) {
  const classes = useStyles();
  const {data,handleDeletePost}= props

const handleDelete = (e,pId)=>{
  handleDeletePost(pId)
}
  return (
      <>
      {data !== null ?  data.map((posts,index)=>(
        
          <Grid>
          <Card className={classes.root} style={{margin:"20px"}} variant="outlined">
            <Grid>
              
            </Grid>
      <CardContent>
        <Grid>
          <Typography variant="h5" component="h2">
            {posts.title}
          </Typography>
        
          <Typography variant="body2" component="p">
            {posts.body}
          </Typography>
        </Grid>
        
      </CardContent>
      <CardActions>
      
        <Button variant="contained" id={posts.id} onClick={e=>handleDelete(e,posts.id)}>Delete</Button>
      </CardActions>
    </Card>
          </Grid>
      )) : <Grid item container justify="center" alignItems="center" style={{height:"100vh",width:"100%"}}>
              <Progress/>
          </Grid>}
      
      </>
    
  );
}