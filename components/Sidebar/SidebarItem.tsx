import React, { ReactNode, useState } from 'react'
import SidebarIcon from './SidebarIcon'
import SidebarText from './SidebarText'
import styles from './Sidebar.module.css'

type SidebarItemProps = {
  children?: ReactNode
  icon: string
  text: string
  isCollapsible?: boolean
  link?: string
}

const SidebarItem = ({
  children,
  icon,
  text,
  isCollapsible = false,
  link,
}: SidebarItemProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handleClick = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed)
  }

  return (
    <li className={styles.sidebarItem}>
      {isCollapsible ? (
        <>
          <a onClick={handleClick}>
            <SidebarIcon icon={icon} />
            <SidebarText text={text} />
          </a>
          {!isCollapsed && children}
        </>
      ) : (
        <a href={link}>
          <SidebarIcon icon={icon} />
          <SidebarText text={text} />
        </a>
      )}
    </li>
  )
}

export default SidebarItem
