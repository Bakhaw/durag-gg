import React from 'react';
import { Link } from 'react-router-dom';

import ChampsIcon from './ChampsIcon';
import HomeIcon from './HomeIcon';
import SearchIcon from './SearchIcon';

const links = [
  {
    icon: <HomeIcon />,
    text: 'HOME',
    to: '/'
  },
  {
    icon: <SearchIcon />,
    text: 'SUMMONER',
    to: '/search-summoner'
  },
  {
    icon: <ChampsIcon />,
    text: 'CHAMPS',
    to: '/champions'
  }
];

function LeftMenu() {
  return (
    <div className='LeftMenu'>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link className='LeftMenu__ListItem' to={link.to}>
              {link.icon}
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;
