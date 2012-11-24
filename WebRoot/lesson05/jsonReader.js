Ext.onReady(function(){
    
    var userData = {
        count:100,
        user:[{
            author:'changweihua',
            info:{
                userId:'1',
                orders:[
                    {id:'001', name:'pen'},
                    {id:'002', name:'book'}
                ],
                email:'changweihua@outlook.com'
            }
        }]
    };
    
    Ext.define('User', {
        extend:'Ext.data.Model',
        fields:[
            {name:'userId', type:'string'},
            {name:'email', type:'string'}
        ],
        hasMany:{//一对多
            model:'Order'
            //name:'products'//不写，则使用orders获取数据
        }
    });
    
    Ext.define('Order', {
        extend:'Ext.data.Model',
        fields:['id', 'name'],
        blongsTo:{type:'blongsTo', model:'User'}//多对一
    });
    
    var mProxy = Ext.create('Ext.data.proxy.Memory', {
        model:'User',
        data:userData,
        reader:{
            type:'json',
            root:'user',
            implicitIncludes:true,//级联读取
            totalProperty:'count',
            record:'info'//服务器返回的数据可能很复杂，用record可以筛选出有用的数据信息加载到Model中
        }
    });
    
    mProxy.read(new Ext.data.Operation(), function(result){
        var records = result.resultSet.records;
        
        alert(result.resultSet.total);// 获取记录条数
        
        Ext.Array.each(records, function(record){
            alert(record.get('email'));
        });
        
        Ext.each(records, function(record){
            alert(record.get('userId'));
        });
        
        var user = records[0];
        var orders = user.orders();
        
        orders.each(function(order){
            alert(order.get('name'));
        });
        
    });
    
});