import { ReactNode } from 'react'
import SidebarIcon from './SidebarIcon'
import SidebarText from './SidebarText'

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
  return (
    <li>
      {isCollapsible ? (
        <>
          <SidebarIcon icon={icon} />
          <SidebarText text={text} />
          {children}
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
