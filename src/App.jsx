import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { PhotoList } from "./cmps/PhotoList";
import "./styles/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadphotos } from "./store/actions/photoActions";
import { useEffect } from "react";
import { PhotoDialog } from "./cmps/PhotoDialog";
import { PhotoHeader } from "./cmps/PhotoHeader";

export function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photoModule.photos);

  useEffect(() => {
    if (!photos || !photos.length) {
      dispatch(loadphotos());
    }
  }, []);

  return (
    photos && (
      <section className="container album-app">
        <PhotoHeader />
        <Router>
          <Routes>
            <Route path="/" element={<PhotoList photos={photos} />}>
              <Route path=":photoId" element={<PhotoDialog />} />
            </Route>
          </Routes>
        </Router>
      </section>
    )
  );
}

export default App;
