import './InputYourPassword.css'
export default function InputYourPassword (){
  return <div className ='inputYourPassword'>
    <label htmlFor='checkPassword'>비밀번호를 입력하세요:</label>
    <input name='checkPassword'/>
    <button>입력완료</button>
  </div>
}