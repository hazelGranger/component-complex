import Head from 'next/head'
import { ReactNode } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({
  title = 'React Component Complex',
  children,
}: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Examples of Complex React component"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>

      <Sidebar />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Layout
