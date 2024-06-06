
import RegisterForm from "@/components/auth/Register";
import React from "react";


const Register = () => {
 

  return (
    <div>
      <>
        {/* component */}
        <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center w-full ">
          <div className="bg-white border-2 border-slate-200 shadow-md rounded-lg px-8 py-6 max-w-xl">
            <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
              Registration !
            </h1>
            <RegisterForm/>
          </div>
        </div>

      </>
    </div>
  );
};

export default Register;
