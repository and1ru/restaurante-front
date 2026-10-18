import { useGetBranches } from "../../customHooks/useGetBranches/useGetBranches";

export const OptionBranches = () => {
    const { data } = useGetBranches()
    return (
        <>
            {data?.result.map((branch) => (<option key={Number(branch.id)} value={Number(branch.id)}>{branch.name}</option>))}
        </>
    );
};