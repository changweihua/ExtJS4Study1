Ext.onReady(function(){
    
    Ext.QuickTips.init();
    
    Ext.Loader.setConfig({
        enabled:true
    });
    
    Ext.Loader.setPath('Ext.ux', '../ext/ux');
    Ext.require([
        'Ext.ux.grid.FiltersFeature'
    ]);//filter不要require FiltersFeature
    
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