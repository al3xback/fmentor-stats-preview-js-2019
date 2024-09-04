const cardEl = document.querySelector('.card');

/* Array flat() */
const dummyImageProps = [
	['width', 420],
	['height', 320],
];

const imageProps = dummyImageProps.flat();

const cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.setAttribute('width', imageProps[1]);
cardImageEl.setAttribute('height', imageProps[3]);

/* Optional catch binding */
function getMarkText() {
	return 'Equilibrium';
}

let markText;
try {
	markText = getMarkText();
} catch {
	console.log(markText);
}

/* String trimStart() and trimEnd() */
const dummyDescription =
	'  Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.  ';
const description = dummyDescription.trimStart().trimEnd();

const cardDescriptionEl = cardEl.querySelector('.card__desc');
cardDescriptionEl.textContent = description;

/* Object fromEntries() */
const dummyStatusLabels = [
	[0, 'Companies'],
	[1, 'Templates'],
	[2, 'Queries'],
];
const statusLabels = Object.fromEntries(dummyStatusLabels);

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');

let i = 0;
for (const key in statusLabels) {
	cardStatusItemEls[i].querySelector('.label').textContent =
		statusLabels[key];
	i++;
}
