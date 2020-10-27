import { createGlobalStyle } from "styled-components";

import IBMPlexSans700Woff from "./ibm-plex-sans-v8-latin-700.woff";
import IBMPlexSans700Woff2 from "./ibm-plex-sans-v8-latin-700.woff2";
import IBMPlexSansWoff from "./ibm-plex-sans-v8-latin-regular.woff";
import IBMPlexSansWoff2 from "./ibm-plex-sans-v8-latin-regular.woff2";
import MontserratRegularWoff from "./montserrat-v15-latin-regular.woff";
import MontserratRegularWoff2 from "./montserrat-v15-latin-regular.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Montserrat Regular';
        src: local('Montserrat Regular'), local('MontserratRegular'),
        url(${MontserratRegularWoff2}) format('woff2'),
        url(${MontserratRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'IBM Plex Sans';
        src: local('IBM Plex Sans'), local('IBMPlexSans'),
        url(${IBMPlexSansWoff2}) format('woff2'),
        url(${IBMPlexSansWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'IBM Plex Sans';
        src: local('IBM Plex Sans'), local('IBMPlexSans'),
        url(${IBMPlexSans700Woff2}) format('woff2'),
        url(${IBMPlexSans700Woff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
