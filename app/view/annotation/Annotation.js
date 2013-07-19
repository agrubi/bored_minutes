Ext.define('BoredMinutes.view.annotation.Annotation', {
    extend: 'Ext.form.FormPanel',
    requires: [
        'Ext.form.FormPanel',
        'Ext.field.TextArea',
        'Ext.form.FieldSet'
    ],

    config:{

        title: 'Annot',
        iconCls: 'home',
        items:[
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