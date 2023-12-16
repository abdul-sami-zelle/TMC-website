import React from 'react';
import Button from '@mui/material/Button';

const ReOrderButton = ({ button3OnClick }) => { // Destructure props to access button3OnClick
  const handleClick = () => {
    if (button3OnClick) {
      button3OnClick(); // Execute the function passed as a prop
    }
  };

  return (
    <div className="container">
      <Button
        variant="contained"
        onClick={handleClick} // Use the local handleClick function
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          background: '#EA002A',
          height: '45px',
          width: '800px',
          fontSize: '16px',
        }}
      >
        <span style={{ fontWeight: 'bold' }}>REORDER</span>
      </Button>
    </div>
  );
};

export default ReOrderButton;
