import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { socket } from "../../customHooks/socket";

interface Dishes {
  name: string;
  quantity: number
  branch_dish_id: number
}

interface Response {
  id: number;
  status: string;
  Order_dish: Dishes[]

}

export const ChefPage = () => {
  const [orders, setOrders] = useState<Response[]>([])

  useEffect(() => {
    socket.on("orders", (data) => {
      setOrders(data)
    })

    socket.on("new-order", (data) => {
      setOrders((orders) => [...orders, data])
    })

    return () => {
      socket.off("orders")
      socket.off("new-order")
    }
  }, [])


  return (
    <>
      <Header />
      <main className="p-10">
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Kitchen Orders</h1>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {orders.map(order => <OrderCard estado={order.status} key={order.id} dishes={order.Order_dish} />)}
        </section>
      </main>
    </>

  );
};