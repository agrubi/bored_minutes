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

    initialize:function() {
    this.callParent(arguments);

        Ext.Viewport.on('resize', 'recomputeSize', this);

    },


    recomputeSize:function(){
        var height=this.element.getHeight();
        var width=this.element.getWidth();
        this.canvas.setHeight(height);
        this.canvas.setWidth(width);

    }



});