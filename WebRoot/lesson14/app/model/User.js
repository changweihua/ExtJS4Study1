Ext.define('CMONO.model.User', {
    extend:'Ext.data.Model',
    fields:[
        {name:'name', type:'string'},
        {name:'age', type:'int'},
        {name:'email', type:'string'},
        {name:'deposit', type:'double'},
        {name:'sex', type:'string'},
        {name:'birthday', type:'string'}
    ]
});