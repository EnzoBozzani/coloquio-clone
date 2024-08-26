export type Image = {
	id: string;
	width: number;
	height: number;
	url: string;
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
	start: string;
	end: string;
	lectures: string[];
};

export type Lecture = {
	id: string;
	title: string;
	speaker: string[];
	timeWindow: string[];
};

export type FormattedWindow = {
	title: string;
	start: string;
	end: string;
	speaker: Speaker | null;
	lectures: { title: string; speakerName: string }[];
};
