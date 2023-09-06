import { Outlet, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut, MapPin, Package2, User } from "lucide-react";

export default function UserLayout() {
	const navigate = useNavigate();

	return (
		<div className="grid grid-cols-12 gap-5 mt-8">
			<div className="col-span-4 ">
				<div className="h-[400px] w-full">
					<div className="border rounded-md p-4 flex flex-wrap mb-5 bg-white">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>

						<div className="ml-4">
							<div className="text-xs text-gray-400">Hello,</div>
							<div className="font-bold text-xl">Saurabh Pawar</div>
						</div>
					</div>

					<div className="border rounded-md mb-5">
						<div className="flex flex-row items-center justify-start p-4 cursor-pointer hover:bg-gray-100" onClick={() => navigate("/user/orders")}>
							<Package2 size={20} />
							<div className="text-xl ml-5">My Orders</div>
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
				</div>
			</div>

			<div className="col-span-8 border rounded-md">
				<Outlet />
			</div>
		</div>
	);
}
