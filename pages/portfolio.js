import Head from 'next/head'

import Image from 'next/image'
import { positions } from '../lib/mocks';
import styles from '../styles/Home.module.css'
import Position from '../components/position';
import Curve from '../components/curve';
import Menu from '../components/menu';
import FoldMenu from '../components/foldMenu';
import { useEffect, useState } from 'react';

export default function Home({
    positions
}) {
    const [color, setColor] = useState(0);
    const [observerState, setObserver] = useState(0);
    const [load, setLoad] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const initIntersection = () => {
            const items = Array.from(document.getElementsByClassName('position'));
            const observer = new IntersectionObserver((entries) => {
                let found = false;
                console.log(entries)
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        console.log(index)
                        console.log(index);
                        const colorId = entry.target.id.replace('position-', '');
                        setColor(colorId);
                        found = true;
                    }
                });
            }, { threshold: .99 })
            items.forEach(item => observer.observe(item));
            if (!observerState) setObserver(observerState);
        }
        setLoad(true);
        initIntersection()
    }, [observerState]);
    const handleMenu = () => setMenu(!menu)
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu active={menu} handleMenu={handleMenu} />

            <main id="container" className={styles.main}>
                {
                    positions && positions.map((position, index) => (
                        <Position
                            key={position.title}
                            index={index}
                            first={index === 0}
                            last={index === positions.length - 1}
                            {...position}
                        />
                    ))
                }
                {/* {load && (<Curve elements={positions.length} />)} */}
            </main>
            <FoldMenu active={menu} color={positions[color].color} />

            
        {/* <footer className={styles.footer}>

        </footer> */}
        </div>
    )
}

Home.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:5666/api/positions');
    const json = await res.json()
    console.log(json);
    return { positions: json.positions }
}