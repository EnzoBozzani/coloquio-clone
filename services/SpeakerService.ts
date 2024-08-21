export class SpeakerService {
	static async getAll() {
		const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/speaker`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});

		if (!res.ok) return [];

		return res.json() as Promise<Speaker[]>;
	}
}
