Ext.onReady(function(){
    Ext.define('User', {
        extend:'Ext.data.Model',
        fields:['name', 'email'],
        proxy:{
            type:'ajax',
            url:'users.jsp',
            reader:{
                type:'array'
            }
        }
    });
    
    var user = Ext.ModelMgr.getModel('User');
    
    user.load(1, {
        success:function(model){
            alert(model.get('email'));
        }
    });
});