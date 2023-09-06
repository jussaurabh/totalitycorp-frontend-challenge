import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import logo from "../assets/logo.svg";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";
import AuthDialog from "./auth_dialog";

export default function Header() {
	return (
		<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
			<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
				<div className="flex flex-row gap-3">
					<img src={logo} alt="Dmart logo" className="h-11" />
					<div className="flex flex-row items-center gap-1">
						<Input placeholder="Type: 'Shoes'" />
					</div>

					<div className="flex flex-row items-center gap-3">
						<Link to="/">Home</Link>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div className="cursor-pointer">Categories</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<Link to="/category/223">Electronics</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link to="/category/45">Mens Clothing</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Link to="/category/2213">Womens clothing</Link>
									</DropdownMenuItem>
								</DropdownMenuGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				<div className="flex flex-row gap-3 items-center">
					<Link to="/cart/23">
						<div className="relative">
							<ShoppingCart size={25} />
							<div className="bg-blue-600 rounded-full absolute top-[-5px] right-[-5px] text-white px-1">8</div>
						</div>
					</Link>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Favorites</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="flex flex-row gap-3">
					<AuthDialog />
					<AuthDialog isLoginMode={false} />
				</div>
			</div>
		</nav>
	);
}
