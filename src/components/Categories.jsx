import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

const Categories = ({ categories, term, setTerm }) => {
	console.log("categories; ", categories);
	return (
		<View>
			<FlatList
				data={categories}
				renderItem={({ item, index }) => (
					<CategoryItem
						name={item.name}
						imageUrl={item.imageUrl}
						index={index}
						active={item.name.toLowerCase() === term.toLowerCase()}
						handlePress={() => setTerm(item.name)}
					/>
				)}
				keyExtractor={(category) => category.name}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default Categories;
