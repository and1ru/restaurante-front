import { Dark } from "../Dark/Dark";
import { ButtonLogOut } from "../ButtonLogOut/ButtonLogOut";

export const HeaderDashboard = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-gray-800">
                        Restaurante Manager
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <Dark />
                    <ButtonLogOut />
                </div>

            </div>
        </header>
    );
};
