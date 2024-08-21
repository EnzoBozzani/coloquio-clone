import { create } from 'zustand';

type ModalStore = {
	isOpen: boolean;
	onOpen: (speaker: Speaker) => void;
	onClose: () => void;
	speaker: Speaker | null;
};

export const useModal = create<ModalStore>((set) => ({
	isOpen: false,
	onOpen: (speaker: Speaker) => set({ isOpen: true, speaker }),
	onClose: () => set({ isOpen: false, speaker: null }),
	speaker: null,
}));
