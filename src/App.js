import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortalLayout from "./Layout/PortalLayout/PortalLayout";
import Appointment from "./Screen/Appointment/Appointment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <PortalLayout>
          <Routes>
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </PortalLayout>

      </BrowserRouter>
    </div>
  );
}

export default App;
