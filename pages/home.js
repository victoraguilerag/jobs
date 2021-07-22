import Head from 'next/head'

import Image from 'next/image'
import { positions } from '../lib/mocks';
import styles from '../styles/Home.module.css'
import * as Tone from 'tone'
import Position from '../components/position';
import Curve from '../components/curve';
import Menu from '../components/menu';
import FoldMenu from '../components/foldMenu';
import { Fragment, useEffect, useState } from 'react';

export default function Home({
    positions,
    sections
}) {
    const [color, setColor] = useState(0);
    const [menu, setMenu] = useState(false);
    const notes = [
        "C",
        "D",
        "E",
        "F",
        "G",
        "A",
        "B",
    ]
    const blackNotes = {
        "C": "C#",
        "D": "D#",
        "F": "F#",
        "G": "G#",
        "A": "A#",
    };

    const controls = {
        "a": "C",
        "w": "C#",
        "s": "D",
        "e": "D#",
        "d": "E",
        "f": "F",
        "t": "F#",
        "g": "G",
        "y": "G#",
        "h": "A",
        "u": "A#",
        "j": "B",
    };

    useEffect(() => {
        const keyboard = window.addEventListener("keydown", (e) => {
            console.log(e.key)
            const key = document.getElementById(controls[e.key]);
            console.log(key);
            if (key) {
                key.classList.add(styles['active']);
                console.log('alreadyfocus');
                key.click();

                const clean = setTimeout(() => {
                    key.classList.remove(styles['active']);
                    console.log('should be removed');
                    clearTimeout(clean);
                }, 1000)
            }
        })
        return () => {
            removeEventListener(keyboard, () => {});
        }
    }, [])

    const handleMenu = () => setMenu(!menu)
    const handleKey = (note) => {
        const synth = new Tone.Synth().toDestination();
        synth.volume.value = -100;
        const now = Tone.now();
        synth.triggerAttack(note + "4", "5n");
        synth.triggerRelease(now + 1);

        // const osc = new Tone.Oscillator(440, "sine").toDestination();
        // // repeated event every 8th note
        // Tone.Transport.scheduleRepeat((time) => {
        //     // use the callback time to schedule events
        //     osc.start(time).stop(time + 0.1);
        // }, "8n");
        // // transport must be started before it starts invoking events
        // Tone.Transport.start();
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu
                active={menu}
                handleMenu={handleMenu}
            />
            <FoldMenu
                sections={sections}
                active={menu}
                color={positions[color].color}
            />
            <main id="container" className={styles.main}>
                <div>
                    <h1>Victor Aguilera</h1>
                    <h2>Software Engineer</h2>
                </div>

                <div className={styles.keys}>
                    {
                        notes && notes.map((note, index) => {
                            return (
                                <div key={index} className={styles.keyContainer}>
                                    <div id={note} className={styles.key} onClick={() => handleKey(note)}>
                                    </div>
                                    {
                                        blackNotes[note] && (
                                            <div id={blackNotes[note]} className={`${styles.key} ${styles.blackKey}`} onClick={(e) => {
                                                e.preventDefault();
                                                handleKey(blackNotes[note])
                                            }
                                            }></div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </main>

        </div>
    )
}

Home.getInitialProps = async ({ req }) => {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const label = baseUrl + '/api/positions';
    const res = await fetch(label);
    const json = await res.json()
    return { positions: json.positions, sections: json.sections }
}
