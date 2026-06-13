import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ():JSX.Element => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
