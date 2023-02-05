import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import profilestyles from '../../styles/profile.module.css';
import { useRouter } from 'next/router'
import Image from 'next/image';

let history = ["Sleep deprived"]

export default function Profile(props) {
    const router = useRouter()
    const {id} = router.query;
    const {object} = router.query;
    const user = props.users[id];
    if (id == 0 && object) {
        if (object != history[0]) {
            for (let i = history.length; i > 0; i--) {
                history[i] = history[i-1]
                console.log(i)
            }
            history[0] = object
        }
        user.history = history
        user.status = object
    }
    return (
        <div className={profilestyles.container}>
            <img src="/logonew.png" alt="Livance Logo" className={styles.logo}/>
            <div className={styles.navbar}>
                <Link className={styles.active} href={{ pathname: "/", query: { object } }}>Home</Link>
                <Link href={{ pathname: "/users/0", query: { object: object } }}>My Profile</Link>
            </div>
            <div>
                <Head>
                    <title>Profile</title>
                </Head>
                <div className={profilestyles.card}>
                    <main>
                        <h1>
                            {user.name}
                        </h1>
                        <p className={profilestyles.title2}>he/him</p>
                        <div>
                            <img src={user.profilePic} className={profilestyles.user}></img>
                        </div>
                    </main>
                </div>
                <img src="/mental-health.png" alt="Livance Logo" className={profilestyles.transimg}/>
                <div className={profilestyles.card2}>
                    <main>
                        <h1>
                            Current Status:
                        </h1>
                        <h4>{user.status}</h4>
                    </main>
                </div>
                <div className={profilestyles.card3}>
                    <main>
                        <h1>
                            About
                        </h1>
                        <h4>{user.about}</h4>
                    </main>
                </div>
                <div className={profilestyles.sidebarright}>
                    <main>
                        <h1>
                            Health History
                        </h1>
                        {user.history.map(hist => (
                            <h2>{hist}</h2>
                        ))}
                    </main>
                </div>
            </div>
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

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    const paths = objectData.users.map(user => {
        return {
            params: {id: user.id.toString()}
        }
    })
  
    return {
      paths,
      fallback: false
    }
}