'use client';

import Image from 'next/image';
import { Time, Calendar, Location, ArrowRight } from '@carbon/icons-react';

import styles from './styles.module.scss';
import { Button } from '@carbon/react';
import Link from 'next/link';
import { cn } from '@/utils';

export const HeroSection = () => {
	return (
		<section className={cn('cds--grid', styles.section)}>
			<div className='cds--row'>
				<div className={cn('cds--col-sm-4 cds--col-md-4 cds--col-lg-8', styles.titleSide)}>
					<div className='cds--grid'>
						<h3 className={cn('cds--row', styles.ibmTitle)}>
							IBM <strong>Research</strong> Brasil
						</h3>
						<h1 className={cn('cds--row', styles.mainTitle)}>
							Colóquio <strong>2023</strong>
						</h1>
						<h3 className={cn('cds--row', styles.secondaryTitle)}>
							Tecnologias <span>responsáveis e inclusivas</span>
						</h3>
						<div className={cn(styles.info)}>
							<div>
								<div className={styles.iconRow}>
									<Time className={styles.icon} />
									<span>09:00 - 18:00</span>
								</div>
								<div className={styles.iconRow}>
									<Calendar className={styles.icon} />
									<span>16 de maio, evento presencial</span>
								</div>
								<div className={styles.iconRow}>
									<Location className={styles.icon} />
									<span>Rua Tutóia, 1157 - São Paulo</span>
								</div>
							</div>
							<div className={cn(styles.subscribeBtnDiv)}>
								<Button renderIcon={ArrowRight}>
									<Link href={'/'}>
										<span>Inscreva-se</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className={cn('cds--col-sm-0 cds--col-md-4 cds--col-lg-8', styles.imgSide)}>
					<div>
						<Image
							alt='hero section'
							src={'/hero.webp'}
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
