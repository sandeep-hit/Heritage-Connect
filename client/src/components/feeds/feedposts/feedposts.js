import Feedpost from '../feedpost/feedpost';
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import useStyles from './styles';
const Feedposts=()=>{
    const posts = useSelector((state) => state.feedposts);
    const classes=useStyles();

    return (
      !posts.length?<CircularProgress/> : (
          <Grid className={classes.container} container alignItems="Stretch" spacing={3}>
            {posts.map((post)=>(
              <Grid key={post._id} item xs={12} sm={12}>
                <Feedpost post={post}/>
              </Grid>
            ))

            }
          </Grid>
        )  

    );
}
export default Feedposts; 