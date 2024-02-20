function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	let ampm = date.toLocaleString("en", { hour: "numeric", hour12: true, minute: "2-digit", second: "2-digit" }).split(' ')[1];
	let hour = date.toLocaleString("en", { hour: "numeric", hour12: true }).split(' ')[0];
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "2-digit" });
	let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date"
	).innerHTML = `${ampm} ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();

