Ext.define('BoardMinutes.ux.ColorPicker',{
	extend:'Ext.Container'
	,xtype:'colorpicker'
	,config:{
		initialColor:'#113c38'
		,picker:null
	}
	,onColorChange:function(color){
		var me=this;
		me.pickerDisplay.innerElement.setStyle('background-color',color.css())
		me.fireEvent('change',color);
	}
	,onSelection:function(){
		var me=this;
		var color=me.getPicker().get();
		me.hide();
		me.fireEvent('select',color);
	}
	,initialize:function(){
		var me = this,
			clsPrefix = Ext.baseCSSPrefix,
			innerElement = this.innerElement;

		//insert the mask, and the picker bar
		this.pickerBody = this.add({
			xtype:'panel'
			,cls: clsPrefix + 'picker-body'
			,style:{
				'text-align':'center'
			}
		});
		this.lowerSection=this.add({
			xtype:'container'
			,layout:'hbox'
		});
		this.pickerDisplay = this.lowerSection.add({
			xtype:'component'
			,flex:1
			,cls: clsPrefix + 'picker-colorDisplay'
			,style:{
				background:this.getInitialColor()
			}
		});
		this.lowerSection.add({
			xtype:'button'
			,text:'Select'
			,handler:me.onSelection
			,scope:me
			,ui:'action'
			,disabled:false
		});
		this.onAfter('painted',function(){
			var renderEl=this.pickerBody.getInnerHtmlElement().createChild().getId();
			var initialColor=this.getInitialColor();
			if(colorjoe && renderEl!==''){
				var picker=colorjoe.rgb(renderEl, initialColor, []);
				this.setPicker(picker);
				picker.on('done',function(color){me.onColorChange(color)});
				picker.on('change',function(color){me.onColorChange(color)});
			}else{
				console.log('You do not have the colorjoe library loaded!');
			}
		});
		this.callParent();
	}
});