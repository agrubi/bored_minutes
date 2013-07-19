Ext.define('BoredMinutes.view.picture.PictureEdit', {
    extend: 'Ext.Panel',
    requires:[
        'BoredMinutes.view.picture.PictureCanvas',
        'Ext.SegmentedButton'
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
                            ,action:'adjustThickness'                       
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
			,'button[action=adjustThickness]': { tap: '_adjustThickness'}

        }

    },

    _setBrush:function(){
              //alert('set brush');
    },
    _setEraser:function(){
        //alert('set eraser');
    }
	,_generateColors:function(){
		var colors=['black','white','red','blue','green','yellow','orange'],
			len=colors.length,
			items=[],
			me=this;
		for(var i=0;i<len;i++){
			items.push({
				xtype:'button'
				,iconCls:'color'
				,style:{
					'background':colors[i]
				}
				,value:colors[i]
				,width:50
				,action:'selectColor'
				,listeners:{
					'tap':me._selectColor
					,scope:me
				}
			});
		}
		return items;
	}
	,_adjustColor:function(button){
		button.up('panel').down('colorpicker').show();
		if(this.colorPickerPanel==null){
			this.colorPickerPanel=new Ext.Panel({
				frame:true,
				border:true,
				top : 0,
				height : 200,
				defaults:{
					ui:'action'
				}
				,items:this._generateColors()
			})
		}
		this.colorPickerPanel.showBy(button);
	}
	,_selectColor:function(button){
		console('Color: '+button.value);
		this.colorPickerPanel.hide();
	}
	,_generateThicknesses:function(){
		var thicknesses=[1,2,3,4],
			len=thicknesses.length,
			items=[],
			me=this;
		for(var i=0;i<len;i++){
			items.push({
				xtype:'button'
				,iconCls:'color'
				,value:thicknesses[i]
				,width:50
				,action:'selectThickness'
				,listeners:{
					'tap':me._selectThickness
					,scope:me
				}
			});
		}
		return items;
	}
	,_adjustThickness:function(button){
		if(this.thicknessPickerPanel==null){
			this.thicknessPickerPanel=new Ext.Panel({
				frame:true,
				border:true,
				top : 0,
				height : 200,
				defaults:{
					ui:'action'
				}
				,items:this._generateThicknesses()
			});
		}
		this.thicknessPickerPanel.showBy(button);
	}
	,_selectThickness:function(button){
		console('Thickness: '+button.value);
		this.thicknessPickerPanel.hide();
		this.thicknessPickerPanel.hide();
	}


});