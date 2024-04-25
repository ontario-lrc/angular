const OdsLoadingIndicatorType =
{
	INLINE_SECTION: "inlineSection",
	OVERLAY_ALL: "overlayAll",
	OVERLAY_SECTION: "overlaySection"
} as const;

type OdsLoadingIndicatorType = (typeof OdsLoadingIndicatorType)[keyof typeof OdsLoadingIndicatorType];

export {OdsLoadingIndicatorType};