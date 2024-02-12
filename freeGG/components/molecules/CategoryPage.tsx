import { TouchableOpacity, Text, ScrollView } from "react-native";
import { categories } from "../../utils";

export const CategoryPage = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView>
      {categories &&
        categories.map((category: string, index: number) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                console.log(category);
                navigation.navigate("GamesSortedByCategory", {
                  category: category,
                });
              }}
              style={{
                padding: 10,
                margin: 10,
                backgroundColor: "grey",
                borderRadius: 10,
              }}
            >
              <Text>{category.toUpperCase()}</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};
