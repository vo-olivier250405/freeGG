import React, { useCallback } from "react";
import { Alert, Button, Linking, Text, TouchableOpacity } from "react-native";

interface OpenURLButtonProps {
  url: string;
  children: string;
}

export const UrlButton = (props: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(props.url);

    if (supported) {
      await Linking.openURL(props.url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${props.url}`);
    }
  }, [props.url]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        padding: 15,
        backgroundColor: "red",
        width: props.children.length * 8,
        borderRadius: 10,
      }}
    >
      <Text>{props.children}</Text>
    </TouchableOpacity>
  );
};
