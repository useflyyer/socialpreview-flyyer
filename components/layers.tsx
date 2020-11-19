import styled from "styled-components";

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
