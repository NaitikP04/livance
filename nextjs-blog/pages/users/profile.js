import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import profilestyles from '../../styles/profile.module.css';

export default function Profile() {
    return (
        <div>
            <img src="/logonew.png" alt="Livance Logo" className={styles.logo}/>
            <div className={styles.navbar}>
                <Link className={styles.active} href="/">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">User Listing</Link>
            </div>
            <body>
                <main>
                    <h1 className={profilestyles.title}>
                    Go to <Link href="/">Home Page!</Link>
                    </h1>
                </main>
                <Head>
                    <title>Profile</title>
                </Head>
                {/* <div className={profilestyles.user}></div> */}
                <div >
                    <img src="https://i.redd.it/zhf9kr5fjs661.jpg" class={profilestyles.user}></img>
                </div>
                <div className={profilestyles.card}>
                    <main>
                        <h1>
                            Name
                        </h1>
                        <p className={profilestyles.title2}>Family or Friend</p>
                    </main>
                </div>
                <div className={profilestyles.card2}>
                    <main>
                        <h1>
                            Current Health Status
                        </h1>
                    </main>
                </div>
                <div className={profilestyles.card3}>
                    <main>
                        <h3>
                            Message
                        </h3>
                    </main>
                </div>
                <div className={profilestyles.sidebarright}>
                    <main>
                        <h1>
                            Health History
                        </h1>
                    </main>
                </div>
            </body>
        </div>
    )
}