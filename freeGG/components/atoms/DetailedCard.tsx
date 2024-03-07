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
import { PicturesCarousel } from "./PIcturesCarousel";
import { LinearGradient } from "expo-linear-gradient";

interface DetailedCardProps {
  game: DetailedGame;
}

export const DetailedCard = (props: DetailedCardProps) => {
  const [detailVisible, setDetailVisible] = useState(false);
  return (
    <LinearGradient
      colors={["#000000", "#151313", "#474646"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ margin: "auto" }}>
            <Text style={{ color: "white" }}>
              {"OS: " + props.game.minimum_system_requirements?.os}
            </Text>
            <Text style={{ color: "white" }}>
              {"Processor: " +
                props.game.minimum_system_requirements?.processor}
            </Text>
            <Text style={{ color: "white" }}>
              {"Memory: " + props.game.minimum_system_requirements?.memory}
            </Text>
            <Text style={{ color: "white" }}>
              {"Graphics: " + props.game.minimum_system_requirements?.graphics}
            </Text>
            <Text style={{ color: "white" }}>
              {"Storage: " + props.game.minimum_system_requirements?.storage}
            </Text>
          </View>
          {!detailVisible ? (
            <Text
              style={styles.description}
              onPress={() => setDetailVisible(true)}
            >
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
        </View>

        <PicturesCarousel data={props.game.screenshots} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 4.5,
    borderRadius: 10,
    margin: 10,
    marginTop: 10,
    borderColor: "#F83F3E",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 5,
    paddingTop: 50,
    color: "#f36e6e",
    height: Dimensions.get("window").height,
  },
  description: {
    color: "white",
    fontStyle: "italic",
    backgroundColor: "#F83F3E",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
