"use client"

import { useStoreModal } from "@/hooks/use-store-modals"
import { Modal } from "@/components/ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
    <Modal
    title = "Create Store"
    description = "Add a new store to manage products and categories."
    isOpen = { storeModal.isOpen }
    onClose = { storeModal.onClose }
    >
        Future Create Store form
    </Modal>
    )
}