Ext.define('BoredMinutes.view.email.RecipientField', {
    extend: 'Ext.Panel',
    xtype:'recipientfield',
    requires:['Ext.field.Text', 'BoredMinutes.util.ContactsHelper'],
    config:{
        layout:'hbox',
        items:[
            {
                xtype:'textfield',
                flex:3,
                listeners: {
                    focus: function() {
                        var ContactsHelper = Ext.create('BoredMinutes.util.ContactsHelper', {  });

                        ContactsHelper.getContacts();

                    }
                }

            },
            {
                xtype:'button',
                iconCls:'delete',

                action:'recipientRemove'
            }
        ]

    },

    _showContacts:function()
    {
        var ContactsHelper = Ext.create('BoredMinutes.util.ContactsHelper', {  });

        ContactsHelper.getContacts();
    }

});
