import './InputComment.css'

export default function ModifyComment () {
  return (
    <div className ='modifyComment'>
      <section className ='informationForm'>
        <label htmlFor="nameInput">이름: </label>
        <input className = 'nameInput'/>
        <label htmlFor="passwordInput">비밀번호: </label>
        <input type="password" className = 'passwordInput'/>
      </section>
      <section className = 'submitForm'>
        <textarea className = 'commentInput' placeholder = '할말을 입력하세요'/>
        <span>한번 뱉은말은 주워담을 수 없습니다.</span>
        <button className = 'submit'>수정완료</button>
      </section>
    </div>
  )
}