'use client';

import { useModal } from '@/hooks/use-modal';

import styles from './styles.module.scss';

export const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
	const { onOpen } = useModal();

	return (
		<div
			className={styles.speakerCard}
			key={speaker.linkedin}
			onClick={() => {
				onOpen(speaker);
			}}
			style={{
				backgroundImage: `linear-gradient(180deg, transparent 60%, #000), url(${process.env.NEXT_PUBLIC_SERVER_URL}${speaker.image})`,
				backgroundSize: `cover`,
				backgroundPosition: 'center',
			}}
		>
			<div className={styles.content}>
				<p className={styles.name}>{speaker.name}</p>
				<p className={styles.company}>{speaker.company}</p>
			</div>
		</div>
	);
};
