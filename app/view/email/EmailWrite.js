Ext.define('BoredMinutes.view.email.EmailWrite', {
    extend: 'Ext.form.FormPanel',
    requires: [
        'Ext.form.FormPanel',
        'Ext.field.TextArea',
        'Ext.form.FieldSet',
        'BoredMinutes.view.email.RecipientField'


    ],

    config:{

        title: 'Attendees',
        iconCls: 'team',
        items:[

            {
                xtype:'fieldset',
                items:[
                    {
                        xtype: 'recipientfield'
                    }
                ]
            },
            {
                xtype:'toolbar',
                docked:'top',
                items:[
                    {
                     xtype:"spacer"
                    },
                    {
                    xtype:'button',
                    text:'add',
                    action:'recipientAdd'
                    }

                ]
            }
        ],

        control: {
            'button[action=recipientAdd]': {
                                tap: '_recipientAdd'

                                },
            'recipientfield': {
                tap: '_recipientRemove'

            }

        }

    },



    _recipientAdd:function()
    {
       //var field=Ext.create('recipientfield');

        this.child('fieldset').add({xtype:'recipientfield'});
    },

    _recipientRemove:function(){
        this.destroy();
    }



});