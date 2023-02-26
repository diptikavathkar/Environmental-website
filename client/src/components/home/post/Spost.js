import {Box , styled,Typography} from '@mui/material';
import { addElipsis } from '../../../utils/common-utils';

const Container = styled(Box)
`
    border: 1px solid #d3cede;
    
    margin: 10px;
    height: 350px;
     & > p {
        padding: 0 9px 9px 9px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`
const Heading = styled(Typography)`
    font-wright: 600;
    font-size: 18px;
`
const Details = styled(Typography)`
    word-break: break-word;
    font-size: 14px;
`

const Image= styled('img')({
    width: '100%',
    //borderRadius: '10px 10px 0 0',  // topleft topright bottomleft bottomright
    objectFit: 'cover',
    height: 150
}) 


const Post = ({ post}) =>{
    return(
        <Container>
            <Image src={"https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"} alt-="blog"/>
            <Text>{post.categories}</Text>
            <Heading>{addElipsis( post.title,20)}</Heading>
            <Text>{post.username}</Text>
            <Details>{addElipsis( post.description,100)}</Details>
        </Container>
    )
}

export default Post;