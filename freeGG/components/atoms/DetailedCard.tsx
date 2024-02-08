import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { DetailedGame } from "../../interfaces";
import { UrlButton } from "./UrlButton";

interface DetailedCardProps {
  game: DetailedGame;
}

export const DetailedCard = (props: DetailedCardProps) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>{props.game.title}</Text>
        <Image
          style={styles.img}
          key={props.game.id}
          source={{ uri: props.game.thumbnail }}
          resizeMode="contain"
        />
      </View>
      <Text>Developped by: {props.game.developer}</Text>
      <Text>{props.game.description}</Text>
      <Text>Platform: {props.game.platform}</Text>
      <UrlButton url={props.game.game_url}>Link to the game</UrlButton>
      <ScrollView horizontal={true}>
        {props.game.screenshots.map((link: { id: number; image: string }) => {
          return (
            <Image
              key={link.id}
              source={{ uri: link.image }}
              resizeMode="contain"
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get("window").width,
    height: 300,
    borderRadius: 30,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
