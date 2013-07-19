Ext.define('BoredMinutes.view.picture.PictureEdit', {
    extend: 'Ext.Panel',

    config:{
        title: 'bonjour',
        iconCls: 'home',
             items:[
                 {
                    xtype:'toolbar',
                    items:[

                        {
                            xtype:'button',
                            text:'1'
                        },
                        {
                            xtype:'button',
                            text:'2'
                        },
                        {
                            itemId: 'eraser',
                            xtype:'button',
                            text:'3'
                        },
                        {
                          xtype:'spacer'
                        },
                        {
                            xtype:'button',
                            iconCls: 'camera',                        
                            ui: 'plain'
                        }

                    ]
                 }




             ]

    }



});