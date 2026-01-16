import { useState } from "react";
import { Skeleton } from "@mui/material";
import type { IProjectGalleryItem } from "@domain";
import { Previewer } from "@components";
import { Container } from "./ProjectDetailsGallery.styles";

type Props = {
  projectTitle?: string;
  coverImg?: string;
  items?: IProjectGalleryItem[];
  isLoading?: boolean;
};

const Component = ({
  projectTitle,
  coverImg,
  items,
  isLoading = false,
}: Props) => {
  const [previewItem, setPreviewItem] = useState<IProjectGalleryItem | null>(
    null,
  );

  const handleClickItem = (item: IProjectGalleryItem) => () => {
    setPreviewItem(item);
  };

  const handleClosePreview = () => {
    setPreviewItem(null);
  };

  return (
    <>
      <Container direction="row">
        {isLoading ? (
          <>
            {Array.from({ length: 3 }, (_, index) => (
              <Skeleton key={index} variant="rectangular">
                <img />
              </Skeleton>
            ))}
          </>
        ) : (
          <>
            {projectTitle && coverImg && (
              <img
                alt={projectTitle}
                src={coverImg}
                className="project-gallery-cover"
                onClick={handleClickItem({
                  label: projectTitle,
                  src: coverImg,
                  type: "image",
                })}
              />
            )}
            {items?.map((item) => (
              <img
                key={item.label}
                alt={item.label}
                src={item.src}
                onClick={handleClickItem(item)}
              />
            ))}
          </>
        )}
      </Container>
      <Previewer open={!!previewItem} onClose={handleClosePreview}>
        <img alt={previewItem?.label} src={previewItem?.src} />
      </Previewer>
    </>
  );
};

export default Component;
