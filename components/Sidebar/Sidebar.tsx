import styles from './Sidebar.module.css';
import SidebarItem from './SidebarItem';
import SidebarList from './SidebarList';
import {
  faChartSimple,
  faChartPie,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faWpforms, faUnity } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <aside>
      <nav className={styles.sidebar}>
        <SidebarList level={0}>
          <SidebarItem link="/" icon="home" text="Home" />
          <SidebarItem
            icon={faWpforms}
            text="Form Elements"
            isCollapsible={true}
          >
            <SidebarList level={1}>
              <SidebarItem
                link="/form-elements/auto-height-textarea"
                text="AutoHeight Textarea"
              />
            </SidebarList>
          </SidebarItem>
          <SidebarItem icon={faChartSimple} text="D3" isCollapsible={true}>
            <SidebarList level={1}>
              <SidebarItem icon={faChartPie} text="Pie" isCollapsible={true}>
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
          <SidebarItem
            link="/google-map"
            icon={faMapLocationDot}
            text="Google Map"
          />
          <SidebarItem link="/three-js" icon={faUnity} text="Three.js" />
        </SidebarList>
      </nav>
    </aside>
  );
};

export default Sidebar;
