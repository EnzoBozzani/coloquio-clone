import Link from 'next/link';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

import { cn } from '@/utils';

import styles from './styles.module.scss';

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
	return (
		<footer className={cn(styles.footer, 'cds--grid')}>
			<div className={cn('cds--row', styles.titleRow)}>
				<div className='cds--offset-lg-1 cds--offset-md-1 cds--col-lg-14 cds--col-md-6'>
					<h1>
						<strong>Colóquio 2023</strong>&nbsp;|&nbsp;
						<em>
							Tecnologias <span>responsáveis e inclusivas</span>
						</em>
					</h1>
				</div>
			</div>
			<div className={cn('cds--row', styles.btnRow)}>
				<div className='cds--offset-lg-1 cds--offset-md-1 cds--col-lg-14 cds--col-md-6'>
					<Button renderIcon={ArrowRight}>
						<Link href={'/'}>
							<span>Inscreva-se</span>
						</Link>
					</Button>
				</div>
			</div>
			<div className={cn('cds--row', styles.ibmRow)}>
				<div className='cds--offset-lg-1 cds--offset-md-1 cds--col-lg-14 cds--col-md-6'>
					<h3>
						IBM <strong>Research</strong> Brasil
					</h3>
				</div>
			</div>
		</footer>
	);
};
