(function(){
    Ext.onReady(function(){
        Ext.get('btnGetTime').on('click', function(){
            var time = Ext.get('time');
            time.getLoader().load({
                url:'getTime.jsp',
                renderer:function(loader, response, request){
                   //Ext.getDom('time').value = response.responseText;
                    //loader.target.dom.value = response.responseText;
                    loader.target.set({'value':response.responseText});
                }
            });
        });
        
        Ext.get('btnGetTime2').on('click', function(){//定时获取后台数据
            var time = Ext.get('time2');
            time.getLoader().startAutoRefresh(2000, {
                url:'getTime.jsp',
                renderer:function(loader, response, request){
                   //Ext.getDom('time').value = response.responseText;
                    //loader.target.dom.value = response.responseText;
                    loader.target.set({'value':response.responseText});
                }
            });
        });
    });
})();