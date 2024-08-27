import { Theme } from '@carbon/react';

import { FormattedWindow } from '@/types';
import { cn } from '@/utils';

import styles from './styles.module.scss';

export interface ScheduleSectionProps {
	windows: FormattedWindow[];
}

export const ScheduleSection = ({ windows }: ScheduleSectionProps) => {
	return (
		<Theme theme='g10'>
			<section
				id='schedule'
				className={cn(styles.section, 'cds--grid')}
			>
				<div className='cds--row'>
					<div
						className={cn(
							styles.titleSide,
							'cds--offset-md-1 cds--offset-lg-1 cds--col-md-6 cds--col-lg-5 cds--col-sm-4'
						)}
					>
						<h3 className={styles.title}>Agenda</h3>
					</div>
					<div
						className={cn(
							styles.windowsSide,
							'cds--offset-md-1 cds--offset-lg-0 cds--col-lg-9 cds--col-sm-4 cds--col-md-6'
						)}
					>
						{windows.map((window) => (
							<div key={window.title}>
								{window.startTime} + {window.title}
							</div>
						))}
					</div>
				</div>
			</section>
		</Theme>
	);
};
