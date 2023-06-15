import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

export default function withDashboard(Component) {
  const DashboardLayout = () => {
    return (
      <>
        <div>
          <div>
            <Header />
            <Component />
            <Footer />
          </div>
        </div>
        {/* This is a main component */}
      </>
    );
  };
  return DashboardLayout;
}
