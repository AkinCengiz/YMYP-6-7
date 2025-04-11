import "./App.css";
import Overlay from "./components/Overlay";
import PageContent from "./components/PageContent";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <div className="w3-light-grey w3-content" style={{ maxWidth: 1600 }}>
        <Sidebar />        
        <Overlay />
        <PageContent />
      </div>
    </>
  );
}

export default App;
