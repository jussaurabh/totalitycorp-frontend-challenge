import { cn } from "../lib/utils";

export default function SolidButton({ children, className }: { children: React.ReactNode; className?: string }) {
	return (
		<button type="button" className={cn("text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ", className)}>
			{children}
		</button>
	);
}
