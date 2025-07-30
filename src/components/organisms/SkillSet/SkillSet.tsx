import { CardsContainer, Container } from "./elements";
import { SkillCard, type SkillCardProps } from "../../molecules";
import { Typography } from "@mui/material";

type Props = {
  title: string;
  skillCards?: SkillCardProps[];
};

const Component = ({ title, skillCards }: Props) => {
  return (
    <Container>
      <Typography variant="h5">{title}</Typography>
      <CardsContainer $cols={5}>
        {skillCards?.map((card, index) => (
          <SkillCard key={index} {...card} />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Component;
export type { Props };
