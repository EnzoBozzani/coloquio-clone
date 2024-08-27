'use client';

import Image from 'next/image';

import { useModal } from '@/hooks/use-modal';
import { Speaker } from '@/types';

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
		>
			<Image
				alt={speaker.name}
				width={200}
				height={200}
				src={speaker.image[0].url}
			/>
			<div className={styles.content}>
				<p className={styles.name}>{speaker.name}</p>
				<p className={styles.company}>{speaker.company}</p>
			</div>
		</div>
	);
};
