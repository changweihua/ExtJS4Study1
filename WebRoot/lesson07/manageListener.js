Ext.onReady(function(){
    Ext.create('Ext.toolbar.Toolbar', {
        renderTo: document.body,
        width   : 500,
        items: [
            {xtype:'button', text:'新建', id:'btnCreate'},
            {xtype:'button', text:'删除', id:'btnDelete', handler:function(){
                alert('删除');
            }},
            {xtype:'button', text:'销毁', id:'btnDestroy', handler:function(){
                var btn = Ext.getCmp('btnDelete');
                if(btn){
                    btn.destroy();
                }else{
                    alert('No such component');
                }
            }}
        ]
        }
    );
    
    var btnD = Ext.getCmp('btnDelete');
    var btnC = Ext.getCmp('btnCreate');
    btnD.addManagedListener(btnC, 'click', function(){
        alert('新建');//将create按钮的click事件托管给delete按钮，一旦delete被销毁，create的click也被移除
    });
    
});