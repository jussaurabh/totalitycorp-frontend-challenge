import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import CategoryProductsPage from "./pages/category_products";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import FavoritePage from "./pages/favorite";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:productId" element={<ProductPage />} />
					<Route path="/category/:categoryId" element={<CategoryProductsPage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/favorite" element={<FavoritePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
