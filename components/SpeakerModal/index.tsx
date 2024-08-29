'use client';

import { Modal } from '@carbon/react';
import Image from 'next/image';
import { LogoLinkedin, Close } from '@carbon/icons-react';

import { useModal } from '@/hooks/use-modal';
import { cn } from '@/utils';

import styles from './styles.module.scss';
import { useScreenSize } from '@/hooks/use-screen-size';

export const SpeakerModal = () => {
	const { isOpen, onClose, speaker } = useModal();

	const screenSize = useScreenSize();

	if (!speaker) return null;

	const higherThanSm = screenSize !== 'sm';

	return (
		<Modal
			open={isOpen}
			onRequestClose={() => onClose()}
			passiveModal
			isFullWidth
			size='lg'
		>
			<div className={cn(styles.modalContent, higherThanSm && 'cds--grid')}>
				<div className={cn(higherThanSm && 'cds--row')}>
					<div className={cn(styles.imageSide, higherThanSm && 'cds--col')}>
						<Image
							src={`${speaker.image[0].url}`}
							alt={`Convidado ${speaker.name}`}
							width={300}
							height={300}
						/>
					</div>
					<div className={cn(styles.textSide, higherThanSm && 'cds--col')}>
						<span className={styles.header}>
							<Close onClick={() => onClose()} />
						</span>
						<span className={styles.title}>
							<h2>{speaker.name}</h2>
							<LogoLinkedin onClick={() => window.open(speaker.linkedin)} />
						</span>
						<span>
							<h4>{speaker.company}</h4>
						</span>
						<p>{speaker.bio}</p>
					</div>
				</div>
			</div>
		</Modal>
	);
};
