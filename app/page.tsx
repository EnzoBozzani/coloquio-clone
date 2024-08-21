import { ArrowDown } from '@carbon/icons-react';

import { MainHeader } from '@/components/MainHeader';
import { LectureService } from '@/services/LectureService';
import { HeroSection } from '@/components/HeroSection';
import { SpeakersSection } from '@/components/SpeakersSection';
import { SpeakerService } from '@/services/SpeakerService';
import { SpeakerModal } from '@/components/SpeakerModal';

import styles from './page.module.scss';

const HomePage = async () => {
	const speakersPromise = SpeakerService.getAll();
	const lecturesPromise = LectureService.getAll();

	const [speakers, lecture] = await Promise.all([speakersPromise, lecturesPromise]);

	return (
		<main className={styles.main}>
			<MainHeader />
			<div className={styles.pageContent}>
				<HeroSection />
				<div className={styles.arrowRow}>
					<a href='#speakers'>
						<ArrowDown />
					</a>
				</div>
				<SpeakersSection speakers={speakers} />
			</div>
			<SpeakerModal />
		</main>
	);
};

export default HomePage;
