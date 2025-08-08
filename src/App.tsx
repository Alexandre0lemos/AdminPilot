import { Header } from "./layout/Header";
import { Aside } from "./layout/Aside";
import { Home } from "./layout/Home/Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  key: string;
}

function App() {
  const location = useLocation()

  const handleStylePageSelect = (location: Location) => {
    document.querySelectorAll(".page-activate").forEach(item => item.classList.remove("page-activate"))
    console.log(location.pathname)
    document.getElementById(location.pathname.split("/")[1])?.classList.add("page-activate")
  } 

  useEffect(() => {
    handleStylePageSelect(location)
  }, [location])
  
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <Home />
      </div>
    </>
  );
}

export default App;
