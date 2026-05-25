import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const navegar = useNavigate()
    
    function handleForm(e:React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    const handleClick = () => {
        navegar("/private/dashboard", {replace:true})
    }

  return (
    <main className="p-10">
        <div className="p-10 shadow-2xl rounded-lg shadow-black/70">
            <h1 className="text-center text-2xl font-bold mb-10">Login</h1>
            <form onSubmit={handleForm}>
                <input type="email" placeholder="email" className="p-2 shadow-lg rounded-lg mb-5 w-full" />
                <input type="password" placeholder="password" className="p-2 shadow-lg rounded-lg mb-5 w-full" />
                <button 
                onClick={handleClick}
                className="p-2 rounded-lg w-full bg-blue-500 text-white font-bold hover:bg-blue-600 button-transform mb-5">Enviar</button>
            </form>
            <Link to="/register" className="text-blue-500 cursor-pointer" >don't you have account?</Link>
        </div>
    </main>
  );
};
