import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 8px;
  border: 1px solid ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 1024px;
  width: 100%;
  margin: 5% auto;
`;
