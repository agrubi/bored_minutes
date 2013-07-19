Ext.define('BoredMinutes.view.annotation.Annotation', {
    extend: 'Ext.form.FormPanel',
    xtype:'annotationpanel',
    requires: [
        'Ext.form.FormPanel',
        'Ext.field.TextArea',
        'Ext.form.FieldSet',
        'BoredMinutes.view.annotation.TextArea'
    ],

    config:{

        title: 'Notes',
        iconCls: 'compose',
        layout:'vbox',
        items:[
            {
                xtype:'toolbar',
                docked:'top',
                title:'Meeting Notes'
            },

                    {
                    xtype:'textareafield',
                     cls: 'custom',
                     flex:1


                    }
                    ]




    }



});