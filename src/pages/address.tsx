import { MoreVertical, Plus } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";

export default function AddressPage() {
  const [isAddressFormVisible, setAddAddressFormVisible] = useState(false)

  const updateAddressFormVisibility = (value: boolean) => setAddAddressFormVisible(value)

	return (
		<div className="p-4">
			<div className="text-xl">Manage Address</div>

			{!isAddressFormVisible && (
        <button className="border rounded-md p-3 w-full flex flex-row justify-start items-center my-4" onClick={() => setAddAddressFormVisible(true)}>
				<Plus size={20} className="text-blue-400" />
				<span className="text-xl text-blue-400 ml-4">Add a new address</span>
			</button>
      )}

			{isAddressFormVisible && <AddressForm updateAddressFormVisibility={updateAddressFormVisibility} />}

			<div className="border rounded-md">
				<AddressItem />
			</div>
		</div>
	);
}

function AddressForm({updateAddressFormVisibility}: {updateAddressFormVisibility: (value: boolean) => void}) {
	return (
		<div className="p-4 border rounded-sm mb-5">
			<form>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
					<input
						type="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
						placeholder="john.doe@company.com"
					/>
				</div>
				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
					<input
						type="phone"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
						placeholder="phone"
					/>
				</div>

				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
					<input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="2323" />
				</div>

				<div className="mb-6">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address (Area and Street)</label>
					<input
						type="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
						placeholder="Address"
					/>
				</div>

				<div className="mt-3">
					<div className="text-sm text-gray-400 mb-2">Addres type</div>
					<div className="flex flex-wrap">
						<RadioGroup defaultValue="home">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="home" id="r1" />
								<Label htmlFor="r1">Home</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="work" id="r2" />
								<Label htmlFor="r2">Work</Label>
							</div>
						</RadioGroup>
					</div>
				</div>

				<div className="flex flex-wrap mt-4">
					<button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
						Save
					</button>
					<button type="button" className="text-blue-700 border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4" onClick={() => updateAddressFormVisibility(false)}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

function AddressItem() {
	return (
		<div className="p-2">
			<div className="flex flex-wrap justify-between items-center">
				<Badge>Home</Badge>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<MoreVertical size={20} />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuItem>Edit</DropdownMenuItem>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="flex flex-row justify-start items-center mt-2">
				<div className="font-bold text-base">Saurabh pawar</div>
				<Separator orientation="vertical" color="blue" className="mx-2" />
				<div className="text-base">98774232323</div>
			</div>

			<div className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis explicabo, odit</div>
			<div className="text-sm font-bold">98098-0</div>
		</div>
	);
}
