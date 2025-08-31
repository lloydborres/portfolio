import moment from "moment";
import type { Timestamp } from "firebase/firestore";
import { Skeleton, Typography } from "@mui/material";
import { Section } from "@components";
import { ExperiencesContainer } from "./Experience.styles";

type Props = {
  experiences?: {
    id: string;
    companyName?: string;
    positions: {
      title?: string;
      location?: string;
      description?: string;
      startDate?: Timestamp;
      endDate?: Timestamp;
    }[];
  }[];
};

const Component = ({ experiences }: Props) => {
  return (
    <Section header="Experience">
      <ExperiencesContainer>
        {experiences?.map((exp, expIdx) => (
          <div key={expIdx} className="experience-row-container">
            <div className="company-container">
              <Typography variant="h6">
                {exp.companyName ? exp.companyName : <Skeleton />}
              </Typography>
            </div>
            {exp.positions.map((pos, posIdx) => {
              const endDate = pos.endDate?.toDate() ?? new Date();
              const totalMonths = moment(endDate).diff(
                pos.startDate?.toDate(),
                "months"
              );
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
                      {pos.title ? pos.title : <Skeleton />}
                    </Typography>
                    <Typography variant="caption">
                      {pos.startDate ? (
                        `${moment(pos.startDate?.toDate()).format(
                          "MMM YYYY"
                        )} - ${
                          pos.endDate?.toDate()
                            ? moment(pos.endDate.toDate()).format("MMM YYYY")
                            : "Present"
                        } • ${yearsText} ${monthsText}`
                      ) : (
                        <Skeleton />
                      )}
                    </Typography>
                    <br />
                    <Typography variant="caption">
                      {pos.location ? pos.location : <Skeleton />}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="position-description"
                    >
                      {pos.description ? pos.description : <Skeleton />}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </ExperiencesContainer>
    </Section>
  );
};

export default Component;
