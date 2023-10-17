import React from 'react';

const Header = ({ onScrollToFooter }) => {
  const handleScrollToFooter = () => {
    onScrollToFooter();
  };

  return (
    <header>
      <h1>My Products</h1>
      <button onClick={handleScrollToFooter}>Scroll to Footer</button>
    </header>
  );
};

export default Header;