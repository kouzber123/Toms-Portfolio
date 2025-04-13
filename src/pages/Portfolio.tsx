import AboutMe from "../components/portfolio/AboutMe";
import Container from "../components/portfolio/Container";
import Sidebar from "../components/portfolio/Sidebar";

export default function Portfolio() {
  return (
    <div className="pt-20 lg:pt-40 lg:px-80 h-full grid lg:grid-cols-1 px-0 text-gray-50 bg-gradient-to-r from-gray-900/30 to-gray-950/50">
      <Container>
        <Sidebar />
        <AboutMe />
      </Container>
    </div>
  );
}
