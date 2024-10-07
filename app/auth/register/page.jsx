import Image from "next/image";
import SignUpForm from "./components/SignUpForm";

const page = () => {
  return (
    <div className={`min-h-screen md:flex bg-[#F5F6FA]`}>
      <div className="grid md:w-1/2 place-content-center bg-white  h-screen">
        <SignUpForm />
      </div>
      <div className="f">
      
      </div>
      <div className="bg-loginBackground bg-no-repeat  bg-center w-1/2 "></div>
    </div>
  );
};

export default page;
