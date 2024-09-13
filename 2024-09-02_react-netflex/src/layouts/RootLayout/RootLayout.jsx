import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

function RootLayout({ currentUser }) {
  return (
    <>
      <Header currentUser={currentUser} />
      <Outlet />
    </>
  );
}

export default RootLayout;
