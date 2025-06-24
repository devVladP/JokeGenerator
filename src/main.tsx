import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import FavJokesList from "./components/JokesList/FavJokesList.tsx";
import JokesList from './components/JokesList/JokesList.tsx';
import Layout from "./components/Layout.jsx";


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/jokes" element={<JokesList />} />
          <Route path="/favJokes" element={<FavJokesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
