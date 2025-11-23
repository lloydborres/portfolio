import { Skeleton, Typography } from "@mui/material";
import { Button } from "@components";
import { Container } from "./ProjectDetailsHeader.styles";

type Props = {
  title?: string;
  description?: string;
  coverImg?: string;
  links?: {
    label: string;
    url?: string;
    isExternal?: boolean;
  }[];
  isLoading?: boolean;
};

const Component = ({
  title,
  description,
  coverImg,
  links,
  isLoading,
}: Props) => {
  return (
    <Container>
      {coverImg && <img alt={title} src={coverImg} />}
      <Typography variant="h2" className="project-title">
        {title ? title : <Skeleton />}
      </Typography>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" />
      ) : (
        <div>
          {links?.map((link, index) => (
            <Button key={index} href={link.isExternal ? link.url : undefined}>
              {link.label}
            </Button>
          ))}
        </div>
      )}
      <Typography variant="body1" className="project-description">
        {description ? description : <Skeleton />}
      </Typography>
    </Container>
  );
};

export default Component;
