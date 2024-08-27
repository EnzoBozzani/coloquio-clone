type ImageBase = {
	width: number;
	height: number;
	url: string;
};

export type Image = ImageBase & {
	id: string;
	thumbnails: {
		full: ImageBase;
		large: ImageBase;
		small: ImageBase;
	};
};

export type Speaker = {
	id: string;
	name: string;
	company: string;
	linkedin: string;
	image: Image[];
	bio: string;
};

export type TimeWindow = {
	id: string;
	title: string;
	startTime: string;
	speaker: string[];
	lectures: string[] | null;
};

export type Lecture = {
	id: string;
	title: string;
	speaker: string[];
	timeWindow: string[];
	speakerName: string[];
};

export type FormattedWindow = {
	title: string;
	startTime: string;
	speakerName: string | null;
	lectures: { title: string; speakerName: string }[] | null;
};
