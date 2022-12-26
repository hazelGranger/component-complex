import styles from './Sidebar.module.css'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
  return (
    <aside>
      <nav className={styles.sidebar}>
        <ul>
          <SidebarItem link="./" icon="home" text="Home" />
          <SidebarItem icon="equalizer" text="D3" isCollapsible={true}>
            <ul>
              <SidebarItem link="./d3/Pie" icon="pie_chart" text="Pie" />
            </ul>
          </SidebarItem>
          <SidebarItem link="./google-map" icon="map" text="Google Map" />
          <SidebarItem link="./three-js" icon="view_in_ar" text="Three.js" />
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
