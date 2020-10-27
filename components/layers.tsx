import styled from "styled-components";

export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Background = styled(Layer)<{ color: string }>`
  background-color: ${(props) => props.color};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:before,
  &:after {
    content: " ";
    display: table;
  }
`;

export const Fade = styled(Layer)`
  background: #7325b7; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #3900ac, #7325b7); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #3900ac,
    #7325b7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Content = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconsTop = styled(Layer)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 7rem 10rem;
`;

export const IconsBottom = styled(Layer)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 7rem 10rem;
`;

export const HeaderStart = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2em 2em;
`;

export const HeaderEnd = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1.5em 4em;
`;

export const HeaderCenter = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2em 0;
`;

export const FooterCenter = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2em 0;
`;
