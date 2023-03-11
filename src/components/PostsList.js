import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PostsList = (props) => {
    const { body, id, title } = props.post;

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/users/${id}`)
    };

    const postsStyle = {
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'white',
    }
    return (
        <div style={postsStyle}>
            <p><small>Post No. {id}</small></p>
            <h1>Title: {title}</h1>
            <p>Description: {body}</p>
            <Button onClick={ () => handleClick(id)} variant="contained">Check Details</Button>
        </div>
    );
};

export default PostsList;