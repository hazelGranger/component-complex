import React, { ReactNode, useState } from 'react';
import SidebarIcon from './SidebarIcon';
import SidebarText from './SidebarText';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type SidebarItemProps = {
  children?: ReactNode;
  icon?: IconProp;
  text: string;
  isCollapsible?: boolean;
  link?: string;
};

const SidebarItem = ({
  children,
  icon,
  text,
  isCollapsible = false,
  link,
}: SidebarItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };

  return (
    <li className={styles.sidebarItem}>
      {isCollapsible ? (
        <>
          <a onClick={handleClick}>
            {icon && <SidebarIcon icon={icon} />}
            <SidebarText text={text} />
          </a>
          {!isCollapsed && children}
        </>
      ) : (
        <Link href={link ?? ''}>
          {icon && <SidebarIcon icon={icon} />}
          <SidebarText text={text} />
        </Link>
      )}
    </li>
  );
};

export default SidebarItem;
