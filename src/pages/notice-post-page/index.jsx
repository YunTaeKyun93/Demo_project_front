import React from 'react'
import useLogic from './use-logic';

const NoticePostPage = () => {
    const logic = useLogic();
  return (
    <div>
    <label>
      게시물 이름
      <input
        type="mail"
        name="userMail"
        id="userMail"
        onChange={(e) => {
          logic.setPostTitle(e.target.value);
        }}
      />
    </label>
    <label>
     내용
      <input
        type="textarea"
        name="userId"
        id="userId"
        onChange={(e) => {
          logic.setPostDescription(e.target.value);
        }}
      />
    </label>
    <label>
     작성자
      <input
        type="password"
        name="userPw"
        id="userPw"
        onChange={(e) => {
          logic.setPostAuthor(e.target.value);
        }}
      />
    </label>
    <label>
      비밀번호
      <input
        type="text"
        name="userName"
        id="userName"
        onChange={(e) => {
          logic.setPostPassword(e.target.value);
        }}
      />
    </label>
    <label>
      사진을 업로드 해주세요
      <input
        type="file"
        name="userName"
        id="userName"
        onChange={(e) => {
          logic.setPostPhoto(e.target.value);
        }}
      />
    </label>
    <div onClick={logic.onSubmit}>작성</div>
  </div>
  )
}

export default NoticePostPage