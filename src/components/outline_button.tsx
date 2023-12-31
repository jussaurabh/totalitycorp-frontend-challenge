import { cn } from "../lib/utils";

export default function OutlineButton({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
	return (
		<button
			type="button"
			className={cn("text-blue-700 border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ", className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
