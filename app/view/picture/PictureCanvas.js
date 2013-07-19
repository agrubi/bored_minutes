Ext.define('BoredMinutes.view.picture.PictureCanvas', {
        extend: 'Ext.Container',
        xtype: 'picturecanvas',
        config: {
            items: [
                {
                    xtype: 'component',
                    html: '<input id="picture" type="file" accept="image/*" capture="camera" style="display:none;">',
                    itemId: 'pictureInput'
                },
                {
                    xtype: 'component',
                    html: '<canvas id="whiteboard"></canvas>',
                    itemId: 'whiteboard'
                },
                {
                    xtype: 'component',
                    html: '<img id="tempImage" />',
                    itemId: 'tempImage'
                }
            ]
        },

        initialize: function () {
            this.callParent(arguments);
            Ext.Viewport.on('resize', 'recomputeSize', this);
        },

        recomputeSize: function () {
            var height = this.element.getHeight();
            var width = this.element.getWidth();
            this.down('#whiteboard').setHeight(height);
            this.down('#whiteboard').setWidth(width);
        }
    }
);