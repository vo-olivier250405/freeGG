import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import { CustomSearchBarProps } from "../../interfaces";

export const CustomSearchBar = (props: CustomSearchBarProps) => {
  return (
    <View className="flex flex-row m-auto justify-center items-center bg-red-400 rounded-md w-fit">
      <TextInput
        value={props.inputText}
        onChangeText={props.handleOnChange}
        placeholder="Search game"
        style={styles.textInput}
        className="text-white"
      />
      <TouchableOpacity
        className="p-2 m-4 border rounded-md border-white"
        onPress={() => props.setInputText}
      >
        <FontAwesomeIcon icon={faX} color="white" size={8} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: "auto",
    //     backgroundColor: "#e75e5e",
    borderRadius: 10,
    marginBottom: 20,
    width: Dimensions.get("window").width / 2,
  },
});
