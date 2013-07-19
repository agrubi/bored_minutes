Ext.define('BoredMinutes.view.annotation.TextArea', {
    extend: 'Ext.field.TextArea',
    requires:['Ext.field.TextArea'],
    xtype:'annotationtexterea',
    config:{

    },
    initialize:function() {
        this.callParent(arguments);

        Ext.Viewport.on('resize', 'recomputeSize', this);

    },


    recomputeSize:function(){

       console.log(this.getParent().getComponent().getHeight());

    }





});