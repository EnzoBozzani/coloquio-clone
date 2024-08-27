'use client';

import { Theme, Content } from '@carbon/react';
import { ArrowDown } from '@carbon/icons-react';
import { useEffect, useState, useTransition } from 'react';

import { MainHeader } from '@/components/MainHeader';
import { HeroSection } from '@/components/HeroSection';
import { SpeakersSection } from '@/components/SpeakersSection';
import { SpeakerModal } from '@/components/SpeakerModal';
import { FormattedWindow, Speaker } from '@/types';
import { formatData, getAllData } from '@/utils';
import { useLoading } from '@/hooks/use-loading';
import { Loader } from '@/components/Loader';

import styles from './page.module.scss';
import { ScheduleSection } from '@/components/ScheduleSection';

const HomePage = () => {
	const [speakers, setSpeakers] = useState<Speaker[]>([]);
	const [windows, setWindows] = useState<FormattedWindow[]>([]);

	const { loading, setLoading } = useLoading();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const data = await getAllData();

			setSpeakers(data.speakers);
			setWindows(formatData({ windows: data.windows, lectures: data.lectures, speakers: data.speakers }));
			setLoading(false);
		};
		fetchData();
	}, [setLoading]);

	return (
		<Theme theme='white'>
			<Loader />
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
					<ScheduleSection windows={windows} />
				</Content>
				<SpeakerModal />
			</main>
		</Theme>
	);
};

export default HomePage;
