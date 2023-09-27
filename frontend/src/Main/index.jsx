import { Routes, Route } from "react-router-dom";
import Puppies from "../../pages/Puppies/";
import Show from "../../pages/Show/";
import _404 from "../../pages/Error/";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Puppies />} />
        <Route path="/puppies/:id" element={<Show />} />
        <Route path="/*" element={<_404/>}/>
      </Routes>
    </main>
  );
};

export default Main;
