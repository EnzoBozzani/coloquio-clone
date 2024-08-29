import { Lecture, Speaker, FormattedWindow, TimeWindow } from '@/types';

export const cn = (...classes: (string | null | undefined | boolean)[]) => {
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
	windows: TimeWindow[];
	lectures: Lecture[];
	speakers: Speaker[];
}) => {
	const formattedWindows: FormattedWindow[] = windows.map((w) => ({
		title: w.title,
		startTime: w.startTime,
		speakerName: w.speaker ? speakers.find((speaker) => speaker.id === w.speaker[0])?.name || null : null,
		lectures: w.lectures
			? w.lectures
					.map((lectureId) => {
						const foundLecture = lectures.find((l) => l.id === lectureId);
						if (foundLecture) {
							return {
								title: foundLecture.title,
								speakerName: foundLecture.speakerName[0],
							};
						}

						return null;
					})
					.filter((l) => l !== null)
			: null,
	}));

	return formattedWindows.sort((windowA, windowB) => {
		const startA = Number(windowA.startTime.split(':')[0]) + Number(windowA.startTime.split(':')[1]) / 60;
		const startB = Number(windowB.startTime.split(':')[0]) + Number(windowB.startTime.split(':')[1]) / 60;

		return startA - startB;
	});
};
