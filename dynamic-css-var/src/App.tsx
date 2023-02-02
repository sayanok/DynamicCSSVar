import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [backgroundColorForUserId, setBackgroundColorForUserId] = useState("var(--bg-white)");
  const [backgroundColorForPassword, setBackgroundColorForPassword] = useState("var(--bg-white)");

  function onChangeHandler(type: string, inputValue: string) {
    type === "userID" ? setUserId(inputValue) : setPassword(inputValue);
  }

  function onClickHandler() {
    spaceValidation();
  }

  function spaceValidation() {
    if (userId.match(/ /) && password.match(/ /)) {
      setErrorMessage("ユーザーIDとパスワードに空白が含まれているよ");
      setBackgroundColorForUserId("var(--bg-yellow)");
      setBackgroundColorForPassword("var(--bg-yellow)");
    } else if (userId.match(/ /)) {
      setErrorMessage("ユーザーIDに空白が含まれているよ");
      setBackgroundColorForPassword("var(--bg-white)");
      setBackgroundColorForUserId("var(--bg-yellow)");
    } else if (password.match(/ /)) {
      setErrorMessage("パスワードに空白が含まれているよ");
      setBackgroundColorForUserId("var(--bg-white)");
      setBackgroundColorForPassword("var(--bg-yellow)");
    } else {
      loginVerification();
    }
  }

  function loginVerification() {
    if (userId === "testuser" && password === "mypassword") {
      setErrorMessage("ログイン成功");
      setBackgroundColorForUserId("var(--bg-white)");
      setBackgroundColorForPassword("var(--bg-white)");
    } else {
      setErrorMessage("ログイン失敗");
      setBackgroundColorForUserId("var(--bg-red)");
      setBackgroundColorForPassword("var(--bg-red)");
    }
  }

  function cancel() {
    setUserId("");
    setPassword("");
    setErrorMessage("");
    setBackgroundColorForUserId("var(--bg-white)");
    setBackgroundColorForPassword("var(--bg-white)");
  }

  return (
    <div>
      <style>
        {`:root{
          --bg-red: red;
          --bg-yellow: yellow;
          --bg-white: white;
        }`}
      </style>
      <div>
        ユーザーID:
        <input
          type={"text"}
          onChange={(e) => onChangeHandler("userID", e.target.value)}
          value={userId}
          style={{ backgroundColor: backgroundColorForUserId }}
        />
      </div>
      <div>
        パスワード
        <input
          type={"text"}
          onChange={(e) => onChangeHandler("password", e.target.value)}
          value={password}
          style={{ backgroundColor: backgroundColorForPassword }}
        />
      </div>
      <div>{errorMessage}</div>
      <div>
        <button onClick={() => cancel()}>キャンセル</button>
        <button style={{ marginLeft: "80px" }} onClick={() => onClickHandler()}>
          ログイン
        </button>
      </div>
    </div>
  );
};

export default App;
