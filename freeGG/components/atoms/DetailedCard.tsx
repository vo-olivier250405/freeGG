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
import { IconPlatform } from "./IconPlatform";

interface DetailedCardProps {
  game: DetailedGame;
}

export const DetailedCard = (props: DetailedCardProps) => {
  const [detailVisible, setDetailVisible] = useState(false);
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
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
        <IconPlatform platform={props.game.platform} />
      </View>

      {!detailVisible ? (
        <Text style={styles.description} onPress={() => setDetailVisible(true)}>
          {props.game.short_description + ".. + Read more"}
        </Text>
      ) : (
        <Text
          style={styles.description}
          onPress={() => setDetailVisible(false)}
        >
          {props.game.description}
        </Text>
      )}

      <UrlButton url={props.game.game_url}>Go to website</UrlButton>

      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
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
    height: Dimensions.get("window").height / 4.5,
    borderRadius: 30,
    margin: 10,
    marginTop: 10,
    borderColor: "#b23f3f",
    borderWidth: 10,
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
  description: {
    color: "white",
    fontStyle: "italic",
    backgroundColor: "#b23f3f",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
