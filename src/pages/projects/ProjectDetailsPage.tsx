import { useParams } from "react-router";
import {
  CommonLayout,
  ProjectDetailsGallery,
  ProjectDetailsHeader,
  Section,
} from "@components";
import useGetProjectDetailsById from "./api/useGetProjectDetailsById";
import { tagNameToTagPillProps } from "@utils";

const ALLOWED_FULLSCREEN_TYPES = ["pico-8-embed"];

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const { portfolioDetailsQuery, projectsDetailsQuery } =
    useGetProjectDetailsById(projectId);
  const { data: portfolioDetailsData } = portfolioDetailsQuery;
  const { data: projectDetailsData, isPending: projectDetailsIsPending } =
    projectsDetailsQuery;

  return (
    <CommonLayout
      name={portfolioDetailsData?.name}
      appBarTitle="Projects"
      menuActiveItem="projects"
    >
      <ProjectDetailsHeader
        title={projectDetailsData?.title}
        description={projectDetailsData?.description}
        coverImg={projectDetailsData?.coverImg}
        links={projectDetailsData?.links}
        tags={projectDetailsData?.tags?.map((tag) =>
          tagNameToTagPillProps(tag),
        )}
        isLoading={projectDetailsIsPending}
      />
      {projectDetailsIsPending ? (
        <>
          <ProjectDetailsGallery isLoading />
          <Section />
        </>
      ) : (
        projectDetailsData?.projectDetails?.map((projectDetail, idx) => {
          switch (projectDetail.type) {
            case "gallery": {
              return (
                <ProjectDetailsGallery
                  projectTitle={projectDetailsData.title}
                  coverImg={projectDetailsData.coverImg}
                  items={projectDetail.items}
                />
              );
            }
            case "detail": {
              return (
                <Section
                  key={idx}
                  header={projectDetail.label}
                  children={projectDetail.content}
                />
              );
            }
            case "iframe": {
              return (
                <Section key={idx} header={projectDetail.label}>
                  <iframe
                    className={projectDetail.contentType}
                    src={projectDetail.src}
                    allowFullScreen={ALLOWED_FULLSCREEN_TYPES.includes(
                      projectDetail.contentType ?? "",
                    )}
                  ></iframe>
                </Section>
              );
            }
          }
        })
      )}
    </CommonLayout>
  );
};

export default ProjectDetailsPage;
