import { View, Text } from "react-native";
import { CardProps } from "../../types";
import { Dimensions, Image, StyleSheet } from "react-native";

export const Card = (props: CardProps) => {
  return (
    <View>
      {props.game && (
        <View key={props.game.id} style={styles.cardStyle}>
          <Image
            key={props.game.id}
            source={{ uri: props.game.thumbnail }}
            style={styles.imageStyle}
            // resizeMode="contain"
          />
          <Text style={{ color: "white", padding: 10 }}>
            {props.game.title + " " + props.game.genre}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: Dimensions.get("window").width / 2,
    height: 200,
    borderRadius: 20,
  },
  cardStyle: {
    margin: 20,
    padding: 20,
    backgroundColor: "#b23f3f",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
  },
});
