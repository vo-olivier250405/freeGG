import { TouchableOpacity, Text, ScrollView, StyleSheet } from "react-native";
import { categories } from "../../utils";

export const CategoryPage = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView style={styles.container}>
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
              style={styles.textStyle}
            >
              <Text style={{ color: "white" }}>{category.toUpperCase()}</Text>
            </TouchableOpacity>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#410303",
    padding: 50,
  },
  textStyle: {
    padding: 10,
    margin: 10,
    backgroundColor: "#f36e6e",
    borderRadius: 10,
  },
});
