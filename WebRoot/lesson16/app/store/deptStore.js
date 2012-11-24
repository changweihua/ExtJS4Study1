Ext.define('CMONO.store.deptStore', {
    extend:'Ext.data.TreeStore',
    defaultRootId:'root',
    proxy:{
        type:'ajax',
        url:'getDepartment.jsp',
        reader:'json'
    },
    autoLoad:true
});