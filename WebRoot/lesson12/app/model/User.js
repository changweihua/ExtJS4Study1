Ext.define('CMONO.model.User', {
    extend:'Ext.data.Model',
    fields:[
        {name:'name', type:'string'},
        {name:'age', type:'int'},
        {name:'email', type:'string'}
    ]
});