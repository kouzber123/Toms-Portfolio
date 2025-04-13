import Layout from "../layouts/Layout";
import Portfolio from "../pages/Portfolio";

export default function PortfolioWrapper() {
  return <Layout children={<Portfolio />} />;
}
