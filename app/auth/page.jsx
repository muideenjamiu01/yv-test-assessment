import Image from "next/image";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className={`min-h-screen md:flex`}>
      <div className="grid md:w-1/2 place-content-center bg-white  h-screen">
        <LoginForm />
      </div>
      <div className="bg-loginBackground bg-no-repeat  bg-center w-1/2 "></div>
    </div>
  );
};

export default Login;
