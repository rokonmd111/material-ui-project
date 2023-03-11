import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const { userId } = useParams();

    const [comments, SetComments] = useState([]);
    const [photos, SetPhotos] = useState([]);

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
        .then(res => res.json())
        .then(data => SetComments(data));
    }, [])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => SetPhotos(data.results));
    }, [])

    const pictures = () => {
        for (let i = 0; i < photos.length; i++) {
            let photo = photos[i];
            const pic = photo.picture.large
            return pic;
        }
    }
    const commentsStyle = {
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'white',
    }

    const picStyle = {
        borderRadius: '60px',
        width: '30px',
        height: '30px',
    }
    const picPossession = {
        display: 'flex',
        float: 'left',
    }
    const divStyle = {
        marginLeft: '40px',
    }
    return (
        <div>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id} style={commentsStyle}>
                            <h4>{comment.name}</h4>
                            <p>Email: {comment.email}</p>
                            <div style={picPossession}>
                                <img style={picStyle} src={pictures()} alt="" />
                            </div>
                            <div style={divStyle}>
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Comments;