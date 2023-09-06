import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function Layout() {
	return (
		<main className="min-h-screen bg-background flex flex-col items-center">
			<div className="w-full flex flex-col items-center">
				<Header />
				<div className="w-full max-w-4xl px-3">
					<Outlet />
				</div>
			</div>
		</main>
	);
}
