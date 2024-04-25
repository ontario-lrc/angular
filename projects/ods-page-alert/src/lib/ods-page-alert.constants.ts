const OdsPageAlertType =
	{
		ERROR: "error",
		INFORMATION: "information",
		SUCCESS: "success",
		WARNING: "warning"
	} as const,
	OdsPageAlertHeadingLevel =
	{
		H1: "h1",
		H2: "h2",
		H3: "h3",
		H4: "h4",
		H5: "h5",
		H6: "h6"
	} as const;

type OdsPageAlertType = (typeof OdsPageAlertType)[keyof typeof OdsPageAlertType];

type OdsPageAlertHeadingLevel = (typeof OdsPageAlertHeadingLevel)[keyof typeof OdsPageAlertHeadingLevel];

export {OdsPageAlertType, OdsPageAlertHeadingLevel};