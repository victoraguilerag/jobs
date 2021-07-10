import styles from '../styles/components/FoldMenu.module.css'
const FoldMenu = ({
    active,
    color
}) => {
    return (
        <div style={{ background: color}} className={`${styles.menu} ${active ? styles.active: ''}`}>
        </div>
    )
}

export default FoldMenu;
