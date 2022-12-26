import styles from './Sidebar.module.css'

type SidebarTextProps = {
    text: string
  }
  
  const SidebarText = ({text }: SidebarTextProps) => {
    return  <span className={styles.sidebarText}>{text}</span>
  }
  
  export default SidebarText;
  