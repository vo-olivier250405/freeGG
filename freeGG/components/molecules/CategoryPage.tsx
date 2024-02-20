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
    <ScrollView style={styles.container}>
      <CustomSearchBar
        handleOnChange={handleOnChange}
        inputText={inputText}
        setInputText={() => setInputText("")}
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
