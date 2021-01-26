import './InputComment.css'
import { useState } from 'react'
import axios from 'axios';

export default function ModifyComment (props) {
  const {id, name, password, comment} = props.modForm
  const [nameInput, setNameInput] = useState(name);
  const [passwordInput, setPasswordInput] = useState(password);
  const [commentInput, setCommentInput] = useState(comment);

  const handleNameInput = (e)=>{
    setNameInput(e.target.value);
  }

  const handlePwInput = (e)=>{
    setPasswordInput(e.target.value);
  }

  const handleCommentInput = (e)=>{
    setCommentInput(e.target.value);
  }

  const putModify = ()=>{
    if(nameInput&&passwordInput&&commentInput){
      axios.put('https://127.0.0.1:4000/posts/modify',{
        id,
        name:nameInput,
        password:passwordInput,
        comment:commentInput
      })
      .then(()=>{
        props.setModForm(null);
        props.setCheckPw(false);
        props.getPosts();
      })
      .catch(()=>alert('뭐라도입력하세요 제발..'))
    }else{
      alert('뭐라도 입력하세요 제발..')
    }
  }

  return (
    <div className ='modifyComment'>
      <section className ='informationForm'>
        <label htmlFor="nameInput">이름: </label>
        <input className = 'nameInput' defaultValue={name} onChange={handleNameInput}/>
        <label htmlFor="passwordInput">비밀번호: </label>
        <input type="password" className = 'passwordInput' defaultValue={password} onChange={handlePwInput}/>
      </section>
      <section className = 'submitForm'>
        <textarea className = 'commentInput' placeholder = '할말을 입력하세요' defaultValue={comment} onChange={handleCommentInput}/>
        <span>한번 뱉은말은 주워담을 수 없습니다.</span>
        <button className = 'submit' onClick={putModify}>수정완료</button>
      </section>
    </div>
  )
}