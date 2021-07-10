import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/components/Curve.module.css'

export default function Curve({
    elements,
}) {
    return (
        <Image
            src="curvess.png"
            alt="curve"
            width="1800px"
            height="88px"
        />
    )
}