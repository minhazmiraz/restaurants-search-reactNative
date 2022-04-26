import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
	return (
		<View>
			<StatusBar />
			<Header />
			<Search />
		</View>
	);
}
