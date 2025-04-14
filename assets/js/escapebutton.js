/*
 * File: escapebutton.js
 * Project: escape-button-wordpress
 *
 * Created by Brendan Michaelsen on January 9, 2022 at 2:11 PM
 * Copyright © 2022 - 2024 Our Wave, Inc. All rights reserved.
 *
 * Last Modified: April 10, 2024 at 10:24 AM
 * Modified By: Brendan Michaelsen
 */

// Define configuration
const config = {
	newTabUrl: undefined,
	replaceTabUrl: undefined,
};

// Set up config
const newTabUrl =
	config.newTabUrl != null
		? config.newTabUrl
		: "https://www.amazon.com/?search=newest-deals-today/490239040234023942342i04203904";
const replaceTabUrl =
	config.replaceTabUrl != null
		? config.replaceTabUrl
		: "https://www.amazon.com/b/?_encoding=UTF8&node=1063278&ref_=cct_cg_Explore_1a1&pf_rd_p=a55f207c-6283-46d9-aeb3-4967ef77df9c&pf_rd_r=AGN3GQJSGC6CBVN6TW83";

// Define leave handler
const handleLeavePage = () => {
	document.body.innerHTML = "";
	window.open(newTabUrl, "_newtab");
	window.location.replace(replaceTabUrl);
};

// Show escape button
const elements = document.querySelectorAll(".ow-leave-page-fab.script-enabled");
for (let i = 0; i < elements.length; i += 1) {
	elements[i].style.display = "block";
}

// Handle escape button logic
document.addEventListener("click", (event) => {
	// Ignore if incorrect selector
	if (!event.target.closest(".ow-leave-page-fab.script-enabled")) return;

	// Handle leave page logic
	handleLeavePage();
});
