import React, {FC} from 'react';
import './Avatar.style.css';

export const Avatar : FC<{
  src: string | undefined;
  login?: string | undefined;
}> = ({ src, login }) => {
  return <img className='avatar' src={`/${src}`} alt={login} />
};