import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { socket } from "../../customHooks/socket";
import { OrderCardChef } from "../../components/OrderCardChef/OrderCardChef";

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

export const ChefPage = () => {
  const [orders, setOrders] = useState<Response[]>([])

  useEffect(() => {
    socket.on("orders-chef", (data) => {
      console.log(data)
      setOrders(data)
    })

    socket.on("new-order-chef", (data) => {
      setOrders((orders) => [...orders, data])
    })

    socket.on("order-updated", (data) => {
      console.log(data)
      if (data.newState === "COOKING") {
        setOrders((orders) => orders.map((order) => order.id === data.orderId ? { ...order, status: data.newState } : order))
      } else if (data.newState === "READY") {
        setOrders((orders) => orders.filter((order) => order.id !== data.orderId))
      }

    })

    socket.emit("get-orders-chef")

    return () => {
      socket.off("orders-chef")
      socket.off("new-order-chef")
      socket.off("order-updated")
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
          {orders.map(order => <OrderCardChef estado={order.status} key={order.id} dishes={order.Order_dish} id={order.id} />)}
        </section>
      </main>
    </>

  );
};