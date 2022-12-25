import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside>
      <nav className={styles.sidebar}>
        <ul>
          <li>
            <a href="./">
              <span className="material-symbols-outlined">home</span>
              <span className={styles.sidebarText}>Home</span>
            </a>
          </li>
          <li>
            <a href="./d3">
              <span className="material-symbols-outlined">equalizer</span>
              <span className={styles.sidebarText}>D3</span>
            </a>
          </li>
          <li>
            <a href="./google-map">
              <span className="material-symbols-outlined">map</span>
              <span className={styles.sidebarText}>Google Map</span>
            </a>
          </li>
          <li>
            <a href="./three-js">
              <span className="material-symbols-outlined">view_in_ar</span>
              <span className={styles.sidebarText}>Three.js</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
