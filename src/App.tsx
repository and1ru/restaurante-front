// root -> andres
// poner una key en el dashboard ✔
// mensaje de error para los inputs del create restaurant ✔
// mostrar mensaje de cuando se cree la empresa y reiniciar el formulario ✔

// owner -> luisa
// poner una key en el dashboard ✔
// mensaje de error para los inputs del create branch ✔
// estilos para create branch ✔
// arreglar el create branch ✔
// en create category mostrar un mensaje de que se creo el category ✔
// mensaje de error en el input ✔
// mensaje de error para el input de hire ✔
// mensaje de que hizo el hire ✔
// reiciniar el hire si es exitoso ✔
// para manage employee agregar filtro por nombre ✔
// todo lo que tenga que ver con las estadisticas
// todo lo que tenga que ver con create a dish

// admin -> estefany
// hire pero no puede decir cual branch
// manage employees pero solo los de su branch
// todo lo que tenga que ver con estadisticas pero solo de su branch
// manage dishes

// waitress -> sebastian
// obtener todos los dishes de la branch
// confirmar order
// poner un header a la pagina waitress
// dashboard ✔

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