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
                            itemId: 'brushWidth',
                            xtype:'button',
                            iconCls: 'brush',
                            ui: 'plain'
                        },
                        {
                            itemId: 'adjustColor',
                            xtype:'button',
                            iconCls: 'color',
                            ui: 'plain'                          
                        },
                        {
                            itemId: 'eraser',
                            xtype:'button',
                            iconCls: 'eraser',
                            ui: 'plain'
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