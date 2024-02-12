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
import { useState } from "react";

interface DetailedCardProps {
  game: DetailedGame;
}

export const DetailedCard = (props: DetailedCardProps) => {
  const [detailVisible, setDetailVisible] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          key={props.game.id}
          source={{ uri: props.game.thumbnail }}
          resizeMode="contain"
        />
        <Text style={{ color: "#f36e6e" }}>{props.game.title}</Text>
        <Text style={{ color: "#f36e6e", fontStyle: "italic" }}>
          {props.game.developer}
        </Text>
      </View>

      {!detailVisible ? (
        <Text onPress={() => setDetailVisible(true)}>
          {props.game.short_description + " ..."}
        </Text>
      ) : (
        <Text onPress={() => setDetailVisible(false)}>
          {props.game.description}
        </Text>
      )}
      <Text>Platform: {props.game.platform}</Text>
      <UrlButton url={props.game.game_url}>Go to website</UrlButton>
      <ScrollView horizontal={true}>
        {props.game.screenshots.map((link: { id: number; image: string }) => {
          return (
            <Image
              key={link.id}
              source={{ uri: link.image }}
              style={styles.img}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 4,
    borderRadius: 30,
    margin: 10,
    marginTop: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 5,
    paddingTop: 50,
    backgroundColor: "#410303",
    color: "#f36e6e",
    height: Dimensions.get("window").height,
  },
});
