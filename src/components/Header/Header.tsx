import Layout from 'components/Layout/Layout';
import React from 'react'
import { Link } from 'react-router-dom'

export interface HeaderProps {
    links: {name: string, href: string}[];
    userName?: string;
}

const Header = ({links, userName}:HeaderProps) => {
  return (
    
        <div className='fixed left-0 right-0 top-0 z-20 bg-white border-b-4 py-1 md:py-4'>
                <div className='flex w-full px-8 md:px-16 justify-between'> 
                {userName && (<div className='flex'>Hello, {userName}</div>)}
        <div className='flex gap-2 items-end'>{links.map(({href, name}) => <Link to={href}>{name}</Link>)}</div>
        </div>
    </div>
    

  )
}

export default Header