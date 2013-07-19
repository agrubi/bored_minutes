Ext.define('BoredMinutes.view.email.RecipientField', {
    extend: 'Ext.Panel',
    xtype:'recipientfield',
    requires:['Ext.field.Text'],
    config:{
              layout:'hbox',
              items:[
                  {
                      xtype:'textfield',
                      flex:3
                  },
                  {
                      xtype:'button',
                      text:'remove',

                      action:'recipientRemove'
                  }
              ]

    }





});
