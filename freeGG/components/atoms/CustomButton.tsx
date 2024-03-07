import { TouchableOpacity, Text } from "react-native";
import React, { useContext, useState } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { fetchSortedData } from "../../utils";
import { GameContext } from "../../context";

interface CustomButtonProps {
  icon: IconDefinition;
  filterName: "PC (Windows)" | "Web Browser" | "All";
}

export const CustomButton = (props: CustomButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const allGames = useContext(GameContext)?.gamesState!;
  const setAllGames = useContext(GameContext)?.setGamesState!;

  const resetGames = async () => {
    const data = await fetchSortedData("popularity");
    setAllGames(data);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        setIsFocused(!isFocused);
        console.log(allGames);
        isFocused
          ? resetGames()
          : props.filterName === "All"
            ? resetGames()
            : setAllGames(
                allGames.filter(
                  (element) => element.platform === props.filterName
                )
              );
      }}
      className={
        isFocused && props.filterName !== "All"
          ? "p-4 bg-gray-500 rounded-md rounded-1 m-8 justify-center items-center"
          : "p-4 bg-gray-100 rounded-md rounded-1 m-8 justify-center items-center"
      }
    >
      <FontAwesomeIcon
        icon={props.icon}
        color={isFocused && props.filterName !== "All" ? "white" : "black"}
      />
      <Text
        className={
          isFocused && props.filterName !== "All" ? "text-white" : "text-black"
        }
      >
        {props.filterName}
      </Text>
    </TouchableOpacity>
  );
};
