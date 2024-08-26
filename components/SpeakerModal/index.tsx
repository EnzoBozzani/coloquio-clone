'use client';

import { Modal } from '@carbon/react';
import Image from 'next/image';
import { LogoLinkedin, Close } from '@carbon/icons-react';

import { useModal } from '@/hooks/use-modal';
import { cn } from '@/utils';

import styles from './styles.module.scss';

export const SpeakerModal = () => {
	const { isOpen, onClose, speaker } = useModal();

	if (!speaker) return null;

	return (
		<Modal
			open={isOpen}
			onRequestClose={() => onClose()}
			passiveModal
			isFullWidth
			size='lg'
		>
			<div className={cn(styles.modalContent, 'cds--grid')}>
				<div className='cds--row'>
					<div className={cn(styles.imageSide, 'cds--col')}>
						<Image
							src={`${speaker.image[0].url}`}
							alt={`Convidado ${speaker.name}`}
							height={400}
							width={300}
						/>
					</div>
					<div className={cn(styles.textSide, 'cds--col')}>
						<span className={styles.header}>
							<Close onClick={() => onClose()} />
						</span>
						<span className={styles.title}>
							<h2>{speaker.name}</h2>
							<LogoLinkedin onClick={() => window.open(speaker.linkedin)} />
						</span>
						<span>
							<h4>{speaker.company}</h4>
						</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quae debitis, suscipit
							consectetur est accusamus adipisci odio. Omnis fugit ipsum in. Aspernatur hic at aliquam
							provident maxime voluptatem necessitatibus delectus quo, obcaecati corrupti corporis vitae
							eius alias itaque dolores esse, cum quibusdam earum adipisci autem aut? Atque, animi.
							Numquam neque ad eius, harum enim necessitatibus quo sint maiores? Est perspiciatis
							similique perferendis molestias, neque odit error eum labore. Molestias numquam et
							consequatur deserunt doloremque eius inventore quas temporibus nesciunt dignissimos delectus
							natus, ad tenetur quasi beatae commodi saepe quae? Repellendus ad dignissimos nisi ullam aut
							numquam earum eius commodi? Eveniet eius dicta aliquam voluptate ducimus consequuntur
							temporibus? Laborum ipsam molestias ad quis accusamus sint corporis atque suscipit maxime
							temporibus sed amet error quibusdam, corrupti delectus iusto, sunt odit velit alias
							aspernatur assumenda facilis. Ea laudantium, commodi corrupti nam maxime praesentium vitae
							quia mollitia itaque eligendi delectus necessitatibus veritatis deleniti, iure suscipit
							voluptas tempora, minus eveniet vel quasi voluptatem aut quisquam adipisci similique? Sit
							suscipit itaque provident facere neque, aliquid voluptate a! Deleniti nisi debitis
							praesentium ab eius dolore aspernatur et, consectetur quisquam consequuntur nesciunt soluta
							quia, aperiam fugiat, cumque amet ipsam voluptas ad suscipit provident eos consequatur quas!
							Dignissimos nisi modi error. Accusantium ducimus quidem quia impedit ratione at dolores
							blanditiis itaque? Dicta quae necessitatibus nulla error placeat fugit, quod minima
							temporibus, esse deserunt hic. Debitis voluptates dignissimos expedita sint asperiores
							voluptatibus corrupti necessitatibus. Reiciendis culpa illum itaque fugit eaque eos officiis
							consequatur distinctio odit aut mollitia quisquam cumque fuga libero molestias provident
							iste, error molestiae qui officia ipsum corporis vero velit. Voluptates consequuntur
							voluptatem dolore aut unde. Numquam voluptas quibusdam nisi architecto asperiores officiis
							similique inventore sapiente animi, eos quos eius blanditiis perferendis fugit dolorum
							doloribus cum, ipsam natus? Aliquam voluptate quisquam aut laborum accusamus iste suscipit
							voluptatum? Dolorem mollitia culpa architecto. Eum repellat omnis ad eveniet ducimus dolor,
							nam natus tempore eos quibusdam. Eum architecto veritatis cum, quae illum, voluptates eos
							molestias delectus distinctio odio numquam ipsum. Hic reiciendis alias iure quaerat ad eius
							praesentium labore architecto saepe adipisci. Quo quis quidem reiciendis omnis tempore
							consectetur modi nemo sequi! Tempora amet suscipit ullam iusto unde odit corporis, dolore
							quae iure corrupti! Ex doloribus, laborum, quaerat minus nesciunt cumque voluptas minima
							consequuntur temporibus excepturi sequi, ullam neque nemo dolores fugiat. Eaque nesciunt
							veniam, minus voluptas sed, molestias eos ut impedit illo laboriosam est, nulla rem aliquam.
							Tempora ducimus possimus non fugit necessitatibus consectetur corporis quas aut ratione
							recusandae amet, nobis voluptate, vero culpa accusantium eos facere beatae voluptas. Enim,
							perspiciatis impedit aperiam cupiditate nihil rerum mollitia blanditiis repellat tenetur
							repellendus voluptatem odio veniam maxime aliquid molestias fugiat! Repellat, eveniet
							architecto impedit recusandae iste quia ad esse at error odio labore vero. Sed quos, ipsam
							sapiente facilis blanditiis unde sequi sint eum facere quis qui veniam, dolore pariatur
							numquam illum, aliquam earum error odit esse temporibus porro iste. Natus possimus
							consequuntur maxime quis velit tempora nam inventore vero, quia doloribus atque laudantium
							excepturi ex delectus necessitatibus dicta eius fugiat enim ea voluptatum explicabo est.
							Repudiandae id pariatur itaque quaerat repellat libero sequi voluptatum reiciendis, at a
							recusandae molestiae, commodi ipsam dolorum aspernatur quam, quibusdam ipsa sint numquam
							quasi! Deserunt velit quod quas, beatae ullam consequatur assumenda, sequi quia dolorum
							repellendus eius commodi ratione. Vero amet incidunt obcaecati libero eveniet modi facilis,
							praesentium id dolore doloremque consequatur tenetur earum. Molestias delectus possimus
							nihil facere enim beatae voluptates, fugit sunt deserunt laudantium minus nobis animi totam!
							Animi unde cupiditate deserunt, dolorum vero nulla odit obcaecati nemo nihil illum minus in
							laudantium quasi harum tempore vel quo sequi? Nemo obcaecati dolores soluta libero?
						</p>
					</div>
				</div>
			</div>
		</Modal>
	);
};
