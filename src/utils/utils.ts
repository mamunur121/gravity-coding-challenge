export const conditional_Colors = (level: Level) => {
	switch (level) {
		case "0":
			return "bgGreen";
		case "1":
			return "bgYellow";
		case "2":
			return "bgRed";
		default:
			return "bgWhite";
	}
};

export const select_item = (filter: Filter, item: Item) => {
	switch (filter) {
		case "all":
			return true;
		case "only_0":
			return item.level === "0";
		case "only_1":
			return item.level === "1";
		case "only_2":
			return item.level === "2";
		default:
			return true;
	}
};

export const text_uppercase = (text:string) => {
	return text
		.split("_")
		.map((item) => item[0].toUpperCase() + item.slice(1))
		.join(" ");
};
