import { useState } from 'react';
import styles from '../styles/components/FoldMenu.module.css'
import FoldMenuItem from './foldMenuItem';
const FoldMenu = ({
    active,
    color,
    sections
}) => {
    const [selected, setSelected] = useState(false);
    const handleHover = (label) => {
        console.log(label);
        setSelected(label);
    }
    return (
        <div style={{ background: color }} className={`${styles.menu} ${active ? styles.active : ''}`}>
            <ul>
                {
                    active && sections && sections.map(({ label }, index) => (
                        <FoldMenuItem
                            key={label}
                            onHover={handleHover}
                            label={label}
                            first={index === 0}
                            hover={selected}
                            active={active}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default FoldMenu;
