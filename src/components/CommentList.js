import './CommentList.css'
import InputComment from './InputComment';
import CommentListEntry from './CommentListEntry';
import InputYourPassword from './InputYourPassword';
export default function CommentList (){
  return(
    <div className = 'CommentList'>
      <CommentListEntry/>
      <CommentListEntry/>
      <InputComment/>
      <InputYourPassword/>
    </div>
  )
}