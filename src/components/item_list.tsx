import ItemCard from "./item_card";

export default function ItemList() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<ItemCard description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam ex animi dolorum, debitis voluptate? Rerum nesciunt adipisci ab, doloremque atque eligendi placeat labore modi cupiditate iste, magni rem est." />
		</div>
	);
}
