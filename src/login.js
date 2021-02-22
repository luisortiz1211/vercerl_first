import { Auth } from "../lib/auth";

const Login = () => {
  const handlelogin = async (data) => {
    const userData = await Auth.login({
        try{
      email: "admin@prueba.com",
      password: "123123",
    });
    console.log("userData", userData);}
  };
};

return(
  <div>
    <button onClick={handlelogin}>Login</button>
    

  </div>
);
export default Login;
