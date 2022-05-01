import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import "react-native-gesture-handler";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Restaurant: RestaurantScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "Restaurant Search",
		},
	}
);

export default createAppContainer(navigator);
