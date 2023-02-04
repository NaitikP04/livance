import Head from 'next/head';
import {Fragment} from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout  from '../components/layout';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <title>Livance</title>
        <meta name="description" content="Livance Family and Friends Health App" />
      </div>
      <img src="/logonew.png" alt="Livance Logo" className={styles.logo}/> 
      <div className={styles.navbar}>
        <Link className={styles.active} href="/">Home</Link>
        <Link href="#">About</Link>
        <Link href="/users/profile">User Listing</Link>
      </div>     
      <div>
          <div className={styles.sidebarleft}>
            <Link href="/users/profile">
            <div className={styles.card}>
              <img src="/profile.png" alt="Profile 1" className={styles.profileimage}/>
              <h2>Profile 1</h2>
              <p>my status</p>
            </div>
            </Link>
            <div className={styles.card}>
            <img src="/profile.png" alt="Profile 1" className={styles.profileimage}/>
              <h2>Profile 2</h2>
              <p>my status</p>
            </div>
            <div className={styles.card}>
            <img src="/profile.png" alt="Profile 1" className={styles.profileimage}/>
              <h2>Profile 3</h2>
              <p>my status</p>
            </div>
            <div className={styles.card}>
            <img src="/profile.png" alt="Profile 1" className={styles.profileimage}/>
              <h2>Profile 4</h2>
              <p>my status</p>
            </div>
          </div>

          <div className={styles.sidebarmiddle}>
            <div className={styles.card2}>
              <textarea className={styles.textarea}  placeholder="What's on your mind?" rows="6" cols="50"></textarea>
            </div>
          </div>

          <div className={styles.sidebarright}>
            <div className={styles.card2}>
              <h2>Resources</h2>
              <div className={styles.card3}>
              <h2>Link to mental health website?</h2>
            </div>
            <div className={styles.card3}>
              <h2>Link to gym website?</h2>
            </div>
            </div>
          </div>
      </div>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

  )
}

