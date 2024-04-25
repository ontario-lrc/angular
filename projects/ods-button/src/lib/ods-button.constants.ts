const OdsButtonDegree =
	{
		PRIMARY: "primary",
		SECONDARY: "secondary",
		TERTIARY: "tertiary"
	} as const,
	OdsButtonColour =
	{
		DEFAULT: "default",
		GREEN: "green",
		RED: "red"
	} as const;

type OdsButtonDegree = (typeof OdsButtonDegree)[keyof typeof OdsButtonDegree];

type OdsButtonColour = (typeof OdsButtonColour)[keyof typeof OdsButtonColour];

export {OdsButtonDegree};
export {OdsButtonColour};