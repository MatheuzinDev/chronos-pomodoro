import styles from './Logo.module.css'
import { TimerIcon } from 'lucide-react'

export function Logo() {
    return (
        <div className={styles.logo}>
            <a href="" className={styles.logoLink}>
                <TimerIcon />
                <span>Chronos</span>
            </a>
        </div>
    )
}