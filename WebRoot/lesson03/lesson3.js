Ext.onReady(function(){
    //创建类
    Ext.define('Person', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto', mapping:'userName'},
            {name:'age', type:'int' },
            {name:'email', type:'auto'}
        ]
    });
    
    
    //MVC模式中model一定是M层
    Ext.regModel('User', {
        fields:[
            {name:'name', type:'auto', mapping:'userName'},
            {name:'age', type:'int' },
            {name:'email', type:'auto'}
        ]
    });//不赞成，不推荐
    
    //实例化
    var person1 = new Person({
        name:'person1',
        age:21,
        email:'person1@cmono.net'
    });
    alert(person1.get('name'));
    
    var person2 = Ext.create('Person', {
        name:'person2',
        age:22,
        email:'person2@cmono.net'
    });
    alert(person2.get('email'));
    
    
    var person3 = Ext.ModelMgr.create({
        name:'person3',
        age:23,
        email:'person3@cmono.net'
    }, 'Person');
    alert(person3.get('age'));
});