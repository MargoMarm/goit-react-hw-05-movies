import { Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import SharedLayout from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" />
          <Route path="review" />
        </Route>
      </Route>
    </Routes>
  );
};
