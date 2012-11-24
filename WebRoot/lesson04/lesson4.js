Ext.onReady(function(){
    Ext.define('User', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto'},
            {name:'age', type:'int'},
            {name:'email', type:'auto'}
        ]
    });
    
    var userData = [
        {name:'User1', age:11, email:'user1@cmono.net'},
        {name:'User2', age:22, email:'user2@cmono.net'}
    ];
    
    var memoryProxy = Ext.create('Ext.data.proxy.Memory', {
        data:userData,
        model:'User'
    });
    
    memoryProxy.read(new Ext.data.Operation(), function(result){
        var records = result.resultSet.records;
        Ext.Array.each(records, function(item){
            alert(item.get('name'));
        });
    });
    
    userData.push({name:'user3', age:33, email:'user3@cmono.net'});
    
    memoryProxy.update(new Ext.data.Operation({
        action:'update',
        data:userData
    }), function(result){}, this);
    
    memoryProxy.read(new Ext.data.Operation(), function(result){
        var records = result.resultSet.records;
        Ext.Array.each(records, function(item){
            alert(item.get('name'));
        });
    });
    
});