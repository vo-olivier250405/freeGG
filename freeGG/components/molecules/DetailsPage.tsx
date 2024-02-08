import { View, Text, ScrollView } from "react-native";
import { DetailedGame, Game } from "../../interfaces";
import { useEffect, useState } from "react";
import { fetchDataFromSpecificGame } from "../../utils";
import { DetailedCard } from "../atoms/DetailedCard";

interface DetailsPageProps {
  route: any;
  navigation: any;
}

const DetailsPage = (props: DetailsPageProps) => {
  const { id }: { id: number } = props.route.params;

  const [detailData, setDetailData] = useState<DetailedGame>();

  useEffect(() => {
    fetchDataFromSpecificGame(id).then((data) => {
      // console.log(detailData);
      console.log(data);
      console.log("azerty");

      return setDetailData(data);
    });
  }, []);

  return <View>{detailData && <DetailedCard game={detailData} />}</View>;
};

export default DetailsPage;
