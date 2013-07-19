Ext.define('BoredMinutes.view.annotation.Annotation', {
    extend: 'Ext.form.FormPanel',
    requires: [
        'Ext.form.FormPanel',
        'Ext.field.TextArea',
        'Ext.form.FieldSet'
    ],

    config:{

        title: 'Notes',
        iconCls: 'compose',
        items:[
            {
              xtype:'toolbar',
              title:'Annotation'
            },
            {
            xtype:'fieldset',
                    items:[
                    {
                    xtype:'textareafield'
                    }
                    ]
            }
            ]



    }



});