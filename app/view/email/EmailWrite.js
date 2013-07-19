Ext.define('BoredMinutes.view.email.EmailWrite', {
    extend: 'Ext.form.FormPanel',
    xtype:'emailwrite',
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
                        xtype:'button',
                        iconCls:'add',
                        action:'recipientAdd'
                    },
                    {
                     xtype:"spacer"
                    },
                    {
                        xtype:'button',
                        text:'Send',
                        action:'sendEmail',
                        ui:'forward'
                    }

                ]
            }
        ],

        control: {
            'button[action=recipientAdd]': {
                                tap: '_recipientAdd'

                                },
            'recipientfield button[action=recipientRemove]': {
                tap: '_recipientRemove'

            },
            'button[action=sendEmail]': {
                tap: '_sendEmail'

            }

        }

    },



    _recipientAdd:function()
    {
       //var field=Ext.create('recipientfield');

        this.child('fieldset').add({xtype:'recipientfield'});
    },

    _recipientRemove:function(button){
       button.getParent().destroy();
    },

    _sendEmail:function(button){

        var fields=this.query('textfield');
        console.log(fields);
        var emails=[];

        Ext.each(fields, function(field, index) {
            emails.push(field.getValue());
        });


       this.fireEvent('sendEmail',emails);

    }


});