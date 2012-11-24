Ext.onReady(function(){
    Ext.define('User', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto'},
            {name:'age', type:'int'},
            {name:'email', type:'string'}
        ]
    });
    
    Ext.create('Ext.data.Store', {
        model:'User',
        proxy:{
            type:"ajax",
            url:'getUser.jsp',
            reader:{
                type:'json',
                root:'rows'
            },
            writer:{
                type:'json'
            }
        },
        storeId:'userStore',
        pageSize:5,
        autoLoad:true
    });
    
});