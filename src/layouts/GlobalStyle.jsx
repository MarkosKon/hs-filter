import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
  a {
    color: #dabe75;
  }
  /* react-modal overrides */
  /* .ReactModal__Body--open {
    overflow-y: hidden;
  } */
  .ReactModal__Overlay {
    overflow: auto;
    opacity: 0;
    transform: translateY(-10%);
    transition: opacity .3s cubic-bezier(0.445, 0.05, 0.55, 0.95), transform .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateY(0);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateY(-10%);
  }

  /* react-autosuggest styling */

  .react-autosuggest__container {
    position: relative;
  }

  .react-autosuggest__input {
    max-width: 200px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #aaa;
    border-radius: 4px;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    color: black;
    display: block;
    position: absolute;
    border: 1px solid #aaa;
    background-color: #fff;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow-y: auto;
    max-height: 400px;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }

  /* scrollbar styling */

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #867f7f;
  }

  ::-webkit-scrollbar
  {
    width: 4px;
    background-color: #867f7f;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: #000000;
    border: 6px solid #1c1c1c;
  }

  /* Table styles */

  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.2rem;
    font-size: 1rem;
    line-height: 1.6rem;
    border-collapse: collapse;
    /* width: 100%; */
  }

  td, th {
    /* text-align: left; */
    border-bottom: 1px solid hsla(0,0%,0%,0.32);
    font-feature-settings: "tnum";
    -moz-font-feature-settings: "tnum";
    -ms-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    padding-left: 1.06667rem;
    padding-right: 1.06667rem;
    padding-top: 0.8rem;
    padding-bottom: calc(0.8rem - 1px);
  }

  th:first-child, td:first-child {
    padding-left: 0;
  }
`;
