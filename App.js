import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import { categoryItemsData } from "./src/assets/data/categoryItemsData";
import Restaurants from "./src/components/Restaurants";

export default function App() {
	const [term, setTerm] = useState("burger");

	return (
		<View>
			<StatusBar />
			<Header />
			<Search setTerm={setTerm} />
			<Categories categories={categoryItemsData} term={term} setTerm={setTerm} />
			<Restaurants term={term} />
		</View>
	);
}
