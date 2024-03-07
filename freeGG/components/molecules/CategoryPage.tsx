import {
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { categories } from "../../utils";
import { CustomSearchBar } from "../atoms";
import { LinearGradient } from "expo-linear-gradient";

export const CategoryPage = ({ navigation }: { navigation: any }) => {
  const [inputText, setInputText] = useState("");
  const handleOnChange = (text: string) => {
    setInputText(text);
  };

  let temp: string[] = Array.from(categories);
  inputText
    ? (temp = categories.filter((element: string) => {
        return element.toUpperCase().includes(inputText.toUpperCase());
      }))
    : (temp = Array.from(categories));

  return (
    <LinearGradient
      colors={["#000000", "#151313", "#474646"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ScrollView style={styles.container}>
        <CustomSearchBar
          handleOnChange={handleOnChange}
          inputText={inputText}
          setInputText={setInputText}
          placeholder="Search category"
        />

        {temp &&
          temp.map((category: string, index: number) => {
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  textStyle: {
    padding: 10,
    margin: 10,
    backgroundColor: "#474646",
    borderRadius: 10,
  },
});
