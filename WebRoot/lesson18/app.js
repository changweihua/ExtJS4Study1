Ext.onReady(function(){
    
    Ext.QuickTips.init();
    
    Ext.Loader.setConfig({
        enabled:true
    });
    
    Ext.application({
        name:'CMONO',
        appFolder:'app',
        launch: function() {
            Ext.create('Ext.container.Viewport', {
                items:{
                    width:800,
                    height:700,
                    layout:'auto',
                    xtype:'mainlayout'
                }
            });
        },
        controllers:['DeptController']
    });
});