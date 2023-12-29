import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/post.scss';

function PostView(){
    const postId = useParams().postId;
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();
    const [pathUrl, setPathUrl] = useState();
    const [comments, setComments] = useState([]);
    const [comContents, setComContents] = useState("");

    const handleCommentSubmit = () => {
        axios
            .post(
                `/api/comment`,
                {
                    postId: postId,
                    contents: comContents,
                },
            )
            .then(response => {
                const newComment = response.data.comment;
                setComments([...comments, newComment]);
                setComContents('');
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
    };

    useEffect(() =>{
        // 테스트 용 더미데이터
        setTitle('게시물 제목');
        setContents('이 글은 게시물 내용입니다. 이 글은 게시물 내용입니다. 이 글은 게시물 내용입니다. 이 글은 게시물 내용입니다. 이 글은 게시물 내용입니다.');
        setPathUrl('https://map.naver.com/p/directions/14220148.1714897,4560544.222776,%ED%8C%8C%EB%9E%80%EB%A7%8C%EC%9E%94%20%EC%B6%98%EC%B2%9C%EA%B0%95%EC%9B%90%EB%8C%80%EC%A0%90,1207998072,PLACE_POI/14220191.0908467,4559574.3410243,%EB%A9%94%EB%B0%80%EB%B0%AD%EB%B3%B8%EC%A0%90,20978534,PLACE_POI/-/transit?c=14.00,0,0,0,dh');
        setComments([
            {contents: '이 글은 댓글입니다1'},
            {contents: '이 글은 댓글입니다2'},
            {contents: '이 글은 댓글입니다3'}
        ]);

        // get 게시물
        // axios.get(`/api/post/${postId}`)
        //     .then(res => {
        //         setTitle(res.data.title);
        //         setContents(res.data.contents);
        //         setPathUrl(res.data.pathUrl);
        //         setComments(res.data.comments);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }, []);
        

        // post 댓글
    return(
        <div className="post">
            <div className="titleContainer">
                <img src="/images/titleDeco.png"/>
                <div className="title">{title}</div>
            </div>
            <div className="contentContainer">
                <a href={pathUrl} target="_blank">&gt;플로깅 경로 보러가기&lt;</a>
                <div className="contents">{contents}</div>
            </div>
            <div className="commentComp">
                <div className="commentInput">
                    <textarea
                        placeholder="Add a comment"
                        value={comContents}
                        onChange={e => setComContents(e.target.value)}
                    />
                    <button onClick={handleCommentSubmit}>Add Comment</button>
                </div>
                <div className="comment-list">
                    {comments.map((comment, id) => (
                        <div className="commentItem" key={id}>
                            <img src="/images/commentTag.png" />
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