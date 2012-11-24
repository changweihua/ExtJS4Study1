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
           // {header:'姓名', dataIndex:'name', field:{xtype:'textfield'}, locked:true},
            {header:'姓名', dataIndex:'name', field:{xtype:'textfield'}},
            {header:'性别', dataIndex:'sex', field:{xtype:'textfield'}, filterable:true, filter:{type:'string'}},
            {header:'年龄', dataIndex:'age', field:{xtype:'textfield'}},
            {header:'电子邮件', dataIndex:'email',field:{xtype:'textfield'}}   
//            {header:'姓名', dataIndex:'name', field:{xtype:'textfield'}},
//            {text:'其他', columns:[
//                {header:'性别', dataIndex:'sex', field:{xtype:'textfield'}},
//                {header:'年龄', dataIndex:'age', field:{xtype:'textfield'}},
//                {header:'电子邮件', dataIndex:'email',field:{xtype:'textfield'}}   
//            ]}
        ],
//        store:Ext.data.StoreManager.lookup('UserStore'),
        store:'UserStore',
        
        viewConfig:{
          plugins:[
            Ext.create('Ext.grid.plugin.DragDrop', {
                ddGroup:'ddTree',//拖放组的名称
                dragGroup:'UserGrid',//拖拽组名称
                dropGroup:'UserGrid',//释放组名称
                enableDrag:true,//是否启用
            })
          ] ,
          listeners:{
                drop:function(node, data, dropRec, dropPosition){
                    var st = this.getStore();
                    for(i = 0;i < st.getCount();i++){
                        st.getAt(i).set('index', i+1);
                    }
                }
            }
        },
        
        features:[
            Ext.create('CMONO.util.filters')
        ],
        
        
        //selType: 'checkboxmodel',
        //multiSelect:true,
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
            {text:'筛选', id:'btnFilter'}, {xtype:'textfield'}, '-',
            {text:'保存2', id:'btnSave2'}, '-',
            {text:'Load Mask', id:'btnLoadMask'}
        ],
        initComponent:function(){
            this.callParent(arguments);
        }
//        ,
//        plugins: [
//            Ext.create('Ext.grid.plugin.RowEditing', {
//                clicksToEdit: 1
//            })
//        ]
        
});