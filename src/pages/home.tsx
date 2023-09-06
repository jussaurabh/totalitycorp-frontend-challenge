import ItemList from "../components/item_list";
import bannerImg from "../assets/banner.png";

export default function HomePage() {
	return (
		<>
			<img src={bannerImg} className="w-full" />

			<div className="text-lg py-5">Best picks for you!</div>

			<ItemList />
		</>
	);
}
