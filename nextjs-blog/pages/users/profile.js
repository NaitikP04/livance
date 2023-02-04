import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import profilestyles from '../../styles/profile.module.css';

export default function Profile() {
    return (
        <div>
            <main>
                <h1 className={profilestyles.title}>
                Go to <Link href="/">Home Page!</Link>
                </h1>
            </main>
            <Head>
                <title>Profile</title>
            </Head>
            <div className={profilestyles.card}>
                <main>
                    <h1>
                        Eric Phuong
                    </h1>
                    <p className={profilestyles.title2}>Family/Friend</p>
                </main>
            </div>
            <div className={profilestyles.status}>
                <main>
                    <h1>
                        statuses
                    </h1>
                </main>
            </div>
        </div>
    )
}