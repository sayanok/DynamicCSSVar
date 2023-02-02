import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onChangeHandler(type: string, inputValue: string) {
    type === "userID" ? setUserId(inputValue) : setPassword(inputValue);
  }

  function onClickHandler() {
    spaceValidation();
  }

  function spaceValidation() {
    if (userId.match(/ /) && password.match(/ /)) {
      setErrorMessage("ユーザーIDとパスワードに空白が含まれているよ");
    } else if (userId.match(/ /)) {
      setErrorMessage("ユーザーIDに空白が含まれているよ");
    } else if (password.match(/ /)) {
      setErrorMessage("パスワードに空白が含まれているよ");
    } else {
      loginVerification();
    }
  }

  function loginVerification() {
    if (userId === "testuser" && password === "mypassword") {
      setErrorMessage("ログイン成功");
    } else {
      setErrorMessage("ログイン失敗");
    }
  }

  function cancel() {
    setUserId("");
    setPassword("");
    setErrorMessage("");
  }

  return (
    <div className="App">
      <div>
        ユーザーID:
        <input type={"text"} onChange={(e) => onChangeHandler("userID", e.target.value)} value={userId} />
      </div>
      <div>
        パスワード
        <input type={"text"} onChange={(e) => onChangeHandler("password", e.target.value)} value={password} />
      </div>
      <div>
        ようわからんが色を変える用の空のテキストボックス？
        <input />
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
