import {
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { categories } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
      <View className="flex flex-row m-auto justify-center items-center bg-red-400 rounded-md w-fit">
        <TextInput
          value={inputText}
          onChangeText={handleOnChange}
          placeholder="Search category"
          style={styles.textInput}
          className="text-white"
        />
        <TouchableOpacity
          className="p-2 m-4 border rounded-md border-white"
          onPress={() => setInputText("")}
        >
          <FontAwesomeIcon icon={faX} color="white" size={8} />
        </TouchableOpacity>
      </View>
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
  textInput: {
    padding: 10,
    margin: "auto",
    //     backgroundColor: "#e75e5e",
    borderRadius: 10,
    marginBottom: 10,
    width: Dimensions.get("window").width / 2,
  },
});
