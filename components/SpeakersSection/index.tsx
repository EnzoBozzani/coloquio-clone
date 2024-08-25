import { Speaker } from '@/types';
import { cn } from '@/utils';

import styles from './styles.module.scss';
import { SpeakerCard } from '../SpeakerCard';

export const SpeakersSection = ({ speakers }: { speakers: Speaker[] }) => {
	return (
		<div className={styles.sectionBg}>
			<section
				id='speakers'
				className={cn(styles.section, 'cds--grid')}
			>
				<div className='cds--row'>
					<div
						className={cn(
							styles.titleSide,
							'cds--offset-md-1 cds--offset-lg-1 cds--col-md-6 cds--col-lg-5 cds--col-sm-4'
						)}
					>
						<h3 className='blue-slash'>Palestrantes</h3>
						<p>Conheça mais sobre cada palestrante que estará conosco neste Colóquio.</p>
					</div>
					<div
						className={cn(
							styles.speakersSide,
							'cds--offset-md-1 cds--offset-lg-0 cds--col-lg-9 cds--col-sm-4 cds--col-md-6'
						)}
					>
						{speakers.map((speaker) => (
							<SpeakerCard
								key={speaker.linkedin}
								speaker={speaker}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
