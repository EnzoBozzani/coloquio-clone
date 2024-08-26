'use client';

import { Loading } from '@carbon/react';
import { useLoading } from '@/hooks/use-loading';

export const Loader = () => {
	const { loading } = useLoading();

	return (
		<div>
			<Loading
				withOverlay
				active={loading}
			/>
		</div>
	);
};
