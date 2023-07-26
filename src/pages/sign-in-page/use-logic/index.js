// import React, { useState } from "react";
// import useSignIn from "../../../services/sigin";
// import { useNavigate } from "react-router-dom";

// const useLogic = () => {
//   const [userId, setUserId] = useState("");
//   const [userName, setUserName] = useState("");
//   const [userPw, setUserPw] = useState("");
//   const [userMail, setUserMail] = useState("");
//   const [userPhoto, setUserPhoto] = useState("");
//   const signin = useSignIn();
//   const navigate = useNavigate();
//   //   const [user, setUser] = useState({ name: "", id: "", pw: "", mail: "" });
//   const onSubmit = async (e) => {
//     console.log({ userId, userMail, userName, userPw, userPhoto });
//     e.preventDefault();
//     signin({ userId, userMail, userName, userPw, userPhoto });
//     navigate("/");
//   };
//   return {
//     userId,
//     userMail,
//     userName,
//     userPw,
//     setUserId,
//     setUserMail,
//     setUserName,
//     setUserPw,

//     setUserPhoto,
//     onSubmit,
//   };
// };

// export default useLogic;
