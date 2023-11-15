const OdsLoadingIndicatorType =
{
	OVERLAY: "overlay" as "overlay",
	SECTION: "section" as "section"
};

type OdsLoadingIndicatorType = (typeof OdsLoadingIndicatorType)[keyof typeof OdsLoadingIndicatorType];

export{OdsLoadingIndicatorType};