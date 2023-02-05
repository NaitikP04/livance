import Head from 'next/head';
import {Fragment} from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout  from '../components/layout';

export default function Home(props) {
  const users = props.users
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
        <Link href="/users/1">My Profile</Link>
      </div>     
      <div>
          <div className={styles.sidebarleft}>
            {users.map(user => (
              <Link href={"/users/" + user.id}>
              <div className={styles.card}>
                <img src="/profile.png" alt={user.name} className={styles.profileimage}/>
                <h2>{user.name}</h2>
                <p>{user.status}</p>
              </div>
              </Link>
            ))}
          </div>
          <div className={styles.sidebarmiddle}>
            <div className={styles.card2}>
              <textarea className={styles.textarea}  placeholder="What's on your mind?" rows="15" cols="50"></textarea>
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

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
