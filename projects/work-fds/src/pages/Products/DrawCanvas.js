import React, { useEffect, useRef } from 'react';
import beforeImg from './img/before.jpg';
import afterImg from './img/moderna.jpg';

const DrawCanvas = () => {
	const illustrationImageRef = useRef(null);
	const imageCanvasRef = useRef(null);
	const lineCanvasRef = useRef(null);

	useEffect(() => {
		if (illustrationImageRef.current) {
			const image = illustrationImageRef.current;
			const imageCanvas = imageCanvasRef.current;
			const imageCanvasContext = imageCanvas.getContext('2d');
			const lineCanvas = lineCanvasRef.current;
			const lineCanvasContext = lineCanvas.getContext('2d');
			const pointLifetime = 3000;
			let points = [];

			function onMouseMove(event) {
				var rect = imageCanvas.getBoundingClientRect();

				points.push({
					time: Date.now(),
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
				});
			}

			let isDrawing = false;

			function onTouchStart(event) {
				isDrawing = true;
			}

			function onTouchMove(event) {
				if (!isDrawing) {
					return;
				}
				var touch = event.targetTouches[0];
				var rect = imageCanvas.getBoundingClientRect();
				points.push({
					time: Date.now(),
					x: touch.clientX - rect.left,
					y: touch.clientY - rect.top,
				});
				// requestAnimationFrame(renderCanvas);
			}

			function onTouchEnd(event) {
				isDrawing = false;
				// debounce(renderCanvas, 100)();
			}

			function renderCanvas() {
				// clearCanvas();
				// drawPoints();
			}

			function debounce(func, wait) {
				let timeout;
				return function (...args) {
					const context = this;
					clearTimeout(timeout);
					timeout = setTimeout(() => func.apply(context, args), wait);
				};
			}

			function throttle(func, limit) {
				let lastFunc;
				let lastRan;
				return function (...args) {
					const context = this;
					if (!lastRan) {
						func.apply(context, args);
						lastRan = Date.now();
					} else {
						clearTimeout(lastFunc);
						lastFunc = setTimeout(() => {
							if (Date.now() - lastRan >= limit) {
								func.apply(context, args);
								lastRan = Date.now();
							}
						}, limit - (Date.now() - lastRan));
					}
				};
			}

			// function onTouchMove(event) {
			// 	var touch = event.targetTouches[0];
			// 	var rect = imageCanvas.getBoundingClientRect();

			// 	points.push({
			// 		time: Date.now(),
			// 		x: touch.clientX - rect.left,
			// 		y: touch.clientY - rect.top,
			// 	});
			// }

			const resizeCanvases = () => {
				if (document.querySelector('.photoContainer')) {
					imageCanvas.width = lineCanvas.width =
						document.querySelector('.photoContainer').offsetWidth;
					imageCanvas.height = lineCanvas.height =
						document.querySelector('.photoContainer').offsetHeight;
				}
			};

			const tick = () => {
				// Remove old points
				points = points.filter(function (point) {
					const age = Date.now() - point.time;
					return age < pointLifetime;
				});

				drawLineCanvas();
				drawImageCanvas();
				requestAnimationFrame(tick);
			};

			const drawLineCanvas = () => {
				const minimumLineWidth = 150;
				const maximumLineWidth = 150;
				const lineWidthRange = maximumLineWidth - minimumLineWidth;
				const maximumSpeed = 300;

				lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
				lineCanvasContext.lineCap = 'round';

				for (let i = 1; i < points.length; i++) {
					const point = points[i];
					const previousPoint = points[i - 1];

					// Change line width based on speed
					const distance = getDistanceBetween(point, previousPoint);
					const speed = Math.max(0, Math.min(maximumSpeed, distance));
					const percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
					lineCanvasContext.lineWidth =
						minimumLineWidth + percentageLineWidth * lineWidthRange;

					// Fade points as they age
					const age = Date.now() - point.time;
					const opacity = (pointLifetime - age) / pointLifetime;
					lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';

					lineCanvasContext.beginPath();
					lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
					lineCanvasContext.lineTo(point.x, point.y);
					lineCanvasContext.stroke();
				}
			};

			const getDistanceBetween = (a, b) => {
				return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
			};

			const drawImageCanvas = () => {
				if (document.querySelector('.drawCanvas') != null) {
					imageCanvas.width = document.querySelector('.drawCanvas').offsetWidth;
					imageCanvas.height = document.querySelector('.drawCanvas').offsetHeight;
				}

				// Emulate background-size: cover

				let width = imageCanvas.width;
				let height = (imageCanvas.width / image.naturalWidth) * image.naturalHeight;

				if (height < imageCanvas.height) {
					width = (imageCanvas.height / image.naturalHeight) * image.naturalWidth;
					height = imageCanvas.height;
				}

				imageCanvasContext.clearRect(0, 0, width, height);
				imageCanvasContext.globalCompositeOperation = 'source-over';
				imageCanvasContext.drawImage(image, 0, 0, width, height);
				imageCanvasContext.globalCompositeOperation = 'destination-in';
				imageCanvasContext.drawImage(lineCanvas, 0, 0);
			};

			const start = () => {
				imageCanvas.addEventListener('mousemove', onMouseMove);
				// imageCanvas.addEventListener('touchmove', onTouchMove);
				imageCanvas.addEventListener('touchstart', onTouchStart, false);
				imageCanvas.addEventListener('touchmove', throttle(onTouchMove, 16), false);
				imageCanvas.addEventListener('touchend', onTouchEnd, false);
				window.addEventListener('resize', resizeCanvases);
				document.querySelector('.drawCanvas').appendChild(imageCanvas);
				resizeCanvases();
				tick();
			};

			if (image.complete) {
				start();
				// console.log(true);
			} else {
				image.onload = start;
			}
		}
	}, []);

	return (
		<div className='drawCanvas' style={{ backgroundImage: `url(${beforeImg})` }}>
			<img
				className='illustrationImage'
				src={afterImg}
				alt=''
				ref={illustrationImageRef}
			/>
			<canvas className='' ref={imageCanvasRef} />
			<canvas className='' ref={lineCanvasRef} />
		</div>
	);
};

export default DrawCanvas;
