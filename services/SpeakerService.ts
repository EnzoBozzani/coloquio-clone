import { Speaker } from '@/types';

export class SpeakerService {
	static async getAll() {
		const res = await fetch(`/api/speakers`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});

		if (!res.ok) return [];

		return res.json();
	}
}
