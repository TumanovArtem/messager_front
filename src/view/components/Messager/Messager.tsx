import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from 'src/interfaces/IUser';
import { DeleteRounded, Person } from '@material-ui/icons';
import {
  getCurrentTradeSelector,
  deleteTrade,
  switchRoles,
  getUsersSelector,
  switchUser
} from 'src/store/slices';
import { useHistory } from 'react-router';
import { SELL_BITCOINS_PATH, TRADES_PATH } from 'src/constants/routes';
import { MessagesSpace } from '../MessagesSpace';
import { IconButton } from '../IconButton';
import './Messager.style.css';

export const Messager: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentTrade = useSelector(getCurrentTradeSelector);

  const counterUser = useSelector(getUsersSelector).find(
    (user: IUser) => user.id === currentTrade?.buyerId
  );

  const handleDeleteTrade = useCallback(() => {
    currentTrade && dispatch(deleteTrade(currentTrade?.id));
    history.push(`${SELL_BITCOINS_PATH}${TRADES_PATH}`);
  }, [currentTrade]);

  const handleSwitchUser = useCallback(() => {
    dispatch(switchRoles());
    dispatch(switchUser());
  }, []);

  return (
    <div className='messager'>
      <div className='messager-header'>
        <IconButton
          icon={<DeleteRounded />}
          className='delete-trade'
          handleClick={handleDeleteTrade}
        />
        <p className='title'>{currentTrade?.method}</p>
        <p>
          <span>{counterUser?.login} </span>
          <span className='success'>+{counterUser?.ratingPros}</span>
          <span> / </span>
          <span className='fail'>-{counterUser?.ratingCons}</span>
        </p>
        <IconButton
          icon={<Person />}
          className='switch-user'
          handleClick={handleSwitchUser}
        />
      </div>
      <MessagesSpace currentTrade={currentTrade || null} />
    </div>
  );
};
