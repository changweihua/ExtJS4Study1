        Ext.define('ux.myWin', {
			extend : 'Ext.window.Window',
			width : 400,
			height : 300,
			newTitle : 'new Title',// 可以添加自定义的属性
			mySetTitle : function() {// 自定义的方法
				this.title = this.newTitle;
			},
            config:{
                aabbcc:'1001'//自动生成get和set方法
            },
			initComponent : function() {
				this.mySetTitle();
				this.callParent(arguments);
			}
		});