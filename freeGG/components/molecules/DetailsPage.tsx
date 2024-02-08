import { View, Text } from "react-native";
import { DetailedGame, Game } from "../../types";
import { useEffect, useState } from "react";
import { fetchDataFromSpecificGame } from "../../utils";

type DetailsPageProps = {
  route: any;
  navigation: any;
};

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

  return <View>{detailData && <Text>{detailData.description}</Text>}</View>;
};

export default DetailsPage;
