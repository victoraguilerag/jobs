import Lottie from "lottie-react";
import Link from 'next/link';
import styles from '../styles/components/FoldMenu.module.css';

import homeAnim from "./icons/home.json";
import careerAnim from "./icons/career.json";
import experimentsAnim from "./icons/experiments.json"
import glassAnim from "./icons/glass.json"

const FoldMenuItem = ({
    label,
    onHover,
    first,
    hover,
    active,
}) => {
    const icons = {
        home: homeAnim,
        career: careerAnim,
        experiments: experimentsAnim,
        glass: glassAnim,
    }
    const handleItemHover = () => onHover(label);
    const handleItemBlur = () => onHover(false);
    console.log(active);
    return (
        <li
            onMouseEnter={handleItemHover}
            onMouseLeave={handleItemBlur}
        >
            {
                first && !hover && active && (
                    <div className={`${styles.icon} ${active ? styles.fixed : ''}`}>
                        <Lottie animationData={glassAnim} />
                        {/* <Image width="64px" height="64px" src={`/${label}.svg`} alt={label} /> */}
                    </div>
                )
            }
            <div className={styles.icon}>
                { label == 'Home' && <Lottie animationData={homeAnim} />}
                {label == 'Career' && <Lottie animationData={careerAnim} />}
                {label == 'Experiments' && <Lottie animationData={experimentsAnim} />}
                {/* <Image width="64px" height="64px" src={`/${label}.svg`} alt={label} /> */}
            </div>
            <Link
                href={label.toLowerCase()}
                passHref={true}
            >
                <p>{label}</p>
            </Link>
        </li>
    )
}

export default FoldMenuItem;
