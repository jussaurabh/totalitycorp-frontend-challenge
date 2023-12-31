import { Outlet } from "react-router-dom";

import ConsumerMenu from "./consumer_menu";
import UserProfileTag from "./user_profile_tag";

export default function UserLayout() {
	return (
		<div className="grid grid-cols-12 gap-5 mt-8">
			<div className="col-span-4 ">
				<div className="h-[400px] w-full">
					<UserProfileTag avatarUrl="https://github.com/shadcn.png" fullName="Saurbah pawar" />

					<ConsumerMenu />
				</div>
			</div>

			<div className="col-span-8 border rounded-md">
				<Outlet />
			</div>
		</div>
	);
}
