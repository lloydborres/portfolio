import { useParams } from "react-router";
import { CommonLayout, ProjectDetailsHeader, Section } from "@components";
import useGetProjectDetailsById from "./api/useGetProjectDetailsById";
import { tagNameToTagPillProps } from "@utils";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  const { projectsDetailsQuery } = useGetProjectDetailsById(projectId);
  const { data: projectDetailsData, isPending: projectDetailsIsPending } =
    projectsDetailsQuery;

  return (
    <CommonLayout name="Test" appBarTitle="Projects" menuActiveItem="projects">
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
        <Section />
      ) : (
        projectDetailsData?.projectDetails?.map((projectDetail, idx) => (
          <Section
            key={idx}
            header={projectDetail.label}
            children={projectDetail.content}
          />
        ))
      )}
    </CommonLayout>
  );
};

export default ProjectDetailsPage;
