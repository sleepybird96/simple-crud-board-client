import './InputComment.css'
import './InputYourPassword'
export default function InputComment () {
  return (
    <div className ='inputComment'>
      <section className ='informationForm'>
        <label htmlFor="nameInput">이름: </label>
        <input className = 'nameInput'/>
        <label htmlFor="passwordInput">비밀번호: </label>
        <input className = 'passwordInput'/>
      </section>
      <section className = 'submitForm'>
        <input className = 'commentInput' placeholder = '할말을 입력하세요'/>
        <span>한번 뱉은말은 주워담을 수 없습니다.</span>
        <button className = 'submit'>등록</button>
      </section>
    </div>
  )
}