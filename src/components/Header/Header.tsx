import Layout from 'components/Layout/Layout';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from 'hooks/userContext';

export interface HeaderProps {
    links: {name: string, href: string}[];
}

const Header = ({links}:HeaderProps) => {
    const {user} = useContext(UserContext);
  return (
    
        <div className='fixed left-0 right-0 top-0 z-20 bg-white border-b-2 py-1 md:py-4'>
                <div className='flex w-full px-8 md:px-16 justify-between'> 
                {user.name !=="" && (<div className='flex'>Hello, {user.name}</div>)}
        <div className='flex gap-2 items-end'>{links.map(({href, name}) => <Link to={href}>{name}</Link>)}</div>
        </div>
    </div>
    

  )
}

export default Header