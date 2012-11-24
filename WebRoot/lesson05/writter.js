Ext.onReady(function(){
    Ext.define('User', {
        extend:'Ext.data.Model',
        fields:['name', 'email'],
        proxy:{
            type:'ajax',
            url:'users.jsp',
            writer:{
                type:'json'
            }
        }
    });
    
    Ext.ModelMgr.create({
        name:'tanmeizhuo',
        email:'tanmeizhuo@qq.com'
    }, 'User').save();
    
    
    
});