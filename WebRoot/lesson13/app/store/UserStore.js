Ext.define('CMONO.store.UserStore', {
    extend:'Ext.data.Store',
    model:'CMONO.model.User',
    require:['CMONO.model.User'],
    proxy:{
        type:'ajax',
        url:'getUser.jsp',
        reader:{
            type:'json',
            root:'rows'
        },
        writer:{
            type:'json'
        }  
    },
    autoLoad:true
});