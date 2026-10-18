// owner -> luisa
// todo lo que tenga que ver con las estadisticas
// poder editar la branch, salary, name, fire y role
// poder actualizar los dishes

// admin -> sebastian
// todo lo que tenga que ver con estadisticas pero solo de su branch
// actualizar la pagian si agrega un branch_dish
// actualizar dish

// receptionist -> julian
// book a reservation
// header para la pagina book
// todo confirm book

// chef -> samuel
// si no hay orders poner algo como "no orders yet"
// cuando actualice el estado de la order mostrar de inmediato
// hacer que las orders aparezcan de inmediato

// waitress -> neymar
// si no hay dishes en la branch entonces poner "no dishes yet"
// para buscar dishes poner category
// hacer que las orders aparezcan de inmediato
// que las orders aparezcan de inmediato cuando el chef dice que estan listas

// quitar name de branch_dishes


import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { QueryProvider } from "./customHooks/QuertClient/QueryClientProvider";
import { AppRouterProvider } from "./routes/app-router-provider";

const App = () => {
  return (
    <QueryProvider>
      <AuthProvider>
      <AppRouterProvider/>        
      </AuthProvider>
    </QueryProvider>
  );
};

export default App