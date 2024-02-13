import { View, Text } from "react-native";
import { CardProps } from "../../interfaces";
import { Dimensions, Image, StyleSheet } from "react-native";

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
          <Text style={{ color: "white", padding: 10 }}>
            {props.game.title}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
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
