Ext.define('CMONO.view.UserGrid', {
        extend:'Ext.grid.Panel',
        title:'用户列表',
        titleAlign:'center',
        alias:'widget.usergrid',
        width:750,
        height:300,
        frame:true,
        forceFit:true,
        columns:[ 
            {header:'序号', xtype: 'rownumberer'},
            {header:'姓名', dataIndex:'name', field:{xtype:'textfield'}},
            {header:'年龄', dataIndex:'age', field:{xtype:'numberfield'}},
            {header:'电子邮件', dataIndex:'email'}
        ],
//        store:Ext.data.StoreManager.lookup('UserStore'),
        store:'UserStore',
        
        selType: 'checkboxmodel',
        multiSelect:true,
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 2
            })
        ],
        dockedItems: [{
            xtype: 'pagingtoolbar',
//            store: Ext.data.StoreManager.lookup('UserStore'),   // same store GridPanel is using
            store:'UserStore',
            dock: 'bottom',
            displayInfo: true
        }],
        
        tbar:[
            {text:'刷新', id:'btnRefresh'}, '-',
            {text:'添加'}, '-',
            {text:'删除'}, '-',
            {text:'保存', id:'btnSave'}, '-',
            {text:'查找'}, {xtype:'textfield'}, '-',
            {text:'筛选', id:'btnFilter'}, {xtype:'textfield'}
        ],
        initComponent:function(){
            this.callParent(arguments);
        }
});