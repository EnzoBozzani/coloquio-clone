import 'server-only';

export class AirtableHelper {
	private static baseUrl = process.env.AIRTABLE_BASE_URL!;
	private static apiKey = process.env.AIRTABLE_ACCESS_TOKEN!;

	static async get(route: string) {
		const res = await fetch(`${this.baseUrl}${route}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${this.apiKey}`,
			},
		});

		if (!res.ok) return { error: 'Algo deu errado!' };

		return res.json();
	}
}
