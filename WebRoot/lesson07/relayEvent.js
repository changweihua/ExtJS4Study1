(function(){
    Ext.onReady(function(){
        Ext.define('Child', {
            mixins: {//混合，具有混合的类的能力
                observable: 'Ext.util.Observable'
            },
            constructor:function(config){
                this.name = '陌生人';
                this.mixins.observable.constructor.call(this, config);
                this.addEvents({'hungry':true});
                this.addListener('hungry', function(milk){
                    if(this.state == 'hungry'){
                        this.drink(milk);
                    }else{
                        alert(this.name + '说：我不饿');
                    }
                });
                this.setMilk = function(milk){
                    this.fireEvent('hungry', milk);
                };
                this.drink = function(milk){
                    alert(this.name + '说：我喝了一瓶' + milk);
                };
            }
        });
        
        /*
         *  为对象添加一个事件addEvents
         *  为这个事件添加监听addEventListener
         *  触发这个事件fireEvent 
         */
        
        var child1 = Ext.create('Child', {name:'Changweihua', state:'hungry', isAllergic:false});

        Ext.define('Father', {
            extend:'Ext.util.Observable',
            constructor:function(config){
                this.listeners = config.listeners;
                this.superclass.constructor.call(this, config);
            }
        });
        
        var father = Ext.create('Father', {});
        
        father.relayEvents(child1, ['hungry']);
        father.on('hungry', function(){
            alert('快送孩子去医院');
        });
        
        child1.setMilk('三鹿牛奶');//必须在relayEvents之后
    });
})();