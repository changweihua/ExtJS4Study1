(function(){

    //类的声明其实就是一个function
//    
//    Ext.Loader.setConfig({
//        enabled:true
//    });
//    Ext.require("ux.myWin");//推荐
    
    Ext.onReady(function(){

//        Ext.Loader.setConfig({
//            enabled:true,
//            paths:{
//                myApp:'ux'
//            }
//        
//        });

        Ext.Loader.setConfig({
            enabled:true,
            requires:['ux.myWin']
        });
        
        var win = Ext.create('ux.myWin', {
            title:'title',
            aabbcc:'0110'
        }).show();
        
        Ext.Msg.alert('Message', win.getAabbcc());
        
        //mixins，实现多继承 
        Ext.define('Person', {
            say:function(){
                Ext.Msg.alert('Message', 'I can speak');
            }
        });
        
        Ext.define('Musician', {
            mixins:{
                say:'Person'
            }
        });
        
        Ext.create('Musician', {}).say();
        
    });
    
})();