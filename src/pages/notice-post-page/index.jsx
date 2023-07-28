import React from "react";
import useLogic from "./use-logic";
import classNames from "classnames/bind";
import styles from "./notice-post-page.module.scss";
import NavMenu from "../../components/nav-menu";

const ss = classNames.bind(styles);

const NoticePostPage = () => {
  const logic = useLogic();
  return (
    <div className={ss("wrapper")}>
      <NavMenu />
      <div className={ss("board-title-wrapper")}>
        <h1 className={ss("board-title")}>Board</h1>
        <p>Check out the latest news from the team 6+7=13 | Daily Study Journal |
        </p>
      </div>

      <form className={ss("form-wrapper")}>
        <div className={ss("post-title")}>
          <label className={ss('title')}>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={(e) => {
                logic.setBoardTitle(e.target.value);
              }}
            />

          </label>
        </div>
        <div className={ss("name-wrapper")}>
          <div>
            <label className={ss("name")}>

              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Name"
                onChange={(e) => {
                  logic.setBoardWriter(e.target.value);
                }}
              />
            </label>
          </div>

          <div>
            <label className={ss("password")}>
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                placeholder="Password"
                onChange={(e) => {
                  logic.setBoardPass(e.target.value);
                }}
              />
            </label>
          </div>
        </div>

        <div>
          <label>
            <textarea
              placeholder="What's new?"
              name="userPost"
              id="userPost"
              onChange={(e) => {
                logic.setBoardContents(e.target.value);
              }}
            />
          </label>
        </div>

        <div className={ss("file-wrapper")}>
          <label className={ss("upload-file-button")} for="input-file">
            Upload the file
          </label>
          <input
            type="file"
            name="input-file"
            id="input-file"
            style={{ display: "none" }}
            onChange={(e) => {
              logic.setFileAttached(e.target.value);
            }}
          />
          <div>
            <button onClick={logic.onSubmit}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NoticePostPage;