import { create } from "zustand";

type Dish = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number
}

type DishCartState = {
    dishes:Dish[],
    add: (dish:Dish) => void,
    remove: (dishId:number) => void
    updateQuantity: (id:number, quantity:number) => void
    clear: () => void
}


export const useDishCart = create<DishCartState>((set) => ({
    // estado inicial
    dishes: [],

    // accciones
    // agregar
    // se le pasa como argumento un dish
    add: (dish) => set((state) => {
        const inCart = state.dishes.find((item) => item.id === dish.id)
        if(inCart){
            return {
                dishes: state.dishes.map((item) => item.id === dish.id ? {...item, quantity:item.quantity + 1} : item)
            }
        }
        // dice que va a retornar todo lo que haya en el estado de dishes y va a agregar un nuevo dish que fue el que se paso como parametro con una cantidad de 1
        return { dishes:[...state.dishes, {...dish}]}
    }),
    
    // eliminar
    // dice que espera un dishId
    // recibe un state y filtra que todos los dishes que tengan el mismo id que el dishId que se paso como parametro se van a eliminar
    remove: (dishId) => set((state) => ({ dishes: state.dishes.filter((item) => item.id !== dishId)})),

    updateQuantity: (id, quantity) => set((state) => ({
        dishes: state.dishes.map((item) => item.id === id ? {...item, quantity}: item)
    })),

    clear: () => set((state) => ({dishes:state.dishes=[]}))
}))