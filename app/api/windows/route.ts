import { NextResponse } from 'next/server';

import { AirtableHelper } from '../_helpers/airtable';
import { getFieldsAndId } from '../_helpers/utils';

export async function GET() {
	const res = await AirtableHelper.get('/timeWindows');

	if (res.error) return NextResponse.json({ error: 'Algo deu errado!' }, { status: 400 });

	const windows = getFieldsAndId(res);

	return NextResponse.json(windows);
}
