'use client';

import { Theme, Content } from '@carbon/react';
import { ArrowDown } from '@carbon/icons-react';
import { useEffect, useState, useTransition } from 'react';

import { MainHeader } from '@/components/MainHeader';
import { HeroSection } from '@/components/HeroSection';
import { SpeakersSection } from '@/components/SpeakersSection';
import { SpeakerModal } from '@/components/SpeakerModal';
import { speakers } from '@/constants/speakers';
import { Speaker } from '@/types';
import { SpeakerService } from '@/services/SpeakerService';

import styles from './page.module.scss';

const HomePage = () => {
	const [pending, startTransition] = useTransition();
	// const [speakers, setSpeakers] = useState<Speaker[]>([]);

	useEffect(() => {
		startTransition(async () => {
			const data = await SpeakerService.getAll();

			console.log(data);
		});
	}, []);

	return (
		<Theme theme='white'>
			<main className={styles.main}>
				<MainHeader />
				<Content className={styles.content}>
					<HeroSection />
					<div className={styles.arrowRow}>
						<a href='#speakers'>
							<ArrowDown />
						</a>
					</div>
					<SpeakersSection speakers={speakers} />
				</Content>
				<SpeakerModal />
			</main>
		</Theme>
	);
};

export default HomePage;
