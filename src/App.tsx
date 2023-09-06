import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import CategoryProductsPage from "./pages/category_products";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import ProfilePage from "./pages/profile";
import FavoritePage from "./pages/favorite";
import AddressPage from "./pages/address";
import UserLayout from "./components/user_layout";
import OrdersPage from "./pages/orders";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:productId" element={<ProductPage />} />
					<Route path="/category/:categoryId" element={<CategoryProductsPage />} />
					<Route path="/user" element={<UserLayout />}>
						<Route path="/user/profile" element={<ProfilePage />} />
						<Route path="/user/address" element={<AddressPage />} />
						<Route path="/user/favorites" element={<FavoritePage />} />
						<Route path="/user/orders" element={<OrdersPage />} />
					</Route>
					<Route path="/cart" element={<CartPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
