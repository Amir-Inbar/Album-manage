import { HashRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { PhotoList } from "./cmps/PhotoList";
import "./styles/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadphotos } from "./store/actions/photoActions";
import { useEffect } from "react";
import { PhotoDialog } from "./cmps/PhotoDialog";

export function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photoModule.photos);
console.log(photos);
  useEffect(() => {
    if (!photos || !photos.length) {
      dispatch(loadphotos());
    }
  }, []);

  return (
    photos && (
      <Router>
        <Routes>
          <Route path="/" element={<PhotoList photos={photos} />}>
            <Route path=":photoId" element={<PhotoDialog />} />
          </Route>
        </Routes>
      </Router>
    )
  );
}

export default App;
