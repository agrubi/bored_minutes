Ext.define('BoredMinutes.view.picture.PictureEdit', {
    extend: 'Ext.Panel',
    requires:[
        'BoredMinutes.view.picture.PictureCanvas'
    ],
    config:{
        title: 'Whiteboard',
        iconCls: 'camera',

        layout:{
            type:'vbox',
            align:'stretch'
        },
             items:[
                 {
                    xtype:'toolbar',
                    items:[
                        {
                            xtype: 'segmentedbutton',
                            items: [
                               {
                                    itemId: 'draw',
                                    xtype:'button',
                                    iconCls: 'brush',
                                    ui: 'round',
                                    action:'setBrush'
                                },                            
                                {
                                    itemId: 'eraser',
                                    xtype:'button',
                                    iconCls: 'eraser',
                                    ui: 'round',
                                    action:'setEraser'
                                } 
                            ]
                        },
                        {
                            itemId: 'adjustColor',
                            xtype:'button',
                            iconCls: 'color',
                            ui: 'plain',
                            action:'adjustColor'
                        },
                        {
                            itemId: 'adjustThickness',
                            xtype: 'button',
                            iconCls: 'thickness',
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
                 },
                 {
                    xtype:'picturecanvas',
                    flex:1
                 },
				 {
					xtype:'colorpicker'
					,height:290
					,hidden:true
					,itemId:'colorpicker'
				}




             ],
        control: {
            'button[action=setBrush]': { tap: '_setBrush'},
            'button[action=setEraser]': { tap: '_setEraser'}
            ,'button[action=adjustColor]': { tap: '_adjustColor'}

        }

    },

    _setBrush:function(){
              //alert('set brush');
    },
    _setEraser:function(){
        //alert('set eraser');
    }
	,_adjustColor:function(button){
		button.up('panel').down('colorpicker').show();
	}



});