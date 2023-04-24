import { createGlobalStyle } from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import MatchPage from "./components/pages/MatchPage";
import CheckRoute from "./components/Utils/CheckRoute";
import TournamentsContextProvider from "./contexts/TournamentsContext";

const App = () => {

  return (
    <TournamentsContextProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to='/leagueoflegends' />} >
        </Route>
        <Route path="/:gameType" element={<CheckRoute type='game' />}>
          <Route path=":tournamentId/:tournamentTitle" element={<CheckRoute type='tournament' />} />
        </Route>
        <Route path="/vods/:tournamentId/:matchId/:vodNumber" element={<CheckRoute type='vod' />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </TournamentsContextProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
:root {
  --text-color-1: #fff;
  --text-color-2: #8fa3b0;

  --bg-color-dark: #111111;
  --bg-color-dark-alt: #0a0e13;
  --bg-color-lighter: #0f1519;
}

button {
  all: unset;
}

a:link {
    text-decoration: inherit;
    color: inherit;
}

a:visited {
    text-decoration: inherit;
    color: inherit;
}

a:hover, button:hover {
  cursor: pointer;
  color: red;
}

* {
  &::-webkit-scrollbar {
    height: 14px;
    width: 14px;
    background-color: #0a0e13;
    margin: 0 10px;
  }

  &::-webkit-scrollbar-corner {
    background: #000;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #252c32;
    -webkit-border-radius: 1ex;
    border-radius: 1ex;
    border: 3px solid #0a0e13;
  }
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg-color-lighter);
  color: var(--text-color-1);
  height: 100%;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
`