import { FC, ReactNode, MouseEvent } from 'react';

type ButtonProps = {
  children?: ReactNode;
  type: 'primary' | 'small' | 'round' | 'secondary';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
  const base = `focus:bg-green-300 text-sm inline-block rounded-full 
    bg-green-400 font-semibold uppercase tracking-wide 
    text-gray-200 transition-colors duration-300 
    hover:bg-green-300 focus:outline-none focus:ring 
    focus:ring-green-300 focus:ring-offset-2 
    disabled:cursor-not-allowed `;

  const styles = {
    primary: `${base} px-4 py-2 md:px-6 md:py-3`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2 text-sm`,
    secondary: `focus:bg-stone-300 text-sm inline-block rounded-full 
    border-2 border-stone-300 font-semibold uppercase tracking-wide 
    text-stone-400 transition-colors duration-300 
    hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring 
    focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 
    disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5`,
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
