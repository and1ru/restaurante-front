import { Link } from "react-router-dom";
import { LoginForm } from "../components/login-form-component";

export const LoginPage = () => {
  return (
    <main className="p-10">
        <div className="p-10 shadow-2xl rounded-lg shadow-black/70">
            <h1 className="text-center text-2xl font-bold mb-10">Login</h1>
            <LoginForm/>
            <Link to="/register" className="text-blue-500 cursor-pointer" >don't you have account?</Link>
        </div>
    </main>
  );
};
