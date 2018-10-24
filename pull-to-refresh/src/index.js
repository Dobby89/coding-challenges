import "./style.scss";

const transparentImage = new Image();
transparentImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';

const refreshIndicator = document.querySelector('.refresh-indicator');
const dragFriction = 0.3;
let offsetYStart = null;
let offsetYEnd = null;
let refreshHeightMax = 100;

function calculateDragDistance(startPos, endPos) {
	return Math.ceil(endPos - startPos);
}

function calculateHeight(dragDistance, friction, maxHeight) {
	let refreshIndicatorHeight = dragDistance * friction;
	refreshIndicatorHeight = refreshIndicatorHeight > 0 ? Math.ceil(refreshIndicatorHeight) : 0;
	refreshIndicatorHeight = refreshIndicatorHeight >= maxHeight ? maxHeight : refreshIndicatorHeight;
	return refreshIndicatorHeight;
}

document.addEventListener('drag', event => {
	const { offsetY } = event;
	const dragDistance = calculateDragDistance(offsetYStart, offsetY);
	const refreshIndicatorHeight = calculateHeight(dragDistance, dragFriction, refreshHeightMax);

	refreshIndicator.style.height = refreshIndicatorHeight > 0 ? `${refreshIndicatorHeight}px` : 0;
}, false);

document.addEventListener('dragstart', event => {
	// refreshIndicator.style.transition = 'none';
	offsetYStart = event.offsetY;

	// Set a transparent ghost image
	event.dataTransfer.setDragImage(transparentImage, 0, 0);
});

document.addEventListener('dragend', event => {
	offsetYEnd = event.offsetY;

	const dragDistance = calculateDragDistance(offsetYStart, offsetYEnd);
	const refreshIndicatorHeight = calculateHeight(dragDistance, dragFriction, refreshHeightMax);

	if (refreshIndicatorHeight >= refreshHeightMax) {
		// Lock height while refresh is triggered
		refreshIndicator.style.height = `${refreshHeightMax}px`;

		// Slight delay to spoof a server
		setTimeout(() => {
			location.reload();
		}, 1000);
	} else {
		refreshIndicator.style.transition = 'height 0.3s cubic-bezier(0.175, 0.885, 0.22, 1.275)';
		refreshIndicator.style.height = 0;
	}
});
