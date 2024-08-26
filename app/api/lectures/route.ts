import { NextResponse } from 'next/server';

import { AirtableHelper } from '../_helpers/airtable';
import { getFieldsAndId } from '../_helpers/utils';

export async function GET() {
	const res = await AirtableHelper.get('/lectures');

	if (res.error) return NextResponse.json({ error: 'Algo deu errado!' }, { status: 400 });

	const lectures = getFieldsAndId(res);

	return NextResponse.json(lectures);
}
