import { useGetBranches } from "../../customHooks/useGetBranches/useGetBranches";

export const OptionBranches = () => {
    const { data } = useGetBranches()
    console.log(data?.result)
    return (
        <>
            {data?.result.map((branch) => (<option key={branch.id} value={branch.id}>{branch.name}</option>))}
        </>
    );
};
