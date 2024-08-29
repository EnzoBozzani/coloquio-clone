import { cn } from '@/utils';
import { customPhrases } from '@/constants';

import styles from './styles.module.scss';

export const VideoSection = () => {
	const { text, link, src } = customPhrases[Math.floor(Math.random() * customPhrases.length)];

	return (
		<section className={styles.section}>
			<video
				autoPlay
				loop
				muted
			>
				<source
					src='/lines-banner.webm'
					type='video/webm'
				/>
			</video>
			<div className={cn(styles.hidden, 'cds--grid cds--grid-full-width')}>
				<div className={cn(styles.hidden, 'cds--row')}>
					<div className={cn(styles.hidden, 'carbon-phrase cds--offset-lg-1 cds--col-lg-14')}></div>
					<div className={styles.box}>
						<h1>{text}</h1>
						{link ? (
							<h2>
								<br />–{' '}
								<a
									href={link}
									target='_blank'
									rel='noreferrer'
								>
									{src}↗
								</a>
							</h2>
						) : (
							false
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
