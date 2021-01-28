import './CommentList.css';
import CommentListEntry from './CommentListEntry';

export default function CommentList (props){
  return(
    <div className = 'CommentList'>
      {props.posts.map((post, idx)=>{
        return <CommentListEntry 
        key={idx} 
        id={post.id} 
        name={post.name} 
        comment={post.comment} 
        getPosts={props.getPosts}
        handleToken={props.handleToken}
        accessToken={props.accessToken}
        />
      }).reverse()}
    </div>
  )
}