import React, { ReactNode, useState } from 'react'
import styles from './Sidebar.module.css'

type SidebarListProps = {
  children?: ReactNode,
  level: 0 | 1 | 2 | 3
}

const SidebarList = ({
  children,
  level
}: SidebarListProps) => {

  return (
    <ul className={`${styles.sidebarList} ${styles[`sidebarList-level-${level}`]}`}>
        {
            children
        }
    </ul>
  )
}

export default SidebarList
