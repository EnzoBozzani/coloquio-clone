import { NextResponse } from 'next/server';

import { AirtableHelper } from '../_helpers/airtable';
import { getFieldsAndId } from '../_helpers/utils';

export async function GET() {
	const res = await AirtableHelper.get('/speakers');

	if (res.error) return NextResponse.json({ error: 'Algo deu errado!' }, { status: 400 });

	const speakers = getFieldsAndId(res);

	return NextResponse.json(speakers);
}
