import { Image, StyleSheet, Text, View } from "react-native";
import { elevation } from "../common/styles";

const RestaurantItem = ({ restaurant }) => {
	return (
		<View style={[styles.container, styles.elevation]}>
			<Image style={styles.image} source={{ uri: restaurant.image_url }} />
			<View style={styles.infoContainer}>
				<Text style={styles.header}>{restaurant.name}</Text>
				<View style={styles.info}>
					<Text style={styles.rating}>{restaurant.rating}</Text>
					<Text style={styles.price}>{restaurant.price}</Text>
				</View>
			</View>
		</View>
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
		marginRight: 20,
	},
	price: {
		color: "orange",
	},
});

export default RestaurantItem;
