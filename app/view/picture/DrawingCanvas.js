Ext.define('BoredMinutes.view.picture.DrawingCanvas', {
    extend: 'Ext.Component',
    xtype:'picturecanvas',
    config:{





    },
    getTemplate: function() {
        var items = [
            {
                reference: 'canvas',
                tag: 'canvas',
                id:'DrawingCanvas'
            }
        ];
        return items;
    },
	onTap:function(e) {
        this.fireEvent('tap',this,e);
		alert('tap');
    },
    onTouchStart:function(e) {
        this.fireEvent('touchstart',this,e);
		alert('touch');
    },
    onTouchEnd:function(e) {
        this.fireEvent('touchend',this,e);
		alert('end');
    },
    onTouchMove:function(e) {
        this.fireEvent('touchmove',this,e);
		alert('move');
    }
    initialize:function() {
    this.callParent(arguments);

		this.canvas.on({
            tap: 'onTap',
            touchstart: 'onTouchStart',
            touchend: 'onTouchEnd',
            touchmove: 'onTouchMove',
            scope: this
        });
        Ext.Viewport.on('resize', 'recomputeSize', this);

    },


    recomputeSize:function(){
        var height=this.element.getHeight();
        var width=this.element.getWidth();
        this.canvas.setHeight(height);
        this.canvas.setWidth(width);

    }



});