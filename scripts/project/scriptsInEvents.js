


const scriptsInEvents = {

	async MainmenuEs_Event8_Act1(runtime, localVars)
	{
		const arabicRegex = /[\u0600-\u06FF]/; // Range of Arabic Unicode characters
		const textToCheck = localVars["text"]; // Replace with the text you want to check
		
		const hasArabic = arabicRegex.test(textToCheck);
		const returnValue = hasArabic ? 1 : 0;
		
		runtime.setReturnValue(returnValue);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

