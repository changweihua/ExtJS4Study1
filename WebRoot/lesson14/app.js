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
                    xtype:'usergrid'
                }
            });
        },
        controllers:['UserController']
    });
});