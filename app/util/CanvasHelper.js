Ext.define("BoredMinutes.util.CanvasHelper", {
    singleton: true,
    erasingWhiteboard: false,
    drawingColor: "yellow",
    brushSize: 10,
    canvasHeight: 0,
    canvasWidth: 0,
    imageCanvas: null,
    drawingCanvas: null,
    points: [],

    setDrawingColor: function (color) {
        this.drawingColor = color;
    },

    setBrushSize: function (sizeInPixels) {
        this.brushSize = sizeInPixels;
    },

    setErasingWhiteboard: function (isErasing) {
        this.erasingWhiteboard = isErasing;
    },

    setDrawingCanvas: function(htmlCanvasElement) {
        this.drawingCanvas = htmlCanvasElement;
    },

    setImageCanvas: function(htmlCanvasElement) {
        this.imageCanvas = htmlCanvasElement;
        this.canvasHeight = this.imageCanvas.height();
        this.canvasWidth = this.imageCanvas.width();
    },

    loadWhiteboardImage: function (path) {
        this.imageCanvas.drawImage({
            source: path,
            fromCenter: false,
            width: this.canvasWidth,
            height: this.canvasHeight
        });
    },

    doneDrawing: function() {
        this.points = [];
    },

    draw: function (point) {
        var currentColor = (erasingWhiteboard ? "white" : this.drawingColor);
        var fillSize = Math.ceil(this.brushSize / 2);

        this.points.unshift(point);
        if (this.points.length > 3) {
            this.points.pop();
        }

        switch (this.points.length) {
            case 1:
                this.drawingCanvas.drawArc({
                    fillStyle: currentColor,
                    x: this.points[0].x, y: this.points[0].y,
                    radius: fillSize
                });
                if (this.erasingWhiteboard) {
                    this.imageCanvas.drawArc({
                        fillStyle: "white",
                        x: this.points[0].x, y: this.points[0].y,
                        radius: fillSize
                    });
                }
                break;

            case 2:
                this.drawingCanvas.drawLine({
                    strokeStyle: currentColor,
                    strokeWidth: this.brushSize,
                    x1: this.points[1].x, y1: this.points[1].y,
                    x2: this.points[0].x, y2: this.points[0].y,
                    rounded: true
                });
                if (this.erasingWhiteboard) {
                    this.imageCanvas.drawLine({
                        strokeStyle: "white",
                        strokeWidth: this.brushSize,
                        x1: this.points[1].x, y1: this.points[1].y,
                        x2: this.points[0].x, y2: this.points[0].y,
                        rounded: true
                    });
                }
                break;

            case 3:
                this.drawingCanvas.drawQuadratic({
                    strokeStyle: currentColor,
                    strokeWidth: this.brushSize,
                    x1: this.points[2].x, y1: this.points[2].y,
                    cx1: this.points[1].x, cy1: this.points[1].y,
                    x2: this.points[0].x, y2: this.points[0].y,
                    rounded: true
                });
                if (this.erasingWhiteboard) {
                    this.imageCanvas.drawQuadratic({
                        strokeStyle: "white",
                        strokeWidth: this.brushSize,
                        x1: this.points[2].x, y1: this.points[2].y,
                        cx1: this.points[1].x, cy1: this.points[1].y,
                        x2: this.points[0].x, y2: this.points[0].y,
                        rounded: true
                    });
                }
        }
    }
});