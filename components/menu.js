import Image from 'next/image';
import styles from '../styles/components/Menu.module.css'
export default function Menu({
    active,
    handleMenu
}) {
    return (
        <div
            className={`${styles.menu} ${active ? styles.active : ''}`}
            onClick={handleMenu}
        >
            <Image
                src="/menu.svg"
                alt="ham"
                width="50px"
                height="50px"
            />
        </div>
    );
}