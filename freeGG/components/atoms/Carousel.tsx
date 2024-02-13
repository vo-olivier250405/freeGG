import React, { useState, useRef, useCallback, useEffect } from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { CarouselProps } from "../../interfaces";
import { Card } from ".";

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
      data={props.allGames}
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
