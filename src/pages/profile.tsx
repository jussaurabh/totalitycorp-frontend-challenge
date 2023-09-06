import { useState } from "react";

export default function ProfilePage() {
	const [isEditMode, setEditMode] = useState(false);

	return (
		<div className="p-4">
			<div className="flex flex-row justify-between mb-5">
				<div className="text-xl">Personal Information</div>
				{isEditMode ? (
					<button className="text-blue-400 space-x-4" onClick={() => setEditMode(false)}>
						Cancel
					</button>
				) : (
					<button className="text-blue-400 space-x-4" onClick={() => setEditMode(true)}>
						Edit
					</button>
				)}
			</div>

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
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
					<input
						type="email"
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

				{isEditMode && (
					<button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
						Save
					</button>
				)}
			</form>
		</div>
	);
}
