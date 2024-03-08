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
          <Text style={{ color: "#0080F8" }}>{props.game.title}</Text>
          <Text style={{ color: "#0080F8", fontStyle: "italic" }}>
            {props.game.developer}
          </Text>
          <IconPlatform platform={props.game.platform} />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
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
        {props.game.minimum_system_requirements && (
          <View
            style={{
              margin: 50,
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ color: "white" }}>
              <Text style={styles.text}>OS: </Text>
              {props.game.minimum_system_requirements?.os}
            </Text>
            <Text style={{ color: "white" }}>
              <Text style={styles.text}>Processor: </Text>
              {props.game.minimum_system_requirements?.processor}
            </Text>
            <Text style={{ color: "white" }}>
              <Text style={styles.text}>Memory: </Text>
              {props.game.minimum_system_requirements?.memory}
            </Text>
            <Text style={{ color: "white" }}>
              <Text style={styles.text}>Graphics: </Text>
              {props.game.minimum_system_requirements?.graphics}
            </Text>
            <Text style={{ color: "white" }}>
              <Text style={styles.text}>Storage: </Text>
              {props.game.minimum_system_requirements?.storage}
            </Text>
          </View>
        )}
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
    marginBottom: Dimensions.get("window").height / 10,
    color: "#f36e6e",
    height: Dimensions.get("window").height,
  },
  description: {
    color: "black",
    fontStyle: "italic",
    backgroundColor: "#A0B4C7",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: "#0080F8",
  },
});
