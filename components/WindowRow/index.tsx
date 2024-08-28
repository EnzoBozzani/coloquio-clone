import { FormattedWindow } from '@/types';
import { cn } from '@/utils';

import styles from './styles.module.scss';

export interface WindowRowProps {
	window: FormattedWindow;
	index: number;
}

export const WindowRow = ({ window, index }: WindowRowProps) => {
	return (
		<div
			className={cn(styles.row)}
			style={{
				borderTop: index !== 0 ? '2px solid #8d8d8d' : '',
			}}
		>
			<div className={styles.time}>{window.startTime}</div>
			<div className={styles.info}>
				<p className={styles.title}>{window.title}</p>
				{window.speakerName && (
					<p>
						<strong>{window.speakerName}</strong>
					</p>
				)}
				{window.lectures && (
					<ul>
						{window.lectures.map((lecture) => (
							<li key={lecture.title}>
								<div>
									<span>{lecture.title}</span>
									<span className={styles.speakerName}>
										<strong>{lecture.speakerName}</strong>
									</span>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
