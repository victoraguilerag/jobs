import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/Position.module.css';

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
            
            <div className={styles.separator} style={{ background: `${color}` }}>
            </div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};