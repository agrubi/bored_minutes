Ext.define('BoredMinutes.view.picture.PictureCanvas', {
    extend: 'Ext.Component',
    xtype:'picturecanvas',
    config:{
		drawingColor:'black'
		,brushSize:4
		,points:[]
    },
    getTemplate: function() {
        var items = [
            {
                reference: 'canvas',
                tag: 'canvas',
                id:'ImgCanvas'
            },
            {
                reference: 'annotation',
                tag: 'canvas',
                id:'annotation'
            }
        ];



        return items;
    },
	onTap:function(e,canvasEvent) {
        this.fireEvent('tap',this,e);
		this.doDraw(e.event);
    },
    onTouchStart:function(e,canvasEvent) {
        this.fireEvent('touchstart',this,e);
		this.doDraw(e.event);
    },
    onTouchEnd:function(e,canvasEvent) {
        this.fireEvent('touchend',this,e);
		this.doDraw(e.event);
    },
    onTouchMove:function(e,canvasEvent) {
        this.fireEvent('touchmove',this,e);
		this.doDraw(e.event);
    },
    initialize:function() {
    this.callParent(arguments);
		this.annotation.on({
            tap: 'onTap',
            touchstart: 'onTouchStart',
            touchend: 'onTouchEnd',
            touchmove: 'onTouchMove',
            scope: this
        });
		/*this.onAfter('painted',function(){
		debugger;
		$("#annotation").mousemove(this.doDraw,this);
		$("#annotation").click(this.doDraw,this);
		},this,{single:true});
		*/
        Ext.Viewport.on('resize', 'recomputeSize', this);

    },


    recomputeSize:function(){
        var height=this.element.getHeight();
        var width=this.element.getWidth();
        this.annotation.setHeight(height);
        this.annotation.setWidth(width);

    }
	,doDraw:function(event) {
		var points=this.getPoints();
		var drawingColor=this.getDrawingColor();
		var brushSize=this.getBrushSize();
		var erasingWhiteboard=false;
				var erasing = (drawingColor === "eraser");
				var currentColor = (erasing ? "white" : drawingColor);
				var fillSize = Math.ceil(brushSize / 2);
				
				
				if (event.which === 0) {
					points = [];
					this.setPoints(points);
					return;
				}
				points.unshift({x: event.offsetWidth, y: event.offsetHeight});
				if (points.length > 3) {
					points.pop();
				}
				this.setPoints(points);
				switch (points.length) {
					case 1:
						$("#annotation").drawArc({
							fillStyle: currentColor,
							x: points[0].x, y: points[0].y,
							radius: fillSize
						});	
						if (erasingWhiteboard) {
							$("#whiteboard").drawArc({
								fillStyle: "white",
								x: points[0].x, y: points[0].y,
								radius: fillSize
							});
						}
						break;
						
					case 2:
						$("#annotation").drawLine({
							strokeStyle: currentColor,
							strokeWidth: brushSize,
							x1: points[1].x, y1: points[1].y,
							x2: points[0].x, y1: points[0].y,
							rounded: true
						});
						if (erasingWhiteboard) {
							$("#whiteboard").drawLine({
								strokeStyle: "white",
								strokeWidth: brushSize,
								x1: points[1].x, y1: points[1].y,
								x2: points[0].x, y1: points[0].y,
								rounded: true
							});
						}
						break;
						
					case 3:
						$("#annotation").drawQuadratic({
							strokeStyle: currentColor,
							strokeWidth: brushSize,
							x1: points[2].x, y1: points[2].y, 
							cx1: points[1].x, cy1: points[1].y, 
							x2: points[0].x, y2: points[0].y,
							rounded: true
						});
						if (erasingWhiteboard) {
							$("#whiteboard").drawQuadratic({
								strokeStyle: "white",
								strokeWidth: brushSize,
								x1: points[2].x, y1: points[2].y, 
								cx1: points[1].x, cy1: points[1].y, 
								x2: points[0].x, y2: points[0].y,
								rounded: true
							});
						}
				}
			}



});