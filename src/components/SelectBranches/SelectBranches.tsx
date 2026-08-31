export const SelectBranches = () => {
  return (
                    <select 
                    onChange={handleBranch}
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
                        <option value="">All branches</option>
                    <OptionBranches />
                </select>
  );
};
