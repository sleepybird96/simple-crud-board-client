import './CommentList.css';
import InputYourPassword from './InputYourPassword';
import CommentListEntry from './CommentListEntry';
import ModifyComment from './ModifyComment'

export default function CommentList (){
  return(
    <div className = 'CommentList'>
      <ModifyComment/>
      <InputYourPassword/>
      <CommentListEntry/>
      <CommentListEntry/>
    </div>
  )
}