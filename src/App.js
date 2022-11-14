import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import CreateEvent from "./Pages/CreateEvent/CreateEvent";
import CreateNft from "./Pages/CreateNft/CreateNft";
import EventPage from "./Pages/EventPage/EventPage";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home";
import Member from "./Pages/Member/Member";
import AccountInfo from "./Pages/MyProfile/AccountInfo/AccountInfo";
import AccountSetting from "./Pages/MyProfile/AccountSetting/AccountSetting";
import AppSetting from "./Pages/MyProfile/AppSetting/AppSetting";
import MyGallery from "./Pages/MyProfile/MyGallery/MyGallery";
import Subscription from "./Pages/MyProfile/Sunscription/Subscription";
import NFT from "./Pages/NFT/NFT";
import NFTPage from "./Pages/NFTPage/NFTPage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/member" element={<Member />} />
      </Routes>
      <Routes>
        <Route path="/nft" element={<NFT />} />
      </Routes>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>
      <Routes>
        <Route path="/nftpage" element={<NFTPage />} />
      </Routes>
      <Routes>
        <Route path="/eventpage" element={<EventPage />} />
      </Routes>
      <Routes>
        <Route path="/createevent" element={<CreateEvent />} />
      </Routes>
      <Routes>
        <Route path="/accountinfo" element={<AccountInfo />} />
      </Routes>
      <Routes>
        <Route path="/createnft" element={<CreateNft />} />
      </Routes>
      <Routes>
        <Route path="/mygallery" element={<MyGallery />} />
      </Routes>
      <Routes>
        <Route path="/appsetting" element={<AppSetting />} />
      </Routes>
      <Routes>
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      <Routes>
        <Route path="/accountsetting" element={<AccountSetting />} />
      </Routes>
      <Routes>
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
