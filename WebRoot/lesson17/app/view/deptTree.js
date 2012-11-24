Ext.define('CMONO.view.deptTree', {
    extend:'Ext.tree.Panel',
    alias:'widget.depttree',
    title:'部门',
    width:500,
    height:500,
    animate:true,
    padding:10,
    config:{
        copyNodes:'充当剪贴板'
    },
    rootVisible:false,//控制根节点的显示与隐藏
    columns:[
        {
            xtype:'treecolumn',
            dataIndex:'text',
            text:'text',
            width:150
        },
        {
            dataIndex:'id',
            text:'id',
            width:150
        }
    ],
    dockedItems:[
        {
            xtype:'toolbar',
            dock:'left',
            //ui:'footer',
            items:[
                {
                    text:'添加', id:'btnAdd'
                }, '-',
                {
                    text:'复制', id:'btnCopy'
                }, '-',
                {
                    text:'粘贴', id:'btnPaste'
                }, '-',
                {
                    text:'删除', id:'btnDelete'
                }
            ]
        },
        {
            xtype:'toolbar',
            dock:'top',
            items:[
                {
                    text:'展开全部', id:'btnExpandAll'
                }, '-',
                {
                    text:'收起全部', id:'btnCollapseAll'
                }, '-'
            ]
        }
    ],
    viewConfig:{
        plugins:[
            {ptype:'treeviewdragdrop'}
        ],
        listeners:{
            drop:function(node, data, dropRect, dropPosition){
                Ext.Msg.alert('信息提示', 'heihei');
            }
        }
    },
    store:'deptStore'
//    root:{//必须有，但是没有意义
//        text:'部门',
//        id:'0',
//        leaf:false,
//        children:[
//            {
//                text:'技术部门',
//                checked:false,//默认不选择，但是是checkbox格式
//                id:'01',
//                leaf:false,
//                children:[
//                    {
//                        text:'研发部',
//                        checked:false,
//                        id:'0101',
//                        leaf:true
//                    },
//                    {
//                        text:'实施部',
//                        checked:false,
//                        id:'0102',
//                        leaf:true
//                    }
//                ]
//            },
//            {
//                text:'后勤部',
//                leaf:false,
//                checked:false,
//                id:'02',
//                children:[
//                    {
//                        text:'人事部',
//                        checked:false,
//                        id:'0201',
//                        leaf:true
//                    },
//                    {
//                        text:'行政部',
//                        checked:false,
//                        id:'0202',
//                        leaf:true
//                    }
//                ]
//            }
//        ]
//    }
});