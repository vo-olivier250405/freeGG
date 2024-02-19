import React, { useState, useRef, useCallback } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { CarouselProps, PicturesCarouselProps } from "../../interfaces";
import { Card } from "./Card";

export const Carousel = (props: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(
    (event: {
      nativeEvent: {
        layoutMeasurement: { width: any };
        contentOffset: { x: number };
      };
    }) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      const distance = Math.abs(roundIndex - index);

      const isNoMansLand = 0.4 < distance;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    },
    []
  );

  return (
    <FlatList
      data={props.data}
      style={{ flex: 1 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={index}
          onPress={() => props.navigation.navigate("Details", { id: item.id })}
        >
          <Text>
            <Card game={item} key={index} isMiniCard={false} />
          </Text>
        </TouchableOpacity>
      )}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
    />
  );
};

export const PicturesCarousel = (props: PicturesCarouselProps) => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(
    (event: {
      nativeEvent: {
        layoutMeasurement: { width: any };
        contentOffset: { x: number };
      };
    }) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      const distance = Math.abs(roundIndex - index);

      const isNoMansLand = 0.4 < distance;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    },
    []
  );

  return (
    <FlatList
      data={props.data}
      style={{ flex: 1 }}
      renderItem={({ item }) => (
        <TouchableOpacity key={index}>
          <Image
            key={item.id}
            source={{ uri: item.image }}
            style={{
              width: Dimensions.get("window").width - 10,
              height: Dimensions.get("window").height / 4.5,
              borderRadius: 30,
              marginTop: 10,
              borderColor: "#b23f3f",
              borderWidth: 10,
            }}
          />
        </TouchableOpacity>
      )}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
    />
  );
};
