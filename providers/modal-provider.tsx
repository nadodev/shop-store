'use client'

import { StoreModal } from "@/components/modals/store-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(true)
    },[])

    if(!isOpen) {
        return null
    }

    return (
        <StoreModal />
    )
}