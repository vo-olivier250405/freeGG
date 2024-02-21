import { View, Text } from "react-native";
import { CardProps } from "../../interfaces";
import { Dimensions, Image, StyleSheet } from "react-native";
import { IconPlatform } from "./IconPlatform";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faComputer, faGlobe } from "@fortawesome/free-solid-svg-icons";

export const Card = (props: CardProps) => {
  return (
    <View style={props.isMiniCard ? null : styles.container}>
      {props.game && (
        <View
          key={props.game.id}
          style={props.isMiniCard ? styles.miniCardStyle : styles.cardStyle}
        >
          <Image
            key={props.game.id}
            source={{ uri: props.game.thumbnail }}
            style={
              props.isMiniCard ? styles.miniCardStyleImg : styles.imageStyle
            }
            // resizeMode="contain"
          />
          <View className="flex-row">
            <Text style={{ color: "white", padding: 10 }}>
              {props.game.title}
            </Text>
            <View className="m-auto">
              {props.game.platform === "PC (Windows)" ? (
                <FontAwesomeIcon icon={faComputer} color="white" />
              ) : (
                <FontAwesomeIcon icon={faGlobe} color="white" />
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: Dimensions.get("window").width / 1.2,
    height: 200,
    borderRadius: 20,
  },
  cardStyle: {
    width: Dimensions.get("window").width - 20,
    padding: 20,
    backgroundColor: "#b23f3f",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
  },
  miniCardStyleImg: {
    width: Dimensions.get("window").width / 4,
    height: 100,
    borderRadius: 20,
  },
  miniCardStyle: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 2.3,
    margin: 10,
    padding: 10,
    backgroundColor: "#b23f3f",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
  },
});
