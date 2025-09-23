import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-30" }) => {
  return (
    <div className={`flex items-center ${className}`} aria-label="Psifera Logo">
      <img src="./public/images/logo.png" alt="logo" width="200px" />
    </div>
  );
};

export default Logo;
