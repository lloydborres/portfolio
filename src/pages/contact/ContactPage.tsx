import { Card, CardContent, Typography, Link } from "@mui/material";
import { Email as EmailIcon } from "@mui/icons-material";
import { CommonLayout, ContactForm } from "@components";
import type { ICreateMessageInput } from "@domain";
import {
  ContentContainer,
  ContactDetailsContainer,
} from "./ContactPage.styles";
import useGetContact from "./api/useGetContact";
import useCreateMessage from "./api/useCreateMessage";

const ContactPage = () => {
  const { userDetailsQuery } = useGetContact();
  const { data: userDetailsData, isPending: userDetailsIsPending } =
    userDetailsQuery;
  const {
    mutate: createMessageMutate,
    isPending: isCreateMessagePending,
    status: createMessageStatus,
  } = useCreateMessage();

  const handleMessageSubmitValid = (data: ICreateMessageInput) => {
    const { name, email, message } = data;
    createMessageMutate({ name, email, message });
  };

  return (
    <CommonLayout
      name={userDetailsData?.name}
      appBarTitle="Contact"
      pageLoaderProgress={userDetailsIsPending ? 0 : 100}
    >
      <ContentContainer>
        <Card variant="outlined">
          <CardContent>
            <ContactForm
              onSubmitValid={handleMessageSubmitValid}
              isSendLoading={isCreateMessagePending}
              sendStatus={createMessageStatus}
            />
            <ContactDetailsContainer>
              <Typography variant="body1" className="contact-details-message">
                Wanna work together?
                <br />
                Drop me a message or just say hey.
                <br />
                I'd love to hear from you.
              </Typography>
              {!!userDetailsData?.email && (
                <Typography className="contact-details-item">
                  <EmailIcon />
                  <Link href={`mailto:${userDetailsData?.email}`}>
                    {userDetailsData?.email}
                  </Link>
                </Typography>
              )}
            </ContactDetailsContainer>
          </CardContent>
        </Card>
      </ContentContainer>
    </CommonLayout>
  );
};

export default ContactPage;
