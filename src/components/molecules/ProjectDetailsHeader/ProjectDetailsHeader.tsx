import { Skeleton, Stack, Typography } from "@mui/material";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import { Button, TagPill, type TagPillProps } from "@components";
import { Container } from "./ProjectDetailsHeader.styles";
import { buttonAction } from "@utils";

type Props = {
  title?: string;
  description?: string;
  coverImg?: string;
  links?: {
    label: string;
    url?: string;
    isExternal?: boolean;
  }[];
  tags?: TagPillProps[];
  isLoading?: boolean;
};

const Component = ({
  title,
  description,
  coverImg,
  links,
  tags = [],
  isLoading,
}: Props) => {
  return (
    <Container>
      {coverImg && (
        <img className="project-cover-img" alt={title} src={coverImg} />
      )}
      <section className="project-header-content">
        <Typography variant="h2" className="project-title">
          {title ? title : <Skeleton />}
        </Typography>
        {isLoading ? (
          <Skeleton variant="rectangular" width="100%" />
        ) : (
          links && (
            <Stack direction="row" gap="28px" flexWrap="wrap">
              {links?.map((link, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "contained" : "outlined"}
                  onClick={buttonAction({
                    url: link.url,
                    isExternal: link.isExternal,
                  })}
                  endIcon={link.isExternal && <OpenInNewIcon />}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          )
        )}
        <Typography variant="body1" className="project-description">
          {description ? description : <Skeleton />}
        </Typography>
        <Stack direction="row" gap="10px" flexWrap="wrap">
          {tags.map((tag) => (
            <TagPill key={tag.label} label={tag.label} imgSrc={tag.imgSrc} />
          ))}
        </Stack>
      </section>
    </Container>
  );
};

export default Component;
