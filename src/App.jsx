import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { PhotoList } from "./cmps/PhotoList";
import "./styles/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadphotos } from "./store/actions/photoActions";
import { useEffect } from "react";
import { PhotoDetails } from "./pages/PhotoDetails";

export function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photoModule.photos);

  useEffect(() => {
    dispatch(loadphotos());

  }, []);

  return (
    photos && (
      <Router>
        <Routes>
          <Route path="/" element={<PhotoList photos={photos} />} />
          <Route path="/photo/:photoId" element={<PhotoDetails />} />
        </Routes>
      </Router>
    )
  );
}

export default App;
