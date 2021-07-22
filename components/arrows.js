import { Fragment } from "react"
import Image from 'next/image';
import styles from '../styles/components/Position.module.css';

const Arrow = ({
    first,
    last,
    index,
}) => {
    const getNextRow = (label) => document.getElementById(label);

    const handleClick = () => {
        const nextLabel = 'position-' + (parseInt(index) + 1);
        console.log(nextLabel)
        const nextPosition = getNextRow(nextLabel);
        console.log(nextPosition);
        console.log(index)
        if (nextPosition)
            nextPosition.scrollIntoView({ smooth: true, block: 'end' })
    }

    const getPreviousRow = () => document.getElementById('position-' + (index - 1));

    const handleBackClick = () => {
        const nextPosition = getPreviousRow();
        if (nextPosition)
            nextPosition.scrollIntoView({ smooth: true })
    }

    console.log(first);
    console.log(last);
    console.log(index);

    return (
        <Fragment>
            <div className={`${styles.doubleArrows} ${!last ? styles.active : ''}`} onClick={handleClick}>
                <Image src="/double-arrows.svg" width="48px" height="48px" alt="double arrows right" />
            </div>
            <div className={`${styles.doubleArrows} ${styles.back} ${last ? styles.last : ''} ${!first ? styles.active : ''}`} onClick={handleBackClick}>
                <Image src="/double-arrows.svg" width="48px" height="48px" alt="double arrows right" />
            </div>
        </Fragment>
    )
}

export default Arrow;
