import { View, Text } from "react-native";
import { Game } from "../../types";

type DetailsPageProps = {
  route: any;
  navigation: any;
};

const DetailsPage = (props: DetailsPageProps) => {
  const { game }: { game: Game } = props.route.params;
  return (
    <View>
      <Text>{game.thumbnail}</Text>
    </View>
  );
};

export default DetailsPage;
