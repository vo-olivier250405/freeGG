import {
  IconDefinition,
  faComputer,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";

export const IconPlatform = ({
  platform,
}: {
  platform: "Windows" | "Web Browser";
}) => {
  let iconName: IconDefinition = faGlobe;
  if (platform === "Windows") {
    iconName = faComputer;
  }
  return (
    <View
      style={{
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faGlobe} color="white" />
      <Text style={{ color: "white" }}>{platform}</Text>
    </View>
  );
};
