import styled from "styled-components";

export const Title = styled.h1<{ simplify: boolean | null; colored: boolean | null; color?: string | null }>`
  margin: 0;
  color: ${(props) => (props.simplify ? "#303030" : props.colored ? props.color : "#ffffff")};
  -webkit-text-stroke: ${(props) => (props.colored ? "1px white" : "unset")};
  font-family: "IBM Plex Sans";
  font-size: 6.5rem;
  letter-spacing: 8px;
  margin-top: -15px;
`;
Title.defaultProps = {
  simplify: false,
  color: "black",
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

export const SocialIcon = styled.img.attrs<{
  src: string;
  fit?: "medium" | "small" | null;
  background?: string | null;
  simplify?: boolean | null;
}>((props) => ({
  src: props.src,
}))<{ src: string; fit?: "medium" | "small" | null; background?: string | null; simplify?: boolean | null }>`
  width: ${(props) => (props.fit ? (props.fit === "medium" ? "2.5rem" : "3rem") : "4rem")};
  height: auto;
  margin: 0rem 1rem;
  border-radius: 1rem;
  border: ${(props) => (props.simplify ? "solid 0.5px lightgray" : "")};
  background-color: ${(props) => props.background ?? "unset"};
  padding: ${(props) => (props.fit ? (props.fit === "medium" ? "0.75rem" : "0.5rem") : "0rem")};
`;
