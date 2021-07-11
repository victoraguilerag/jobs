import Lottie from "lottie-react";
import Image from 'next/image';
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
    console.log('s')
    console.log(first)
    console.log(hover);
    console.log(label);
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
            <p>{label}</p>
        </li>
    )
}

export default FoldMenuItem;
