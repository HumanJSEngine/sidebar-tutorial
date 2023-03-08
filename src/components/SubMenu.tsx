import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const SidebarLink = styled(Link)`
  display:flex;
  color:#e1e9fc;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height:60px;
  text-decoration: none;
  font-size:18px;
  &:hover {
    background:#252831;
    border-left:4px solid #632ce4;
  }
`

const SidebarLabel = styled.span`
margin-left:16px;
`;

const DropDownLink = styled(Link)`
  background:#414757;
  height:60px;
  padding-left:3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color:#f5f5f5;
  font-size: 18px;
  &:hover{
    background:#632ce4;
    cursor:pointer;
  }
`

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
    <SidebarLink onClick={item.subNav && showSubnav}>
      <div>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </div>
      <div>
        {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
      </div>
    </SidebarLink>
    {subnav && item.subNav.map((item,idx) => {
      return(
        <DropDownLink to={item.path} key={idx}>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </DropDownLink>
      )
    })}
    </>
  );
};

export default SubMenu