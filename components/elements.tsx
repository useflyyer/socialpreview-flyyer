import styled from "styled-components";

export const Title = styled.h1<{ simplify: boolean }>`
  margin: 0;
  color: ${(props) => (props.simplify ? "#303030" : "#ffffff")};
  font-family: "IBM Plex Sans";
  font-size: 6.5rem;
  letter-spacing: 5px;
`;
Title.defaultProps = {
  simplify: false,
};

export const Description = styled.h2<{ simplify: boolean }>`
  margin: 0;
  color: ${(props) => (props.simplify ? "#303030" : "#ffffff")};
  font-family: "Montserrat Regular";
  font-size: 2rem;
  letter-spacing: 3px;
  text-align: center;
  padding: 0 10rem;
`;

export const Footer = styled.h2<{ simplify: boolean }>`
  margin: 0;
  color: ${(props) => (props.simplify ? "#303030" : "#ffffff")};
  font-family: "IBM Plex Sans";
  font-size: 2.2rem;
  letter-spacing: 2px;
  text-align: center;
  padding: 0 0.5rem;
  font-weight: 700;
`;

export const Logo = styled.h2`
  color: #4346de;
  margin: 0;
  font-family: "IBM Plex Sans";
  font-size: 2rem;
  font-weight: 700;
  background-color: white;
  padding: 0px 8px;
  border-radius: 5px;
`;
