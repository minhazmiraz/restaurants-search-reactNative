import { useEffect } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import useRestaurant from "../hooks/useRestaurant";

const RestaurantScreen = ({ navigation }) => {
	const [{ data, loading, error }, searchRestaurant] = useRestaurant();
	const id = navigation.getParam("id");
	const { width } = Dimensions.get("window");

	useEffect(() => {
		searchRestaurant(id);
	}, []);

	if (loading) return <Text>Loading...</Text>;

	if (error) return <Text>{error}</Text>;

	return (
		<View>
			{data && (
				<FlatList
					data={data.photos}
					keyExtractor={(photo) => photo}
					renderItem={({ item }) => (
						<Image source={{ uri: item }} style={{ width, height: (width * 9) / 16 }} />
					)}
				/>
			)}
		</View>
	);
};

export default RestaurantScreen;
