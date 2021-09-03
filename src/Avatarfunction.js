import Avatar from '@material-ui/core/Avatar';
import { AvatarGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import './sample.css'
import img1 from './images/image1.png';
import img2 from './images/image2.png';
import img3 from './images/image3.png';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },},
    }));
export default function Avatarfunction() {
    const classes= useStyles();
    return (
        <div id="line">
        <AvatarGroup max={3}>
            <Avatar src={img1} className={classes.small} />
            <Avatar src={img2} className={classes.small}  />
            <Avatar  src={img3} className={classes.small}  />
       </AvatarGroup>
       <h5> 1k+ members have joined.</h5>
            
        </div>
    )
}
