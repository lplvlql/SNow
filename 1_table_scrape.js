var tableName = '';
var gr = new GlideRecord('sys_dictionary');
gr.addQuery('name', tableName);
gr.query();

var cols = ['element', 'internal_type', 'reference', 'mandatory'];
var fields = [];

while (gr.next()) {
    field = {};
    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];
        field[col] = gr.getValue(col);
    }
    fields.push(field);
}

var result = {
    table: tableName,
    fields: fields
};

gs.info(JSON.stringify(fields, null, 2));