import { useEffect } from 'react';// Import your SCSS file
import myImage from'../../assets/images/face.png';
import illustrationImage from '../../assets/images/face-after.png';

export default function DrawCanvas() {
  useEffect(() => {
    const imageCanvas = document.createElement("canvas");
    const imageCanvasContext = imageCanvas.getContext("2d");
    const lineCanvas = document.createElement("canvas");
    const lineCanvasContext = lineCanvas.getContext("2d");
    const pointLifetime = 1000;
    let points = [];

    const image = document.querySelector(".illustrationImage") as HTMLImageElement;

    const start = () => {
      imageCanvas.addEventListener("mousemove", onMouseMove);
      imageCanvas.addEventListener("touchmove", onTouchMove);
      window.addEventListener("resize", resizeCanvases);
      document.querySelector(".drawCanvas")?.appendChild(imageCanvas);
      resizeCanvases();
      tick();
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = imageCanvas.getBoundingClientRect();
      points.push({
        time: Date.now(),
        x: event.pageX - rect.left,
        y: event.pageY - rect.top,
      });
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.targetTouches[0];
      const rect = imageCanvas.getBoundingClientRect();
      points.push({
        time: Date.now(),
        x: touch.pageX - rect.left,
        y: touch.pageY - rect.top,
      });
    };

    const resizeCanvases = () => {
      if (imageCanvas && lineCanvas) {
        imageCanvas.width = lineCanvas.width = document.querySelector('.photoContainer')?.offsetWidth || 0;
        imageCanvas.height = lineCanvas.height = document.querySelector('.photoContainer')?.offsetHeight || 0;
      }
    };

    const tick = () => {
			// Remove old points
      points = points.filter((point) => {
        const age = Date.now() - point.time;
        return age < pointLifetime;
      });

      drawLineCanvas();
      drawImageCanvas();
      requestAnimationFrame(tick);
    };

    const drawLineCanvas = () => {
      const minimumLineWidth = 80;
      const maximumLineWidth = 80;
      const lineWidthRange = maximumLineWidth - minimumLineWidth;
      const maximumSpeed = 100;

      if (lineCanvasContext) {
        lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
        lineCanvasContext.lineCap = "round";

        for (let i = 1; i < points.length; i++) {
          const point = points[i];
          const previousPoint = points[i - 1];

					 // Change line width based on speed
          const distance = getDistanceBetween(point, previousPoint);
          const speed = Math.max(0, Math.min(maximumSpeed, distance));
          const percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
          lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;

					// Fade points as they age
          const age = Date.now() - point.time;
          const opacity = (pointLifetime - age) / pointLifetime;
          lineCanvasContext.strokeStyle = `rgba(0, 0, 0, ${opacity})`;

          lineCanvasContext.beginPath();
          lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
          lineCanvasContext.lineTo(point.x, point.y);
          lineCanvasContext.stroke();
        }
      }
    };

    const getDistanceBetween = (a, b) => {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
    };

    const drawImageCanvas = () => {
      if (imageCanvasContext && image) {
        const dpi = window.devicePixelRatio;

        if (document.querySelector('.drawCanvas') !== null) {
          // imageCanvas.width = document.querySelector('.drawCanvas').offsetWidth || 0;
          // imageCanvas.height = document.querySelector('.drawCanvas').offsetHeight || 0;

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
        imageCanvasContext.globalCompositeOperation = "source-over";
        imageCanvasContext.drawImage(image, 0, 0, width, height);
        imageCanvasContext.globalCompositeOperation = "destination-in";
        imageCanvasContext.drawImage(lineCanvas, 0, 0);
      }
    };

    if (image && image.complete) {
      start();
    } else if (image) {
      image.onload = start;
    }
  }, []);

  return (
    <div className="drawCanvas" style={{ backgroundImage: `url(${myImage})` }}>
      <img className="illustrationImage" src={illustrationImage} alt="illustrationImage" />
    </div>
  );
}
