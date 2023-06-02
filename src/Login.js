import { useState } from "react";
import api from "./api/axios";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const login = async (userData) => {
    try {
      const response = await api.post("/auth/signin", userData);
      const userID = response.config.data.userId;
      console.log(response);
      setUserID(userID);
      setLoggedIn(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("아이디와 비밀번호가 존재하지 않습니다.");
      }
    }
  };
  console.log(userID);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userId: id,
      password: password,
    };
    login(userData);
    setId("");
    setPassword("");
  };

  if (loggedIn) {
    return (
      <div>
        <h1>안녕하세요 {userID}님, 로그인이 완료되었습니다.</h1>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errorMsg && <div>{errorMsg}</div>}
        <input
          onChange={(e) => handleChange(e, setId)}
          value={id}
          placeholder="ID"
          type="text"
        />
        <input
          onChange={(e) => handleChange(e, setPassword)}
          value={password}
          placeholder="password"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
