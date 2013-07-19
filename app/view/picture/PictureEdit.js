Ext.define('BoredMinutes.view.picture.PictureEdit', {
    extend: 'Ext.Panel',
    requires:[
        'BoredMinutes.view.picture.PictureCanvas'
    ],
    config:{
        title: 'bonjour',
        iconCls: 'home',
        fullscreen:true,
        layout:{
            type:'vbox',
            align:'stretch'
        },
             items:[
                 {
                    xtype:'toolbar',
                    items:[

                        {
                            itemId: 'brushWidth',
                            xtype:'button',
                            iconCls: 'brush',
                            ui: 'plain',
                            action:'setBrush'
                        },
                        {
                            itemId: 'adjustColor',
                            xtype:'button',
                            iconCls: 'color',
                            ui: 'plain',
                            action:'adjustColor'
                        },
                        {
                            itemId: 'eraser',
                            xtype:'button',
                            iconCls: 'eraser',
                            ui: 'plain',
                            action:'setEraser'
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
                 },
                 {
                    xtype:'picturecanvas',
                    flex:1
                 }




             ],
        control: {
            'button[action=setBrush]': { tap: '_setBrush'},
            'button[action=setEraser]': { tap: '_setEraser'}

        }

    },

    _setBrush:function(){
              alert('set brush');
    },
    _setEraser:function(){
        alert('set eraser');
    }



});