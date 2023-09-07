import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function UserProfileTag({ avatarUrl, fullName }: { avatarUrl: string; fullName: string }) {
	return (
		<div className="border rounded-md p-4 flex flex-wrap mb-5 bg-white">
			<Avatar>
				<AvatarImage src={avatarUrl} alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>

			<div className="ml-4">
				<div className="text-xs text-gray-400">Hello,</div>
				<div className="font-bold text-xl">{fullName}</div>
			</div>
		</div>
	);
}
