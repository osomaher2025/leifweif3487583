
interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GradientCard = ({ children, className = '', hover = true }: GradientCardProps) => {
  const hoverClass = hover ? 'project-card' : '';
  
  return (
    <div className={`card-gradient ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default GradientCard;
