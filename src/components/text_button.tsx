import { cn } from "../lib/utils";

export default function TextButton({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
	return (
		<button type="button" onClick={onClick} className={cn("text-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ", className)}>
			{children}
		</button>
	);
}
