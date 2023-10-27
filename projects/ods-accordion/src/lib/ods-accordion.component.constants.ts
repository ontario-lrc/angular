const OdsAccordionHeadingLevel =
{
	H1: "h1" as "h1",
	H2: "h2" as "h2",
	H3: "h3" as "h3",
	H4: "h4" as "h4",
	H5: "h5" as "h5",
	H6: "h6" as "h6"
};

type OdsAccordionHeadingLevel = (typeof OdsAccordionHeadingLevel)[keyof typeof OdsAccordionHeadingLevel]