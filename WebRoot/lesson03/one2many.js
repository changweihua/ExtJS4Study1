Ext.onReady(function(){
    Ext.define('Teacher', {
        extend:'Ext.data.Model',
        fields:[
            {name:'teacherId', type:'int'},
            {name:'name', type:'auto'}
        ],
        hasMany:{
            model:'Student',
            name:'getStudent',//不写的话，
            filterProperty:'teacherId'
        }
    });
    
    Ext.define('Student', {
        extend:'Ext.data.Model',
        fields:[
            {name:'student', type:'int'},
            {name:'name', type:'auto'},
            {name:'teacherId', type:'int'}
        ]
    });
    
    //t.students 得到子类的一个store数据集合
    
});