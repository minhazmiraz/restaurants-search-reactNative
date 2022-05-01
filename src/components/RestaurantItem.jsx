import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import { elevation } from "../common/styles";
import { FontAwesome } from "@expo/vector-icons";

const RestaurantItem = ({ restaurant, navigation }) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}>
			<View style={[styles.container, styles.elevation]}>
				<Image style={styles.image} source={{ uri: restaurant.image_url }} />
				<View style={styles.infoContainer}>
					<Text style={styles.header}>{restaurant.name}</Text>
					<View style={styles.info}>
						<View style={styles.rating}>
							<Text style={{ marginRight: 5 }}>{restaurant.rating}</Text>
							<FontAwesome name="star" size={10} />
						</View>
						<Text style={styles.price}>{restaurant.price}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	elevation,
	container: {
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "stretch",
		backgroundColor: "white",
		borderRadius: 50,
		height: 100,
	},
	image: {
		width: 75,
		height: 75,
		borderRadius: 50,
		marginLeft: 10,
	},
	infoContainer: {
		flex: 1,
		paddingHorizontal: 10,
	},
	header: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5,
	},
	info: {
		flexDirection: "row",
	},
	rating: {
		flexDirection: "row",
		marginRight: 20,
	},
	price: {
		flexDirection: "row",
		color: "orange",
	},
});

export default withNavigation(RestaurantItem);
