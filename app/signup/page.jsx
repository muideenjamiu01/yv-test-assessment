import Image from "next/image";
import SignUpForm from "./components/SignUpForm";



const Login = () => {
  return (
    <div className={`min-h-screen md:flex`}>
      <div className="grid md:w-1/2 place-content-center bg-white px-4 h-screen">
        <SignUpForm />
      </div>
      <div className="bg-loginBackground bg-no-repeat  bg-center w-1/2 ">
        <div className="hidden md:grid place-content-center bg-loginBackground bg-no-repeat bg-contain bg-center w-full h-full">
          <div className="shadow-2xl flex justify-center items-center p-10 bg-white bg-opacity-25 rounded-2xl  object-cover h-[400px] w-[300px]">
            <Image
              src=""
              alt="steam-logo"
              width={173}
              height="auto"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
