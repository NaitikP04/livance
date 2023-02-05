import Head from 'next/head';
import {Fragment} from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout  from '../components/layout';
import {useState} from 'react';
import { useRouter } from 'next/router'

export default function Home(props) { // submit bottom
  const users = props.users
  const router = useRouter()
  const [message, setMessage] = useState('');
  if (users[0].status == "Sleep deprived") {
    let {object} = router.query
    if (object) {
      users[0].status = object
    }
  }
  const handleMessageChange = async event => {
    setMessage(event.target.value);
    users[0].status = event.target.value
  };

  return (
    <div className={styles.container}>
      <div>
        <title>Livance</title>
        <meta name="description" content="Livance Family and Friends Health App" />
      </div>
      <img src="/logonew.png" alt="Livance Logo" className={styles.logo}/> 
      <div className={styles.navbar}>
        <Link className={styles.active} href="/">Home</Link>
        
        <Link href={{ pathname: '/users/0', query: { object: users[0].status}} } >My Profile</Link>
      </div>     
      <div>
          <div className={styles.sidebarleft}>
            {users.map(user => (
              <Link href={{ pathname: `/users/${user.id}`, query: { object: users[0].status } }} style={{textDecoration: 'none'}}>
              <div className={styles.card}>
                <img src={user.profilePic} alt={user.name} className={styles.profileimage}/>
                <h2>{user.name}</h2>
                <p id={`status${user.id}`}>
                  {user.status.length > 20
                   ? user.status.substr(0,15) + "..." : user.status}
                </p>
              </div>
              </Link>
            ))}
          </div>
          <div className={styles.sidebarmiddle}>
            <div className={styles.card2}>
              <textarea id="txt" className={styles.textarea}  placeholder="How are you feeling?" rows="6" cols="50" onChange={handleMessageChange}></textarea>
              <div className={styles.card4}>
                <button className={styles.button} onClick={() => {} }><img src="/uploadicon2.png"></img></button>    
              </div>  
            </div>     
          </div>

          <div className={styles.sidebarright}>
            <div className={styles.card2}>
              <h2>Resources</h2>
              <div className={styles.card3}>
              <Link href="https://recreation.ucsc.edu/facilities/index.html" style={{textDecoration: 'none'}}>
              <h2>Fitness Resources</h2>
              </Link>
            </div>
            <Link href="https://caps.ucsc.edu/" style={{textDecoration: 'none'}}>
            <div className={styles.card3}>
              <h2>Counseling and Psychological Services</h2>
            </div>
            </Link>
            <Link href="https://healthcenter.ucsc.edu/" style={{textDecoration: 'none'}}>
            <div className={styles.card3}>
              <h2>Health Services</h2>
            </div>
            </Link>
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
