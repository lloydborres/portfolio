import { Typography } from "@mui/material";
import moment from "moment";
import { Container, ExperiencesContainer } from "./elements";

type ExperienceHistory = {
  companyName: string;
  positions: {
    title: string;
    startDate: Date;
    endDate?: Date;
    location: string;
    description: string;
  }[];
};

type Props = {
  experiences?: ExperienceHistory[];
};

const Component = ({ experiences }: Props) => {
  return (
    <Container>
      <Typography variant="h5">Experience</Typography>
      <ExperiencesContainer>
        {experiences?.map((exp, expIdx) => (
          <div key={expIdx} className="experience-row-container">
            <div className="company-container">
              <Typography variant="h6">{exp.companyName}</Typography>
            </div>
            {exp.positions.map((pos, posIdx) => {
              const endDate = pos.endDate ?? new Date();
              const totalMonths = moment(endDate).diff(pos.startDate, "months");
              const years = Math.floor(totalMonths / 12);
              const months = totalMonths % 12;
              const yearsText = years ? `${years} yrs` : "";
              const monthsText = months ? `${months} mos` : "";

              return (
                <div
                  key={`${expIdx}-${posIdx}`}
                  className="position-row-container"
                >
                  <div className="position-line-container"></div>
                  <div className="position-container">
                    <Typography variant="body1" className="position-title">
                      {pos.title}
                    </Typography>
                    <Typography variant="caption">{`${moment(
                      pos.startDate
                    ).format("MMM YYYY")} - ${
                      pos.endDate
                        ? moment(pos.endDate).format("MMM YYYY")
                        : "Present"
                    } • ${yearsText} ${monthsText}`}</Typography>
                    <br />
                    <Typography variant="caption">{pos.location}</Typography>
                    <Typography
                      variant="body1"
                      className="position-description"
                    >
                      {pos.description}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </ExperiencesContainer>
    </Container>
  );
};

export default Component;
export type { Props };
