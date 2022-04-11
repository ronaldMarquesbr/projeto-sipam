import { SideBar } from "./components/SideBar";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <div className="container-app">
      <GlobalStyle />
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;