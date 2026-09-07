import { useGetBranches } from "../../customHooks/useGetBranches/useGetBranches";

export const OptionBranches = () => {
    const { data } = useGetBranches()
    console.log("hola como estas")
    console.log( data?.result)
    console.log( data)
    return (
        <>
            {data?.result.map((branch) => (<option key={branch.id} value={branch.id}>{branch.name}</option>))}
        </>
    );
};
