import { View } from "react-native";
import { CardProps } from "../../types";
import { Dimensions, Image, StyleSheet } from "react-native";

export const Card = (props: CardProps) => {
  return (
    <View>
      {props.game && (
        <View key={props.game.id}>
          <Image
            key={props.game.id}
            source={{ uri: props.game.thumbnail }}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: Dimensions.get("window").width,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
});
