export default function OrdersPage() {
	return (
		<div className="p-4">
			<form className="mb-4">
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Mockups, Logos..."
					/>
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</div>
			</form>

			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
			<OrderItem />
		</div>
	);
}

function OrderItem() {
	return (
		<div className="border rounded-sm p-2 flex flex-row h-28 mb-2">
			<div className="w-20 h-full min-w-[80px] bg-gray-400"></div>

			<div className="mb-4 px-2">
				<div className="text-xl">Produtct name</div>
				<div className="text-base">$ 3434</div>

				<div className="text-xs text-gray-400 mt-2 line-clamp-2">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae doloremque veniam sit beatae magni alias nam, deleniti officiis perspiciatis
					veritatis, ea, doloribus iste quod quas consequatur ducimus minima ullam dolore.
				</div>
			</div>
		</div>
	);
}
