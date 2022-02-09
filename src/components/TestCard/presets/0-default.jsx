import TestCard from '../TestCard';
import CardActionArea from '../../CardActionArea/CardActionArea';
import CardContent from '../../CardContent/CardContent';
import CardHeader from '../../CardHeader/CardHeader';
import CardMedia from '../../CardMedia/CardMedia';
import CardActions from "../../CardActions/CardActions";
import IconButton from '../../IconButton/IconButton';
import Typography from '../../Typography/Typography';

export default (
  <TestCard>
    <CardContent
      component="div"
    >
      <CardMedia
        alt="Cool art"
        height={240}
      />
      <Typography
        variant="h4"
        component="div"
        gutterBottom={true}
        marginTop="16px"
      >
       Thank you
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        marginTop="16px"
        marginBottom="16px"
        paddingTop="0"
      >
       I just wanted to say a big thank you to the team for all your help this past few weeks with our project deadlines and all the support offered by everyone xx
      </Typography>
    </CardContent>
    <CardHeader
      action="none"
      avatar="R"
      subheader="December 6, 2021"
      color="grey"
      title="Dorothy Whitehead"
      ariaLabel="add"
    />
    <CardActionArea />
    <CardActions>
      <IconButton
        ariaLabel="add accessibility text"
      >
        thumb_up
      </IconButton>
      <IconButton
        ariaLabel="add accessibility text"
      >
        bookmark
      </IconButton>
    </CardActions>
  </TestCard>
)
