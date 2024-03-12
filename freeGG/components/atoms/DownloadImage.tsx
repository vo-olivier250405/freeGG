import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function DownloadImage({
  imageUrl,
}: {
  imageUrl: { uri: string };
}) {
  const handleDownload = async () => {
    let fileUri = FileSystem.documentDirectory + `.jpg`;
    console.log("Je suis la");

    try {
      const res = await FileSystem.downloadAsync(imageUrl.uri, fileUri);
      saveFile(res.uri);
      console.log("Je passe par l");
    } catch (err) {
      console.log("FS Err: ", err);
    }
  };

  const saveFile = async (fileUri: string) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      try {
        const asset = await MediaLibrary.createAssetAsync(fileUri);
        const album = await MediaLibrary.getAlbumAsync("Download");
        if (album == null) {
          await MediaLibrary.createAlbumAsync("Download", asset, false);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
        }
      } catch (err) {
        console.log("Save err: ", err);
      }
    } else if (status === "denied") {
      alert("please allow permissions to download");
    }
  };

  return (
    <View
      style={{
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={{ uri: imageUrl.uri }} style={styles.modalImage} />
      <LinearGradient
        colors={["#084279", "#0080F8", "#4CA4F6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={{ margin: 20 }} onPress={handleDownload}>
          <Text style={{ color: "white" }}>Download Image</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  modalImage: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 2,
    borderRadius: 15,
  },
});
