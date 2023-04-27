import { createGlobalStyle } from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import CheckRoute from "./components/Utils/CheckRoute";
import TournamentsDetailsContextProvider from "./contexts/TournamentsDetailsContext";
import LoadedTournamentsContextProvider from "./contexts/LoadedTournamentsContext";

const App = () => {
  return (
    <TournamentsDetailsContextProvider>
      <LoadedTournamentsContextProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigate replace to='/leagueoflegends' />} />
          <Route path="/:gameType" element={<CheckRoute type='game' />}>
            <Route path=":tournamentId/:tournamentTitle" element={<CheckRoute type='tournament' />} />
          </Route>
          <Route path="/vods/:tournamentId/:matchId/:vodNumber" element={<CheckRoute type='vod' />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LoadedTournamentsContextProvider>
    </TournamentsDetailsContextProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
:root {
  --text-color-1: #fff;
  --text-color-2: #8fa3b0;

  --bg-color-dark: #14151c;
  --bg-color-dark-alt: #22232e;
  --bg-color-lighter:	#1d1e27;

  --color-acc-1: #ECB365;
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
  color: var(--color-acc-1);
}

* {
  &::-webkit-scrollbar {
    height: 14px;
    width: 14px;
    background-color: var(--bg-color-dark-alt);
    margin: 0 10px;
  }

  &::-webkit-scrollbar-corner {
    background: var(--bg-color-dark);
  }
  
  &::-webkit-scrollbar-thumb {
    background: #2f3840;
    -webkit-border-radius: 1ex;
    border-radius: 1ex;
    border: 3px solid var(--bg-color-dark-alt);
  }
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  width: 100%;
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