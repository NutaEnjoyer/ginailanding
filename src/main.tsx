
import { createRoot } from "react-dom/client";

// основной лендинг
import MainApp from "./app/App.tsx";
import "./styles/index.css";

// страница политики конфиденциальности
import PrivacyApp from "../privacypolicy/src/app/App.tsx";
import "../privacypolicy/src/styles/index.css";

// лендинг мастер-класса
import MasterclassesApp from "../masterclasses/src/app/App.tsx";
import "../masterclasses/src/styles/index.css";

const pathname = window.location.pathname;

function RootRouter() {
  if (pathname === "/privacy") {
    return <PrivacyApp />;
  }

  if (pathname === "/zabeynafrilans_mk") {
    return <MasterclassesApp />;
  }

  // всё остальное — основной лендинг
  return <MainApp />;
}

createRoot(document.getElementById("root")!).render(<RootRouter />);