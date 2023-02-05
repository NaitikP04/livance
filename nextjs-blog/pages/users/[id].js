import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import profilestyles from '../../styles/profile.module.css';
import { useRouter } from 'next/router'

export default function Profile(props) {
    const router = useRouter()
    const {id} = router.query
    const user = props.users[id];
    return (
        <div className={profilestyles.container}>
            <img src="/logonew.png" alt="Livance Logo" className={styles.logo}/>
            <div className={styles.navbar}>
                <Link className={styles.active} href="/">Home</Link>
                <Link href="#">About</Link>
                <Link href="/users/1">My Profile</Link>
            </div>
            <div>
                {/* <main>
                    <h1 className={profilestyles.title}>
                    Go to <Link href="/">Home Page!</Link>
                    </h1>
                </main> */}
                <Head>
                    <title>Profile</title>
                </Head>
                {/* <div className={profilestyles.user}></div> */}
                <div className={profilestyles.card}>
                    <main>
                        <h1>
                            {user.name}
                        </h1>
                        <p className={profilestyles.title2}>Family or Friend</p>
                        <div>
                            <img src={user.profilePic} className={profilestyles.user}></img>
                        </div>
                    </main>
                </div>
                <div className={profilestyles.card2}>
                    <main>
                        <h1>
                            Status
                        </h1>
                        <h3>{user.mainStatus}</h3>
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
                        <h2>{user.history}</h2>
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