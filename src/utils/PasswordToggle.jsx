import React from 'react';
import Button from 'react-bootstrap/Button';
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi';

function PasswordToggle({ showPassword, togglePassword }) {
  return (
    <Button
      className="input-group-append border-light-subtle"
      type="button"
      variant="outline-secondary"
      onClick={togglePassword}
    >
      {showPassword ? <PiEyeClosedBold /> : <PiEyeBold />}
    </Button>
  );
}

export default PasswordToggle;
