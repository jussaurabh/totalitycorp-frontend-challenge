import { X } from "lucide-react";
import { useState } from "react";
import Spinner from "./ui/spinner";

export default function AuthDialog({ isLoginMode = true }: { isLoginMode?: boolean }) {
	const [isVisible, setVisible] = useState(false);
	return (
		<div>
			<button
				className="block text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				type="button"
				onClick={() => setVisible(true)}
			>
				{isLoginMode ? "Login" : "Sign Up"}
			</button>

			{isVisible && (
				<div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full backdrop-blur-sm">
					<div className="absolute w-full max-w-2xl max-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<div className="relative bg-white rounded-lg shadow ">
							<div className="flex items-start justify-between p-4 border-b rounded-t ">
								<h3 className="text-xl font-semibold text-gray-900 ">{isLoginMode ? "Login" : "Sign Up"}</h3>

								<button
									onClick={() => setVisible(false)}
									type="button"
									className="text-gray-600 bg-gray-100  font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center mr-2"
								>
									<X size={15} />
								</button>
							</div>

							<div className="p-6 space-y-6">
								{isLoginMode ? (
									<form>
										<div className="mb-6">
											<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email or Username</label>
											<input
												type="email"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
												placeholder="john.doe@company.com"
											/>
										</div>
										<div className="mb-6">
											<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
											<input
												type="password"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
												placeholder="•••••••••"
											/>
										</div>
									</form>
								) : (
									<form>
										<div className="mb-6">
											<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
											<input
												type="email"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
												placeholder="john.doe@company.com"
											/>
										</div>
										<div className="mb-6">
											<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
											<input
												type="password"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="•••••••••"
											/>
										</div>
										<div className="mb-6">
											<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
											<input
												type="text"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="1234567890"
											/>
										</div>
									</form>
								)}
							</div>

							<div className="flex items-center p-6 space-x-2 rounded-b justify-end">
								<FormButton name={isLoginMode ? "Login" : "Sign Up"} />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function FormButton({ name }: { name: string }) {
	return (
		<>
			<button type="button" className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
				{name}
			</button>
			<button type="button" disabled className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
				<Spinner />
			</button>
		</>
	);
}
