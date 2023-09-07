import { LogOut, MapPin, Package2, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SellerMenu() {
	const navigate = useNavigate();

	return (
		<div className="border rounded-md mb-5">
			<div className="flex flex-row items-center justify-start p-4 cursor-pointer hover:bg-gray-100" onClick={() => navigate("/user/orders")}>
				<Package2 size={20} />
				<div className="text-xl ml-5">My Products</div>
			</div>

			<div
				className="flex flex-row items-center justify-start border-t border-gray-100 p-4 cursor-pointer hover:bg-gray-100"
				onClick={() => navigate("/user/favorites")}
			>
				<User size={20} />
				<div className="text-xl ml-5">Favorites</div>
			</div>
			<div
				className="flex flex-row items-center justify-start border-t border-gray-100 p-4 cursor-pointer hover:bg-gray-100"
				onClick={() => navigate("/user/profile")}
			>
				<User size={20} />
				<div className="text-xl ml-5">Profile</div>
			</div>

			<div className="flex flex-row items-center justify-start cursor-pointer p-4 hover:bg-gray-100" onClick={() => navigate("/user/address")}>
				<MapPin size={20} />
				<div className="text-xl ml-5">Manage Address</div>
			</div>

			<div className="flex flex-row items-center justify-start border-t border-gray-100 p-4 cursor-pointer hover:bg-gray-100">
				<LogOut size={20} />
				<div className="text-xl ml-5">Logout</div>
			</div>
		</div>
	);
}
