export type Admin = {
	id: number;
	email: string;
	hashed_password: string;
};

export type Speaker = {
	id: number;
	name: string;
	company: string;
	linkedin: string;
	image: string;
	bio: string;
};

export type TimeWindow = {
	id: number;
	title: string;
	start: string;
	end: string;
};

export type Lecture = {
	id: number;
	title: string;
	speaker_id: number;
	window_id: number;
};
