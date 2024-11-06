// src/components/MainContent.jsx
import PropTypes from 'prop-types';

const MainContent = ({ children }) => (
  <div className="flex-1 p-8">
    {children}
  </div>
);

// Adding PropTypes validation for 'children'
MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
