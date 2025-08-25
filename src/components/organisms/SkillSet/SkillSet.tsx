import { Section, SkillCard, type SkillCardProps } from "@components";
import { CardsContainer } from "./SkillSet.styles";

type Props = {
  title?: string;
  skillCards?: SkillCardProps[];
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
