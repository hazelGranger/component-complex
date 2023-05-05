import styles from './Sidebar.module.css'
import SidebarItem from './SidebarItem'
import SidebarList from './SidebarList'

const Sidebar = () => {
  return (
    <aside>
      <nav className={styles.sidebar}>
        <SidebarList level={0}>
          <SidebarItem link="/" icon="home" text="Home" />
          <SidebarItem icon="equalizer" text="D3" isCollapsible={true}>
            <SidebarList level={1}>
              <SidebarItem icon="pie_chart" text="Pie" isCollapsible={true}>
                <SidebarList level={2}>
                  <SidebarItem
                    link="/d3/pie/simple-pie"
                    text="Simple Pie Chart"
                  />
                  <SidebarItem
                    link="/d3/pie/fortune-wheel"
                    text="Fortune Wheel"
                  />
                </SidebarList>
              </SidebarItem>
            </SidebarList>
          </SidebarItem>
          <SidebarItem link="/google-map" icon="map" text="Google Map" />
          <SidebarItem link="/three-js" icon="view_in_ar" text="Three.js" />
        </SidebarList>
      </nav>
    </aside>
  )
}

export default Sidebar
