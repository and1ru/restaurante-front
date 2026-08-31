import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth/useAuth";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useEffect } from "react";

export const Root = () => {
  const { data, isLoading, isSuccess, error } = useAuth();
  const { setAuth } = useAuthContext()
  const navigate = useNavigate()

  // no pueden haber returns antes de un useEffect
  useEffect(() => {
    if (isSuccess && data?.result) {
      setAuth({
        name: data.result.name,
        role: data.result.role
      });
    }
  }, [isSuccess, data]);
  
  if (error) return navigate("/login", {replace:true})

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};