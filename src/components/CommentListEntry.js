import './CommentListEntry.css';
import {useState} from 'react';
import InputYourPassword from './InputYourPassword';
export default function CommentListEntry (props) {
  const [isCheckPw, setCheckPw] = useState(false);
  const [isModify, setModify] = useState(false);

  const translateForm = (isMod) => {
    if(isMod)setModify(true);
    setCheckPw(true);
  }

  return(
    isCheckPw? 
    <InputYourPassword 
    postId={props.id} 
    isModify={isModify} 
    getPosts={props.getPosts} 
    setCheckPw={setCheckPw}
    handleToken={props.handleToken}
    accessToken={props.accessToken}
    />
    :
    <div className ='commentListEntry'>
      <section>
      <strong>{props.name}</strong>
        <span className = 'modify' onClick={()=>translateForm(true)}>수정</span>
        <span className = 'delete' onClick={()=>translateForm(false)}>삭제</span>
      </section>
      <section>
      <p>{props.comment}</p>
      </section>
    </div>

  )
}