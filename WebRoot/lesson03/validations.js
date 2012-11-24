Ext.onReady(function(){
    Ext.data.validations.lengthMessage = '长度不符合规范';
    
        
    //自定义验证
//    Ext.define('MyValidations', {
//        extend:'Ext.data.validations'
//    });
    
    //拓展验证机制
    Ext.apply(Ext.data.validations, {
        age:function(config, value){
            var min = config.min;
            var max = config.max;
            
            if(min <= value && value <= max){
                return true;
            }else{
                this.ageMessage = '年龄应该在[' + min + '~' + max + ']之间';
                return false;
            } 
        },
        ageMessage:'数值不符合常理'
    });
    
    Ext.define('Person', {
        extend:'Ext.data.Model',
        fields:[
            {name:'name', type:'auto', mapping:'userName'},
            {name:'age', type:'int' },
            {name:'email', type:'auto'}
        ],
        validations:[
            {type:'length', field:'name', min:2, max:6},
            {type:'age', field:'age', min:18, max:118}
        ]
    });
    
    var person1 = Ext.create('Person', {
        name:'person1',
        age:11,
        email:'person1@cmono.net'
    });
    
    var errors = person1.validate();
    var errorArray = [];
    errors.each(function(val){
        errorArray.push(val.field + "\t" + val.message);
    });
    alert(errorArray.join('\n'));
    
    //汉化错误提示信息
    //修改validations.js中的*message的值
    //或者在JS开始的地方修改
    //Ext.data.validations.lengthMessage = '长度不符合规范'
  
    
});