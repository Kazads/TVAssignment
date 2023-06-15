import { Search } from "components/pages/Search";
import { Show } from "components/pages/Show";
import { Routes, Route } from "react-router";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/show" element={<Show />} />
      <Route path="/show/:id" element={<Show />} />
    </Routes>
  );
};
