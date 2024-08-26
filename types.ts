export type Image = {
	id: string;
	width: number;
	height: number;
	url: string;
};

export type Speaker = {
	name: string;
	company: string;
	linkedin: string;
	image: Image[];
	bio: string;
	lecture: string;
};

export type TimeWindow = {
	title: string;
	start: string;
	end: string;
};

export type Lecture = {
	title: string;
	speaker_id: number;
	window_id: number;
};
