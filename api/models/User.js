module.exports = {
    tableName: 't_user',
    schema: true,
    migrate: 'safe',

	attributes: {
		'name': {
            type: 'string',
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.VCH_PASSWORD;
            return obj;
        }
    },
    
    
};