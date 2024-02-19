import React, { useState, useRef, useCallback } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import { PicturesCarouselProps } from "../../interfaces";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const PicturesCarousel = (props: PicturesCarouselProps) => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  indexRef.current = index;

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

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
      renderItem={({ item, index }) => (
        <View>
          <TouchableOpacity key={index} onPress={() => openModal(index)}>
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
          <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Image
                source={{ uri: props.data[selectedImageIndex].image }}
                style={styles.modalImage}
              />

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <FontAwesomeIcon icon={faX} color="white" size={8} />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
    />
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalImage: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 2,
    borderRadius: 15,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: "#b23f3f",
    borderRadius: 10,
  },
});
