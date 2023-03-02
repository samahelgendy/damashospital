
import About from '../About/index';
import Home from "../Home/index";
import Work from "../Work/index";
import Portfolio  from '../Portfolio/index';
import Profile from '../Profile/index';
import SocialMedia from '../SociamMedia/index';
import Footer from '../Footer/index';
function Index() {
  return (
    <div className="Index">
     
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />

    </div>
  );
}

export default Index;
