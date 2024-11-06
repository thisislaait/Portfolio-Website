import PropTypes from 'prop-types';  // Import PropTypes
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Layout = ({ children }) => (
  <div className="flex min-h-screen bg-black">
    <Sidebar />
    <MainContent>{children}</MainContent>
  </div>
);

// Add prop types validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,  // Validate children prop as a required node
};

export default Layout;

