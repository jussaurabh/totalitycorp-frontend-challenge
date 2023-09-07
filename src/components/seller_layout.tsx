import { Outlet } from "react-router-dom";

import UserProfileTag from "./user_profile_tag";
import SellerMenu from "./seller_menu";
import AccountBalanceSection from "./account_balance_section";

export default function SellerLayout() {
	return (
		<div className="grid grid-cols-12 gap-5 mt-8">
			<div className="col-span-4 ">
				<div className="h-[400px] w-full">
					<UserProfileTag avatarUrl="https://github.com/shadcn.png" fullName="Seller pawar" />
					<AccountBalanceSection />
					<SellerMenu />
				</div>
			</div>

			<div className="col-span-8 border rounded-md">
				<Outlet />
			</div>
		</div>
	);
}
