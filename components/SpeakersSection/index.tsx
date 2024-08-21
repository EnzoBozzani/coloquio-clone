import styles from './styles.module.scss';
import { SpeakerCard } from '../SpeakerCard';

export const SpeakersSection = ({ speakers }: { speakers: Speaker[] }) => {
	return (
		<div className={styles.speakersSectionBg}>
			<section
				id='speakers'
				className={styles.speakersSection}
			>
				<div className={styles.titleSide}>
					<h3>Palestrantes</h3>
					<p>Conheça mais sobre cada palestrante que estará conosco neste Colóquio.</p>
				</div>
				<div className={styles.speakersSide}>
					{speakers.map((speaker) => (
						<SpeakerCard
							key={speaker.linkedin}
							speaker={speaker}
						/>
					))}
				</div>
			</section>
		</div>
	);
};
