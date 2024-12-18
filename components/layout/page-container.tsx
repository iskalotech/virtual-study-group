interface PageContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export function PageContainer({ children, className = '' }: PageContainerProps) {
    return (
      <div className={`container mx-auto px-4 ${className}`}>
        {children}
      </div>
    );
  }