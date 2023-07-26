import React from "react";
import useLogic from "./use-logic";
import classNames from "classnames/bind";
import styles from "./notice-post-page.module.scss";
const ss = classNames.bind(styles);

const NoticePostPage = () => {
  const logic = useLogic();

  <div className={ss("wrapper")}>
    <div className={ss("boardTitleWrapper")}>
      <h1 className={ss("boardTitle")}>Board</h1>
      <p>Check out the latest news from the team 6+7=13 </p>
    </div>

    <form>
      <div>
        <label for="title" className={ss("articleTitle")}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={(e) => {
              logic.setPostTitle(e.target.value);
            }}
          />
        </label>
      </div>

      <div className={ss("nameWrapper")}>
        <label className={ss("name")}>
          <input
            type="text"
            name="userPw"
            id="userPw"
            placeholder="Name"
            onChange={(e) => {
              logic.setPostAuthor(e.target.value);
            }}
          />
        </label>

        <label className={ss("password")}>
          <input
            type="password"
            name="userName"
            id="userName"
            placeholder="Password"
            onChange={(e) => {
              logic.setPostPassword(e.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          <textarea
            name="userId"
            id="userId"
            onChange={(e) => {
              logic.setPostDescription(e.target.value);
            }}
          />
        </label>
      </div>
      <label>
        click here to upload the file
        <input
          type="file"
          name="userName"
          id="userName"
          onChange={(e) => {
            logic.setPostPhoto(e.target.value);
          }}
        />
      </label>
      <div>
        <button onClick={logic.onSubmit}>Submit</button>
      </div>
    </form>
  </div>;
};

export default NoticePostPage;
