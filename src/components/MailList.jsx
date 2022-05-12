import styled from "styled-components";

const Mail = styled.div`
  width: 100%;
  margin-top: 3.125rem;
  background-color: #003590;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 3.125rem;
`;
const MailTitle = styled.h1``;
const MailDescription = styled.span``;
const MailInputContainer = styled.div``;
const MailInput = styled.input`
  width: 18.75rem;
  height: 1.875rem;
  padding: 0.625rem;
  margin-right: 0.625rem;
  border: none;
  border-radius: 0.3125rem;
`;
const SubscribeButton = styled.button`
  height: 3.125rem;
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
`;

const MailList = () => {
  return (
    <>
      <Mail>
        <MailTitle>Save time, save money!</MailTitle>
        <MailDescription>
          Sign up and we'll send the best deals to you
        </MailDescription>
        <MailInputContainer>
          <MailInput type="text" placeholder="Your Email" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </MailInputContainer>
      </Mail>
    </>
  );
};

export default MailList;
