'use client';

import { useEffect, useState } from 'react';

export const useScreenSize = () => {
	const [size, setSize] = useState<'max' | 'xlg' | 'lg' | 'md' | 'sm'>('sm');

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;

			const map = new Map<'max' | 'xlg' | 'lg' | 'md' | 'sm', [number, number]>();

			map.set('max', [1584, 10000]);
			map.set('xlg', [1312, 1583]);
			map.set('lg', [1056, 1311]);
			map.set('md', [672, 1055]);
			map.set('sm', [0, 671]);

			let size: 'max' | 'xlg' | 'lg' | 'md' | 'sm' = 'sm';

			map.forEach((interval, breakpoint) => {
				if (width >= interval[0] && width <= interval[1]) {
					size = breakpoint;
				}
			});

			setSize(size);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [setSize]);

	return size;
};
