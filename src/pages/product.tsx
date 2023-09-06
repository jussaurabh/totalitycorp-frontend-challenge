import { Minus, Plus } from "lucide-react";
import { Separator } from "../components/ui/separator";
import ItemList from "../components/item_list";
import { Link } from "react-router-dom";

export default function ProductPage() {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
				<div className="bg-gray-300 rounded-md w-full h-[300px]"></div>

				<div>
					<h1 className="font-bold text-4xl mb-5">AIrpods Max</h1>
					<div className="text-gray-500 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatem. Ullam voluptatum praesentium, in doloribus, dolores porro{" "}
					</div>

					<Separator color="gray" className="my-5" />

					<h1 className="font-bold text-3xl mt-5 mb-2">$ 90</h1>
					<div className="text-gray-400 text-sm">Suggested payments with 6 months special financing</div>

					<Separator color="gray" className="my-5" />

					<div className="flex flex-row items-center">
						<div className="bg-gray-100 rounded-full py-3 px-5 flex flex-row justify-evenly">
							<button>
								<Plus />
							</button>
							<div className="text-lg mx-6">1</div>
							<button>
								<Minus />
							</button>
						</div>

						<div className="ml-5">
							<div className="text-sm">Only 12 items left</div>
							<div className="text-sm">Don't miss it</div>
						</div>
					</div>

					<div className="flex flex-row mt-5">
						<button className="block text-white bg-blue-700 font-medium rounded-full text-lg px-9 py-3 text-center" type="button">
							Buy Now
						</button>
						<Link
							to="/cart/3434"
							className="block text-blue-700 border-2 border-blue-700 font-medium rounded-full text-xl px-9 py-3 text-center ml-4"
						>
							Add to Cart
						</Link>
					</div>
				</div>
			</div>

			<div className="mt-8 mb-5 text-3xl">Similar items</div>

			<ItemList />
		</>
	);
}
