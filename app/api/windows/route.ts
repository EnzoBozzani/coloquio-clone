import { NextResponse } from 'next/server';

import { AirtableHelper } from '../_helpers/airtable';

export async function GET() {
	const res = await AirtableHelper.get('/timeWindows');

	if (res.error) return NextResponse.json({ error: 'Algo deu errado!' }, { status: 400 });

	const speakers = res.records.map((record: any) => record.fields);

	return NextResponse.json(speakers);
}
