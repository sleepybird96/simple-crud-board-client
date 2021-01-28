import './InputYourPassword.css'
import { useState } from 'react'
import axios from 'axios'
import ModifyComment from './ModifyComment'
export default function InputYourPassword (props){
  const [modForm, setModForm] = useState(null);
  const [password, setPw] = useState('');

  const handlePassWord = (e)=>{
    setPw(e.target.value);
  }
  const handleCommentForm = ()=>{
    if(props.isModify){
      axios.post('https://server.gsang2board.click/posts/modify',{
        id:props.postId,
        password
      },{withCredentials:true})
      .then(res=>{
        const {id, name, password, comment} =res.data;
        setModForm({
          id,
          name,
          password,
          comment,
        });
      })
      .catch((err)=>{
        if(err)alert("비밀번호를 확인해주세요")
      })
    }else{
      axios.post('https://server.gsang2board.click/posts/delete',{
        id:props.postId,
        password
      },{withCredentials:true})
      .then(res=>{
        setPw('');
        console.log(res)
        return axios.delete('https://server.gsang2board.click/posts/delete',{
          id:res.data.id,
          password:res.data.password
        },{withCredentials:true})
      })
      .then((res)=>{
        props.setCheckPw(false);
        props.getPosts();
      })
      .catch((err)=>{
        if(err)alert("비밀번호를 확인해주세요")
      })
    }
  }
  return (
    modForm?
    <ModifyComment modForm={modForm} setModForm={setModForm} getPosts={props.getPosts} setCheckPw={props.setCheckPw}/>
    :
    <div className ='inputYourPassword'>
      <label htmlFor='checkPassword'>비밀번호를 입력하세요:</label>
      <input type='password'name='checkPassword' onChange={handlePassWord} value={password}/>
      <button onClick={handleCommentForm}>입력완료</button>
    </div>
  )
}