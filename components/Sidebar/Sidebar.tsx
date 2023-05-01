import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <aside>
      <nav className={styles.sidebar}>
        <SidebarList level={0}>
          <SidebarItem link="./" icon="home" text="Home" />
          <SidebarItem icon="equalizer" text="D3" isCollapsible={true}>
            <SidebarList level={1}>
              <SidebarItem
                link="./d3/Pie"
                icon="pie_chart"
                text="Pie"
                isCollapsible={true}
              >
                <SidebarList level={2}>
                  <SidebarItem link="./d3/Pie" text="simple pie chart" />
                </SidebarList>
              </SidebarItem>
            </SidebarList>
          </SidebarItem>
          <SidebarItem link="./google-map" icon="map" text="Google Map" />
          <SidebarItem link="./three-js" icon="view_in_ar" text="Three.js" />
        </SidebarList>
      </nav>
    </aside>
  );
};

export default Sidebar;
