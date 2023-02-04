import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function FirstPost() {
    return (
        <div className={styles.container}>
            <main>
                <h1 className={styles.title}>
                Go to <Link href="/">Home Page!</Link>
                </h1>
            </main>
        </div>
    )
}