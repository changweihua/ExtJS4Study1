(function(){
    Ext.onReady(function(){
        Ext.get('btnLogin').on('click', function(){
            Ext.Ajax.request({
                url:'getPerson.jsp',
                params:{id:'0'},
                method:'POST',
                timeout:3000,
                form:'myForm',
                success:function(response, options){
                    //alert(response.responseText);
                    alert(eval(response.responseText)[1].name);
                }
            });
        });
    });
})();