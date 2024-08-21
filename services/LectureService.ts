export class LectureService {
	static async getAll() {
		const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/lecture`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});

		return res.json();
	}
}
