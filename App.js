import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
	return (
		<View>
			<StatusBar />
			<Header />
			<Search />
			<CategoryItem />
			<CategoryItem />
			<CategoryItem />
			<CategoryItem />
		</View>
	);
}
