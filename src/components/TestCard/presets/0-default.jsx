import TestCard from '../TestCard';
import CardActionArea from '../../CardActionArea/CardActionArea';
import CardContent from '../../CardContent/CardContent';
import CardHeader from '../../CardHeader/CardHeader';
import CardMedia from '../../CardMedia/CardMedia';
import CardActions from "../../CardActions/CardActions";
import IconButton from '../../IconButton/IconButton';
import Typography from '../../Typography/Typography';

export default (
  <TestCard uxpId="test-card">
    <CardContent
      uxpId='Card-Content-1'
      component="div"
    >
      <CardMedia
        uxpId='Card-Media-1'
        alt="Cool art"
        height={240}
      />
      <Typography
        uxpId='Typography-1'
        variant="h4"
        component="div"
        gutterBottom={true}
        marginTop="16px"
      >
       Thank you
      </Typography>
      <Typography
        uxpId='Typography-2'
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
      uxpId='Card-Header-1'
      action="none"
      avatar="R"
      subheader="December 6, 2021"
      color="grey"
      title="Dorothy Whitehead"
      ariaLabel="add"
    />
    <CardActionArea uxpId='Card-Action-Area-1' />
    <CardActions uxpId='Card-Action-1'>
      <IconButton
        uxpId="Icon-Button-1"
        ariaLabel="add accessibility text"
      >
        thumb_up
      </IconButton>
      <IconButton
        uxpId="Icon-Button-2"
        ariaLabel="add accessibility text"
      >
        bookmark
      </IconButton>
    </CardActions>
  </TestCard>
)
