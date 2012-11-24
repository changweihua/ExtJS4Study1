Ext.define('CMONO.store.deptStore', {
    extend:'Ext.data.TreeStore',
    defaultRootId:'root',
    model:'CMONO.model.deptModel',
    proxy:{
        type:'ajax',
        url:'getDepartment.jsp',
        reader:'json'
    },
    autoLoad:true
});