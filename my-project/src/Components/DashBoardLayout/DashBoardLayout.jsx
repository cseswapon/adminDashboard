/**
 * Title: Online E-commerce Product Sell
 * Description: This is a Higher Order Component (HoC). All Route handel this HoC component Use to Layout.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

export default function withDashboard(Component) {
  const DashboardLayout = () => {
    return (
      <>
        <div>
          <div>
            {/* this is a header file with a shared */}
            <Header />
            {/* this is a child component and it is a main component */}
            <Component />
            {/* this is a footer file with a shared */}
            <Footer />
          </div>
        </div>
      </>
    );
  };
  return DashboardLayout;
}
