import React from 'react';

interface LegacyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

const LegacyButton: React.FC<LegacyButtonProps> = ({
  children,
  className = "",
  active = false,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-1 font-mono text-lg bg-[#c0c0c0] outline-none active:translate-y-[1px] active:shadow-[inset_1px_1px_#000000,inset_-1px_-1px_#ffffff] ${active
          ? 'shadow-[inset_1px_1px_#000000,inset_-1px_-1px_#ffffff] bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqJAwAxQBNgFUAxQBDgAAP+gK/mAA9F0AAAAASUVORK5CYII=")]'
          : 'shadow-[inset_1px_1px_#ffffff,inset_-1px_-1px_#000000,1px_1px_0px_#000000]'
        } ${className}`}
      {...props}
    >
      <div className={`${active ? 'translate-x-[1px] translate-y-[1px]' : ''}`}>
        {children}
      </div>
    </button>
  );
};

export default LegacyButton;