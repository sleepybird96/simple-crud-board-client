import './CommentList.css';
import CommentListEntry from './CommentListEntry';

export default function CommentList (props){
  console.log(props.posts)
  return(
    <div className = 'CommentList'>
      {props.posts.map((post, idx)=>{
        return <CommentListEntry key={idx} name={post.name} comment={post.comment}/>
      })}
    </div>
  )
}