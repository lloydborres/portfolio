import { Typography } from "@mui/material";
import { SkillCard } from "@components";
import type { ISkillSetSkill } from "@domain";
import { CardsContainer, Container } from "./SkillSet.styles";

type Props = {
  title: string;
  skillCards?: ISkillSetSkill[];
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
