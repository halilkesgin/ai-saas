"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("d0b70019-5d50-46b8-a59d-cee4c6d1d25b");
    }, [])

    return null;
}