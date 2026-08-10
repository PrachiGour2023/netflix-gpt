import React from 'react';
import "../utils/global.css"

export const ShimmerElement = React.memo(({ type = 'block', width, height, className = '' }: any) => {
  const inlineStyle = {
    width: width || undefined,
    height: height || undefined,
  };

  return (
    <div 
      className={`shimmer-base shimmer-${type} ${className}`} 
      style={inlineStyle}
      aria-hidden="true"
    />
  );
});

ShimmerElement.displayName = 'ShimmerElement';
