import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from 'src/interfaces/IUser';
import { DeleteRounded, Person } from '@material-ui/icons';
import { getCurrentTradeSelector, deleteTrade, switchRoles, getUsersSelector } from 'src/store/slices';
import { switchUser } from 'src/store/slices';
import { MessagesSpace } from '../MessagesSpace';
import './Messager.style.css';
import { IconButton } from '../IconButton';

export const Messager : FC = () => {
  const dispatch = useDispatch();

  const currentTrade = useSelector(getCurrentTradeSelector);

  const counterUser = useSelector(getUsersSelector).find((user : IUser) => user.id === currentTrade?.buyerId);

  const handleDeleteTrade = () => {
    dispatch(deleteTrade(currentTrade));
  };

  const handleSwitchUser = () => {
    dispatch(switchRoles());
    dispatch(switchUser());
  };

  return (
    <div className="messager">
      <div className="messager-header">
        <IconButton icon={ <DeleteRounded /> } className='delete-trade' handleClick={handleDeleteTrade} />
        <p className="title">{currentTrade.method}</p>
        <p>
          <span>{counterUser?.login} </span>
          <span className="success">+{counterUser?.ratingPros}</span>
          <span> / </span>
          <span className="fail">-{counterUser?.ratingCons}</span>
        </p>
        <IconButton icon={ <Person /> } className='switch-user' handleClick={handleSwitchUser} />
      </div>
      <MessagesSpace currentTrade={currentTrade} />
    </div>
  )
};
