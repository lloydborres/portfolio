import { useState } from 'react';
import { CardsContainer, Container } from './elements';
import { SkillCard, type SkillCardProps } from '../../molecules';
import { Typography } from '@mui/material';

type Props = {
  title: string;
  skillCards?: SkillCardProps[];
};

const Component = ({ title, skillCards }: Props) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const handleCardClick = (index: number) => () => {
    setExpandedItem(index);
  };

  return (
    <Container>
      <Typography variant='h5'>{title}</Typography>
      <CardsContainer>
        {skillCards?.map((card, index) => (
          <SkillCard
            key={index}
            expanded={expandedItem === index}
            onCardClick={handleCardClick(index)}
            {...card}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Component;
export type { Props };
