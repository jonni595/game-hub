import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore: React.FC<Props> = ({ score }) => {
  return (
    <Badge
      fontSize={14}
      paddingX={2}
      borderRadius={4}
      colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
