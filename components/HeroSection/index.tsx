'use client';

import Image from 'next/image';
import { Time, Calendar, Location, ArrowRight } from '@carbon/icons-react';

import styles from './styles.module.scss';
import { Button } from '@carbon/react';
import Link from 'next/link';

export const HeroSection = () => {
	return (
		<section className={styles.heroSection}>
			<div className={styles.titleSide}>
				<div>
					<h3 className={styles.ibmTitle}>
						IBM <strong>Research</strong> Brasil
					</h3>
					<h1 className={styles.mainTitle}>
						Colóquio <strong>2023</strong>
					</h1>
					<h3 className={styles.subtitle}>
						Tecnologias <span className='highlight'>responsáveis e inclusivas</span>
					</h3>
					<div className={styles.info}>
						<div className={styles.infoRow}>
							<Time className={styles.icon} />
							<span>09:00 - 18:00</span>
						</div>
						<div className={styles.infoRow}>
							<Calendar className={styles.icon} />
							<span>16 de maio, evento presencial</span>
						</div>
						<div className={styles.btnRow}>
							<div className={styles.infoRow}>
								<Location className={styles.icon} />
								<span>Rua Tutóia, 1157 - São Paulo</span>
							</div>
							<Button className={styles.subscribeBtn}>
								<Link href={'/'}>
									<span>Inscreva-se</span>
									<ArrowRight />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.imgSide}>
				<div>
					<Image
						alt='hero section'
						src={'/hero.webp'}
						width={300}
						height={300}
					/>
				</div>
			</div>
		</section>
	);
};
