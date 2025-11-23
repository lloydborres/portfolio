import { useParams } from "react-router";
import { CommonLayout } from "@components";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();

  return (
    <CommonLayout name="Test" appBarTitle="Projects" menuActiveItem="projects">
      Project ID: {projectId}
    </CommonLayout>
  );
};

export default ProjectDetailsPage;
