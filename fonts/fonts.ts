import { createGlobalStyle } from "styled-components";

/**
 * @see https://google-webfonts-helper.herokuapp.com/fonts/ibm-plex-sans?subsets=latin
 */
export default createGlobalStyle`
    /* ibm-plex-sans-100 - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 100;
    src: local(''),
        url('./ibm-plex-sans-v8-latin-100.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./ibm-plex-sans-v8-latin-100.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* ibm-plex-sans-200 - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 200;
    src: local(''),
        url('./ibm-plex-sans-v8-latin-200.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./ibm-plex-sans-v8-latin-200.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* ibm-plex-sans-300 - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('./ibm-plex-sans-v8-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./ibm-plex-sans-v8-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* ibm-plex-sans-regular - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('./ibm-plex-sans-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./ibm-plex-sans-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* ibm-plex-sans-500 - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    src: local(''),
        url('./ibm-plex-sans-v8-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./ibm-plex-sans-v8-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* ibm-plex-sans-600 - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('./ibm-plex-sans-v8-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./ibm-plex-sans-v8-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* ibm-plex-sans-700 - latin */
    @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('./ibm-plex-sans-v8-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./ibm-plex-sans-v8-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }

    /* heebo-regular - latin */
    @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('./heebo-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./heebo-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    /* heebo-600 - latin */
    @font-face {
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('./heebo-v9-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('./heebo-v9-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
`;
