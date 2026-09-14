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
    
        socket.emit("get-orders-waitress")
    
        return () => {
          socket.off("orders-waitress")
          socket.off("new-order-waitress")
        }
      }, [])
  return (
    <>
        <Header />
        <main className="p-10">
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-center">Orders Ready</h2>
            </section>
        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {orders.map(order => <OrderCardWaitress estado={order.status} key={order.id} dishes={order.Order_dish} id={order.id} />)}
        </section>
        </main>
    </>
  );
};
