import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import { categoryItemsData } from "../assets/data/categoryItemsData";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import Search from "../components/Search";

const HomeScreen = () => {
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
};

export default HomeScreen;
