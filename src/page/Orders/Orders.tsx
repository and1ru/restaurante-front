import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { socket } from "../../customHooks/socket";
import { OrderCardWaitress } from "../../components/OrderCardWaitress/OrderCardWaitress";

interface Dishes {
  name: string;
  quantity: number
  id: number
}

interface Response {
  id: number;
  status: string;
  Order_dish: Dishes[]

}

export const Orders = () => {
    const [orders, setOrders] = useState<Response[]>([])
    
      useEffect(() => {
        socket.on("orders-waitress", (data) => {
          setOrders(data)
        })

        socket.on("new-order-waitress", (data) => {
          setOrders((orders) => [...orders, data])
        })

        socket.on("order-waitress-updated", (data) => {
          setOrders((orders) => orders.filter((order) => order.id !== data.orderId))
        })
    
        socket.emit("get-orders-waitress")
    
        return () => {
          socket.off("orders-waitress")
          socket.off("new-order-waitress")
          socket.off("order-waitress-updated")
        }
      }, [])
  return (
    <>
        <Header />
        <main className="p-10">
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-center">Orders Ready</h2>
            </section>
        <section className={`${ orders.length > 0 ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-4" : "" }`}>
          { orders.length === 0 ? <p className="bg-blue-300 w-full p-4 rounded-lg text-xl text-center">no orders yet</p> :
            orders.map(order => 
              <OrderCardWaitress 
                estado={order.status} 
                key={order.id} 
                dishes={order.Order_dish} 
                id={order.id} 
              />)
          }
        </section>
        </main>
    </>
  );
};
