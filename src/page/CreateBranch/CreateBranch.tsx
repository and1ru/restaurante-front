import { CreateBranch } from "../../components/CreateBranch/CreateBranch";
import { Header } from "../../components/Header/Header";


export const CreateSedePage = () => {
  return (
    <>
    <Header />
      <main className="mt-10 mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <section>
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Create Branch
        </h1>
        <p className="mt-2 text-center text-gray-500">
          Enter the information for the new restaurant branch.
        </p>
        </section>

        <section className="mt-8">
          <CreateBranch />
        </section>
      </main>
    </>

  );
};