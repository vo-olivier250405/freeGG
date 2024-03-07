import { View } from "react-native";
import { DetailedGame } from "../../interfaces";
import { useEffect, useState } from "react";
import { fetchDataFromSpecificGame } from "../../utils";
import { DetailedCard } from "../atoms/DetailedCard";
import { LinearGradient } from "expo-linear-gradient";

interface DetailsPageProps {
  route: any;
  navigation: any;
}

const DetailsPage = (props: DetailsPageProps) => {
  const { id }: { id: number } = props.route.params;

  const [detailData, setDetailData] = useState<DetailedGame>();

  useEffect(() => {
    fetchDataFromSpecificGame(id).then((data) => {
      return setDetailData(data);
    });
  }, []);

  return (
    <LinearGradient
      colors={["#000000", "#151313", "#474646"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>{detailData && <DetailedCard game={detailData} />}</View>
    </LinearGradient>
  );
};

export default DetailsPage;
