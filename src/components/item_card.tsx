import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ItemCard({ description }: { description: string }) {
	return (
		<div className="w-full mb-4">
			<div className="h-56 relative rounded mb-2">
				<Link to="/product/2332">
					<div className="h-56 bg-gray-100 rounded relative"></div>
				</Link>
				<button className="rounded-full bg-white flex justify-center items-center absolute top-2 right-2 p-1">
					<Heart size={20} className="text-gray-400" />
				</button>
			</div>

			<div className="flex flex-row justify-between w-full mb-2">
				<div className="font-semibold overflow-hidden whitespace-nowrap truncate flex-1">Wireless earbugs some namea sasdasdasdas ds d</div>
				<div className="font-bold">$ 90</div>
			</div>

			<div className="text-xs text-gray-500 mb-2 line-clamp-3">{description}</div>

			<Link to="/cart/23" className="border-2 border-black rounded-md px-2 py-1">
				Add to cart
			</Link>
		</div>
	);
}
