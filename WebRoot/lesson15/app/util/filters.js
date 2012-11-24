
Ext.define('CMONO.util.filters', {
    alias:'widget.filters',
    //requires:['Ext.ux.grid.FiltersFeature'],
    ftype:'filters',
    encode:false,
    local:true,
    filters:[
        {type:'boolean', dataIndex:'visible'}
    ]
});