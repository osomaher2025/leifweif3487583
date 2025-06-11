
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
}

const GradientButton = ({ 
  to, 
  href, 
  onClick, 
  children, 
  className = '', 
  variant = 'primary' 
}: GradientButtonProps) => {
  const baseClasses = variant === 'primary' 
    ? 'btn-gradient text-decoration-none' 
    : 'btn btn-outline-light';
  
  const combinedClasses = `${baseClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default GradientButton;
