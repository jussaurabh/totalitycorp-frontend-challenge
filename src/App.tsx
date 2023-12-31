import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home";
import CategoryProductsPage from "./pages/category_products";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import ProfilePage from "./pages/profile";
import AddressPage from "./pages/address";
import UserLayout from "./components/user_layout";
import OrdersPage from "./pages/orders";
import SellerLayout from "./components/seller_layout";
import { AuthProvider } from "./hooks/auth";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" index element={<HomePage />} />
						<Route path="/product/:productId" element={<ProductPage />} />
						<Route path="/category/:categoryId" element={<CategoryProductsPage />} />
						<Route path="/user" element={<UserLayout />}>
							<Route path="/user/profile" index element={<ProfilePage />} />
							<Route path="/user/address" element={<AddressPage />} />
							<Route path="/user/favorites" element={<OrdersPage />} />
							<Route path="/user/orders" element={<OrdersPage />} />
						</Route>
						<Route path="/cart" element={<CartPage />} />
						<Route path="/seller" element={<SellerLayout />}>
							<Route path="/seller/profile" index element={<ProfilePage />} />
							<Route path="/seller/address" element={<AddressPage />} />
						</Route>
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
