import './CommentListEntry.css';
export default function CommentListEntry (props) {
  return(
    <div className ='commentListEntry'>
      <section>
      <strong>{props.name}</strong>
        <span className = 'modify'>수정</span>
        <span className = 'delete'>삭제</span>
      </section>
      <section>
      <p>{props.comment}</p>
      </section>
    </div>
  )
}