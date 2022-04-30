import { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

const Restaurants = ({ term }) => {
	const [{ data, loading, error }, searchRestaurants] = useRestaurants();

	useEffect(() => {
		searchRestaurants(term);
	}, [term]);

	if (loading) return <ActivityIndicator size="large" marginVertical={30} color="#0000ff" />;

	if (error)
		return (
			<View style={styles.container}>
				<Text style={styles.header}>{error}</Text>
			</View>
		);

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Top Restaurants</Text>
			<FlatList
				data={data}
				keyExtractor={(restaurant) => restaurant.id}
				renderItem={({ item }) => <RestaurantItem restaurant={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 25,
		marginVertical: 15,
	},
	header: {
		fontWeight: "bold",
		fontSize: 20,
		paddingBottom: 10,
	},
});

export default Restaurants;
