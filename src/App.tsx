// owner -> luisa
// todo lo que tenga que ver con las estadisticas
// mejorar los estilos de manage employee
// que solo pueda acceder al employee
// crear una pagina para manejar un employee especifico
// cuando busque a una persona no importa si el nombre esta completo

// admin -> estefany
// todo lo que tenga que ver con estadisticas pero solo de su branch
// mejorar los estilos de manage employee
// que solo pueda acceder al employee
// crear una pagina para manejar un employee especifico
// cuando busque a una persona no importa si el nombre esta completo
// actualizar la pagian si agrega un branch_dish

// waitress -> sebastian
// obtener todos los dishes de la branch
// confirmar order
// poner un header a la pagina waitress

// receptionist -> julian
// book a reservation
// header para la pagina book
// todo confirm book

// chef -> jhonny
// obtener las orders
// cambiar estado de order
// header para la pagina chef

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