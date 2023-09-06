import { AvatarFallback } from "../components/ui/avatar";
import { AvatarImage } from "../components/ui/avatar";
import { Avatar } from "../components/ui/avatar";

export default function FavoritePage() {
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

					<div className="border rounded-md mb-5"></div>
				</div>
			</div>

			<div className="col-span-8 border-2 border-red-500">
				<div className="h-[400px] w-full bg-blue-900"></div>
			</div>
		</div>
	);
}
