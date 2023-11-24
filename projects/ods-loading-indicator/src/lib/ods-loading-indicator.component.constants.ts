const OdsLoadingIndicatorType =
{
	OVERLAY_ALL: "overlayAll" as "overlayAll",
	OVERLAY_SECTION: "overlaySection" as "overlaySection",
	INLINE_SECTION: "inlineSection" as "inlineSection"
	
};

type OdsLoadingIndicatorType = (typeof OdsLoadingIndicatorType)[keyof typeof OdsLoadingIndicatorType];

export{OdsLoadingIndicatorType};