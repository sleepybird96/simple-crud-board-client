import './InputComment.css'
import {useState} from 'react'
import axios from 'axios';

export default function InputComment (props) {
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [commentInput, setCommentInput] = useState('');

  const handleNameInput = (e)=>{
    setNameInput(e.target.value);
  }

  const handlePwInput = (e)=>{
    setPasswordInput(e.target.value);
  }

  const handleCommentInput = (e)=>{
    setCommentInput(e.target.value);
  }

  const submit = () =>{
    axios.post('https://127.0.0.1:4000/posts/write',{
      name:nameInput,
      password:passwordInput,
      comment:commentInput
    })
    .then(()=>{
      setNameInput('')
      setPasswordInput('')
      setCommentInput('')
      props.getPosts();
    })
  }

  return (
    <div className ='inputComment'>
      <section className ='informationForm'>
        <label htmlFor="nameInput">이름: </label>
        <input className = 'nameInput' value={nameInput} onChange={handleNameInput}/>
        <label htmlFor="passwordInput">비밀번호: </label>
        <input type="password" className = 'passwordInput' value={passwordInput} onChange={handlePwInput}/>
      </section>
      <section className = 'submitForm'>
        <textarea className = 'commentInput' placeholder = '할말을 입력하세요' value={commentInput} onChange={handleCommentInput}/>
        <span>한번 뱉은말은 주워담을 수 없습니다.</span>
        <button className = 'submit' onClick={submit}>등록</button>
      </section>
    </div>
  )
}