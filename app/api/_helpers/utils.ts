import 'server-only';

export const getFieldsAndId = (data: any) => data.records.map((record: any) => ({ id: record.id, ...record.fields }));
