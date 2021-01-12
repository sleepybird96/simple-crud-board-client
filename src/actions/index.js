import axios from "axios";

//글들 불러오기
export const GET_COMMENT = 'GET_COMMENT';

//글을 수정하기전, 패스워드를 확인
export const CHECK_PASSWORD_MODIFY = 'CHECK_PASSWORD_MODIFY';
//글을 삭제하기전, 패스워드를 확인
export const CHECK_PASSWORD_DELETE = 'CHECK_PASSWORD_DELETE';

//수정
export const MODIFY_COMMENT = 'MODIFY_COMMENT';
//삭제
export const DELETE_COMMENT = 'DELETE_COMMENT';

//글들 불러오기 
export const getComment = (comments) => {
  return {
    type: GET_COMMENT,
    comments,
  }
}

//패스워드 확인 (삭제)
export const checkPwDel = (comment) => {
  return {
    type: CHECK_PASSWORD_DELETE,
    comment,
  }
}

//패스워드 확인 (수정)
export const checkPwMod = (comment) => {
  return {
    type: CHECK_PASSWORD_MODIFY,
    comment,
  }
}

//삭제
export const modComment = (comment) => {
  return {
    type: MODIFY_COMMENT,
    comment
  }
}

//수정
export const delComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    comment,
  }
}

export const thunkGet = () => (dispatch) => {
  axios
    .get('http://127.0.0.1:3000/')
    .then(resp => console.log(resp))
}