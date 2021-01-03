import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <div className="content">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
