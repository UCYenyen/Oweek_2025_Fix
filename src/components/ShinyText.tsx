import React from "react";

interface ShinyTextProps {
  children: React.ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  disabled = false,
  speed = 3,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`relative inline-block ${className}`}>
      {children}

      {!disabled && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full animate-shine"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animationDuration: animationDuration,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ShinyText;
