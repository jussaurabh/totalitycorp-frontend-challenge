import { Minus, Plus } from "lucide-react";
import OutlineButton from "../components/outline_button";
import { Separator } from "../components/ui/separator";
import SolidButton from "../components/solid_button";
import BreadCrumbs from "../components/breadcrumbs";

export default function CartPage() {
	return (
		<div className="mt-8">
			{/* <div className="flex flex-row items-center mb-5">
				<Link to="/" className="text-sm text-gray-500">
					Home
				</Link>
				<ChevronRight size={15} className="mx-2 text-gray-500" />
				<Link to="" className="text-sm text-gray-500">
					Cart
				</Link>
			</div> */}
			<BreadCrumbs
				paths={[
					{ href: "/", name: "Home" },
					{ href: "/cart", name: "Cart" },
				]}
			/>
			<div className="grid grid-cols-12 gap-5">
				<div className="col-span-8">
					<div className="border rounded-sm p-4 flex flex-row justify-between mb-4">
						<div className="flex-1">
							<div className="text-base">
								Deliver to: <span className="font-bold text-base">Saurabh pawa, 23434</span>
							</div>
							<div className="text-base text-gray-400 line-clamp-1">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse quidem? Tenetur cupiditate maxime
							</div>
						</div>
						<div className="flex-1 flex justify-end">
							<OutlineButton>Change</OutlineButton>
						</div>
					</div>

					<div className="border rounded-sm">
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<Separator color="gray" />
						<div className="flex flex-row justify-end p-4">
							<SolidButton>Place Order</SolidButton>
						</div>
					</div>
				</div>

				<div className="col-span-4">
					<div className="border rounded-sm justify-between">
						<div className="p-4 border-b border-gray-200">Price Details</div>

						<div className="p-4 flex flex-row justify-between items-center">
							<div>Price (1 Item)</div>
							<div>$ 3323</div>
						</div>
						<Separator color="gray" />
						<div className="p-4 flex flex-row justify-between items-center">
							<div className="text-lg font-bold">Total Amount</div>
							<div className="text-lg font-bold">$ 3323</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function CartItem() {
	return (
		<div className=" p-2 flex flex-row h-28 mb-2">
			<div className="w-20 h-full min-w-[80px] bg-gray-400"></div>

			<div className="mb-4 px-2">
				<div className="text-xl">Produtct name</div>
				<div className="text-base">$ 3434</div>
				<div className="bg-gray-100 rounded-full py-2 px-3 flex flex-row justify-evenly">
					<button>
						<Plus size={15} />
					</button>
					<div className="text-sm mx-6">1</div>
					<button>
						<Minus size={15} />
					</button>
				</div>
			</div>
		</div>
	);
}
