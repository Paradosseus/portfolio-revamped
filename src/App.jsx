import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Navigation } from "./components/Navigation"
import { useState } from "react";
import { SectionContainer } from "./components/SectionContainer"
import { Footer } from "./components/Footer";


function App() {

  const [activeTab, setActiveTab] = useState("techStack");

  return (
    <div className="mx-auto max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-7xl">
      <Header />
      <Main />
      <Navigation setActiveTab={setActiveTab} activeTab={activeTab}/>
      <SectionContainer activeTab={activeTab}/>
      <Footer/>
    </div>
  )
}

export default App
