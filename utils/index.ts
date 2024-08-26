import { Lecture, Image, Speaker, TimeWindow } from '@/types';

export const cn = (...classes: string[]) => {
	return classes.join(' ');
};

export const getAllData = async () => {
	const speakersPromise = fetch('/api/speakers');
	const lecturesPromise = fetch('/api/lectures');
	const windowsPromise = fetch('/api/windows');

	const [speakersRes, lecturesRes, windowsRes] = await Promise.all([
		speakersPromise,
		lecturesPromise,
		windowsPromise,
	]);

	const [speakers, lectures, windows] = await Promise.all([
		speakersRes.json(),
		lecturesRes.json(),
		windowsRes.json(),
	]);

	return { speakers, lectures, windows };
};

export const formatData = ({
	windows,
	lectures,
	speakers,
}: {
	windows: Window[];
	lectures: Lecture[];
	speakers: Speaker[];
}) => {};
