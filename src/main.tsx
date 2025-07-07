import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Layout from "./components/Layout.jsx";
import FavJokesPage from "./components/FavJokesPage/FavJokesPage.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/favJokes" element={<FavJokesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
