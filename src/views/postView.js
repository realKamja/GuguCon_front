import { useState } from 'react';
import { useParams } from 'react-router-dom';

function PostView({title, pathUrl, contents}) {
    const [comments, setComments] = useState([]);   //댓글 리스트
    const [content, setContent] = useState('');     //댓글 내용
    const postId = useParams().postId;

    const handleCommentSubmit = () => {
        axios
            .post(
                `/api/comment`,
                {
                    postId: postId,
                    contents: content,
                },
            )
            .then(response => {
                const newComment = response.data;
                setComments([...comments, newComment]);
                setContent('');
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
    };

    useEffect(() => {
        axios
            .get(`/api/post/${postId}`)
            .then(response => {
                setComments(response.data.comments);
            })
            .catch(error => {
                console.error('Error fetching postId:', error);
            });
    }, []);

    return(
        <div className="post">
            <div className='titleContainer'>
                <img id='titleDeco' src='/images/titleDeco.png' alt='titleDeco'></img>
                <div>{title}</div>
            </div>
            <div className='contextContainer'>
                <img 
                    src='/images/pathUrl.png' 
                    alt='button to get direction'
                    onClick={() => {
                        window.open(pathUrl);
                    }}
                />
                <div>{contents}</div>
            </div>
            <div className='commentContainer'>
                <div className="commentInput">
                    <textarea
                        placeholder="Add a comment"
                        value={contents}
                        onChange={e => setContent(e.target.value)}
                    />
                    <button onClick={handleCommentSubmit}>Add Comment</button>
                </div>
                <div className="comment-list">
                    {comments.map((comment, id) => (
                        <div key={id}>
                            <p>
                                {comment.contents}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostView;