import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/Position.module.css';
import next from 'next';

export default function Position({
    title,
    textColor,
    position,
    color,
    description,
    gradient,
    index,
    first,
    last,
}) {
    const getNextRow = () => document.getElementById('position-' + (index + 1));

    const handleClick = () => {
        const nextPosition = getNextRow();
        if (nextPosition)
            nextPosition.scrollIntoView({ smooth: true, block: 'end' })
    }

    const getPreviousRow = () => document.getElementById('position-' + (index - 1));

    const handleBackClick = () => {
        const nextPosition = getPreviousRow();
        if (nextPosition)
            nextPosition.scrollIntoView({ smooth: true })
    }
    return (
        <div
            id={`position-` + index}
            className={`position ${styles.container}`}
        >
            <div
                style={{ color: `${textColor}`, backgroundColor: `${color}` }}
                key={title}
                className={`${styles.positionCard} ${styles.centered}`}
            >
                {title[0]}
            </div>
            <div className={styles.position}>{position}</div>
            <div className={styles.title} style={{ color: `${color}` }}>{title.toUpperCase()}</div>
            {
                !last && (
                <div className={styles.doubleArrows} onClick={handleClick}>
                    <Image src="/double-arrows.svg" width="48px" height="48px" alt="double arrows right" />
                </div>
                )
            }
            {
                !first && (
                <div className={`${styles.doubleArrows} ${styles.back}`} onClick={handleBackClick}>
                    <Image src="/double-arrows.svg" width="48px" height="48px" alt="double arrows right" />
                </div>
                )
            }
            
            <div className={styles.separator} style={{ background: `${color}` }}>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};