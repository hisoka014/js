function inkLevels(inks) {
	arrInks = Object.values(inks);
	
	arrInks.sort((a, b) => a - b);
	
	return arrInks[0]
}

