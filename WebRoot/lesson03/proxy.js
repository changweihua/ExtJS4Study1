Ext.onReady(function(){
    Ext.define('Person', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto', mapping:'userName'},
            {name:'age', type:'int' },
            {name:'email', type:'auto'}
        ],
        proxy:{
            type:'ajax',
            url:'getPerson.jsp'
        }
    });
    
//    var p = Ext.ModelManager.getModel('Person');
//    p.load(1, {
//        scope: this,
//        failure: function(record, operation) {
//            //do something if the load failed
//        },
//        success: function(record, operation) {
//            //do something if the load succeeded
//            alert("Name:\t" + record.data.name + "\nAge:\t" + record.data.age);
//        },
//        callback: function(record, operation) {
//            //do something whether the load succeeded or failed
//        }
//    });
    
    Person.load(1, {//获取单条记录，其中1为标识符，可以确定要获取的那条记录
        scope: this,
        failure: function(record, operation) {
            //do something if the load failed
        },
        success: function(record, operation) {
            //do something if the load succeeded
            alert("Name:\t" + record.data.name + "\nAge:\t" + record.data.age);
        },
        callback: function(record, operation) {
            //do something whether the load succeeded or failed
        }
    });
    
});