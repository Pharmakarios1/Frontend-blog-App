import React, { useEffect } from 'react'
import { getCommentsData } from '../../data/comments';
import CommentsForm from './CommentsForm'

const CommentsContainer = ({className}) => {
    const [comments, setcomments] = useState([])
    
    console.log(comments)

    useEffect(() => {
        (async() => {})()
    }, []);

    const addCommentHandler = (value, parent = null, replyOnUser = null) => {
        const newComment = {
            _id: "10",
        user: {
          _id: "a",
          name: "Festus Oladipupo",
        },
        desc: "Very Interesting posts. Thanks!",
        post: "1",
        parent: null,
        replyOnUser: null,
        createdAt: "2023-12-31T17:22:05.092+0000",
      };
    };
  return (
    <div className={`${className}`}>
      <CommentsForm btnLabel="Deliver" formSubmitHandler={(value) => addCommentHandler(value)} />
    </div>
  )
}

export default CommentsContainer
