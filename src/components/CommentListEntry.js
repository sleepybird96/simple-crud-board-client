import './CommentListEntry.css';
export default function CommentListEntry () {
  return(
    <div className ='commentListEntry'>
      <section>
        <strong>이름</strong>
        <span className = 'modify'>수정</span>
        <span className = 'delete'>삭제</span>
      </section>
      <section>
        <p>와!</p>
      </section>
    </div>
  )
}