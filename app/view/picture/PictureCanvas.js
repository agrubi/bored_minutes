Ext.define('BoredMinutes.view.picture.PictureCanvas', {
    extend: 'Ext.Component',
    xtype:'picturecanvas',
    config:{
           style:'background:green'




    },
    getTemplate: function() {
        var items = [
            {
                reference: 'canvas',
                tag: 'canvas'
            }
        ];



        return items;
    }

});