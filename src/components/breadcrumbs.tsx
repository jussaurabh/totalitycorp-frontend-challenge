import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BreadCrumbs({ paths }: { paths: { href: string; name: string }[] }) {
	function generateBreadCrumbs() {
		const items: JSX.Element[] = [];

		paths.forEach((path, index) => {
			if (index === paths.length - 1) {
				items.push(
					<Link to={path.href} className="text-sm text-gray-500" key={path.href}>
						{path.name}
					</Link>
				);
			} else {
				items.push(
					...[
						<Link to={path.href} className="text-sm text-gray-500" key={path.href}>
							{path.name}
						</Link>,
						<ChevronRight size={15} className="mx-2 text-gray-500" key={index} />,
					]
				);
			}
		});

		return items;
	}

	return <div className="flex flex-row items-center mb-5">{generateBreadCrumbs()}</div>;
}
