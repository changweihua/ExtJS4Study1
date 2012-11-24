Ext.onReady(function(){
    Ext.define('User', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto'},
            {name:'email', type:'auto'}
        ],
        proxy:{
            type:'sessionstorage',
            id:'user_local'//必须指定
        }
    });
    
    var store = Ext.create('Ext.data.Store', {
        model:'User'
    });
    
    //添加
    store.add({name:'Changweihua', email:'changweihua@outlook.com'});
    //保存
    store.sync();
    //加载
    store.load();
    
    var msg = [];
    store.each(function(rec){
        msg.push(rec.get('name') + ":" + rec.get('email'))
    });
    
    alert(msg.join('\n'));
    
});