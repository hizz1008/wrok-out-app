import Login from "./Login";
import api from "./api/axios";
import { useState } from "react";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };
  const signUp = async (userData) => {
    try {
      await api.post("/auth/signup", userData);
      setSignUped(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("동일한 userId 가 존재합니다");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userId: id,
      password: password,
      nickname: nickName,
    };
    signUp(userData);
  };

  const [signUped, setSignUped] = useState(false);
  if (signUped) {
    return <Login />;
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
        <input
          onChange={(e) => handleChange(e, setNickName)}
          value={nickName}
          placeholder="nickname"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
