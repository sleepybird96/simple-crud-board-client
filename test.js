const axios = require("axios")

//post(글작성)
axios
.post('https://127.0.0.1:3000/write', {
      "userId": "ㅇㅇ",
      "password": "asdf",
      "title": "맥주가 마시고싶습니다",
      "article": "...ㅠㅠ"
})

//get
// axios
// .get('http://127.0.0.1:3000/')
// .then(resp => console.log(resp.data))
