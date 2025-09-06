import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function App() {


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex justify-center items-center h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
