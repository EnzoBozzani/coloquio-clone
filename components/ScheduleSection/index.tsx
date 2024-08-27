import { FormattedWindow } from '@/types';
import styles from './styles.module.scss';

export interface ScheduleSectionProps {
	windows: FormattedWindow[];
}

export const ScheduleSection = ({ windows }: ScheduleSectionProps) => {
	return (
		<section
			id='schedule'
			className={styles.section}
		>
			{JSON.stringify(windows)}
		</section>
	);
};
