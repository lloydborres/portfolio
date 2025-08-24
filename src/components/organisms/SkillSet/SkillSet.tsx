import { Section, SkillCard } from "@components";
import type { ISkillSetSkill } from "@domain";
import { CardsContainer } from "./SkillSet.styles";

type Props = {
  title?: string;
  skillCards?: ISkillSetSkill[];
};

const Component = ({ title, skillCards }: Props) => {
  return (
    <Section header={title}>
      <CardsContainer>
        {skillCards?.map((card, index) => (
          <SkillCard key={index} {...card} />
        ))}
      </CardsContainer>
    </Section>
  );
};

export default Component;
export type { Props };
