import { OptionBranches } from "../OptionBranches/OptionBranches"

export const FilterEmployee = () => {
    return (
        <section className="px-10">
            <form className="grid gap-4 md:grid-cols-3">
                <input
                    type="text"
                    placeholder="Search employee..."
                    className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
                />

                <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
                    <option>All branches</option>
                    <OptionBranches />
                </select>

                <select className="rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900">
                    <option>All roles</option>
                    <option>Admin</option>
                    <option>Waitress</option>
                    <option>receptionist</option>
                    <option>Chef</option>
                </select>
            </form>
        </section>

    )
}