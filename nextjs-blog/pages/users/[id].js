import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import profilestyles from '../../styles/profile.module.css';
import { useRouter } from 'next/router'
import Image from 'next/image';

let history = ["Sleep deprived"]
let image_history = [""]

export default function Profile(props) {
    const router = useRouter()
    const {id} = router.query;
    const {object} = router.query;
    let status = object
    let link = ""
    try {
        let parts = object.split("   +++   ");
        status = parts[0]
        link = parts[1]
      } catch (error) {
        console.log("The separator was not found in the string");
      }
    
    const user = props.users[id];
    if (id == 0 && status) {
        if (status != history[0]) {
            for (let i = history.length; i > 0; i--) {
                history[i] = history[i-1]
            }
            history[0] = status
            for (let i = image_history.length; i > 0; i--) {
                image_history[i] = image_history[i-1]
            }
            if (link) {
                image_history[0] = link
            }
            else {
                image_history[0] = ""
            }
        }
        user.history = history
        user.status = status
    }
    console.log(image_history)
    console.log("wow")
    return (
        <div className={profilestyles.container}>
            <img src="/logonew.png" alt="Livance Logo" className={styles.logo}/>
            <div className={styles.navbar}>
                <Link className={styles.active} href={{ pathname: "/", query: { object: status } }}>Home</Link>
                <Link href={{ pathname: "/users/0", query: { object: status } }}>My Profile</Link>
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
                        <p className={profilestyles.title2}>{user.pronouns}</p>
                        <div>
                            <img src={user.profilePic} className={profilestyles.user}></img>
                        </div>
                    </main>
                </div>
                <img src="/mental-health.png" alt="Livance Logo" className={profilestyles.transimg}/>
                <div className={profilestyles.card2}>
                    <main>
                        <h2>
                            Current Health Status:
                        </h2>
                        <h4>{user.status}</h4>
                    </main>
                </div>
                <div className={profilestyles.card3}>
                    <main>
                        <h1>
                            About:
                        </h1>
                        <h4>{user.about}</h4>
                    </main>
                </div>
                <div className={profilestyles.sidebarright}>
                <main>
                    <h1>Health Status History:</h1>
                    <div style={{display: "flex"}}>
                        <div style={{width: "50%"}}>
                        {user.history.map(hist => (
                            <div>
                            <h3>{`${hist}`}</h3>
                            </div>
                        ))}
                        </div>
                        <div style={{width: "50%", display: "flex", flexDirection: "column"}}>
                        {image_history.map(hist => (
                            <img
                            className={profilestyles.image}
                            id={`${hist}`}
                            src={hist}
                            onerror='this.style.display = "none"'
                            width="200"
                            />
                        ))}
                        </div>
                    </div>
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