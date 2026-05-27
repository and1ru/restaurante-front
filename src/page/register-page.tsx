import { Link } from "react-router-dom";
import { RegisterForm } from "../components/register-form-component";

export const RegisterPage = () => {

  return (
    <main className="p-10">
        <div className="p-10 shadow-2xl rounded-lg shadow-black/70">
            <h1 className="text-center text-2xl font-bold mb-10">Register</h1>
            <RegisterForm/>
            <Link to="/login" className="text-blue-500 cursor-pointer" >do you have account?</Link>
        </div>
    </main>
  );
};
