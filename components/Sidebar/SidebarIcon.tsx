type SidebarIconProps = {
  icon: string
}

const SidebarIcon = ({ icon }: SidebarIconProps) => {
  return <span className="material-symbols-outlined">{icon}</span>
}

export default SidebarIcon
