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
        
//        var child1 = Ext.create('Child', {name:'Changweihua', state:'hungry', isAllergic:false});
//        child1.setMilk('三鹿牛奶');
//        
//        var child2 = Ext.create('Child', {name:'Tanmeizhuo', state:'full', isAllergic:false});
//        child2.setMilk('三鹿牛奶');
        
        var child1 = Ext.create('Child', {name:'Changweihua', state:'hungry', isAllergic:true});
        var child2 = Ext.create('Child', {name:'Tanmeizhuo', state:'hungry', isAllergic:false});
        
        Ext.util.Observable.capture(child1, function(eventName){
            if(eventName == 'hungry'){
                if(this.isAllergic){
                    alert(this.name + '说：我对牛奶过敏的啦');
                    return false;
                }else{
                    return true;
                }
            }
        }, child1);
        Ext.util.Observable.capture(child2, function(eventName){
            if(eventName == 'hungry'){
                if(child2.isAllergic){
                    alert(child2.name + '说：我对牛奶过敏的啦');
                    return false;
                }else{
                    return true;
                }
            }
        });
        child1.setMilk('三鹿牛奶');
        child2.setMilk('三鹿牛奶');
    });
})();