import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'src/store/users/usersSlice';
import './Trades.style.css';

export const Trades : FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state);
  
  const handleClick = () => {
    dispatch(addUser({
      login: 'Diana',
      rating: 5
    }));
  };
  return (
    <div className="user-info">
      <button onClick={handleClick}></button>
    </div>
  )
};

export default Trades;