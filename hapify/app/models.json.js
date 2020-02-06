//--------------------------------------------------
// Export the models and fields properties as JSON
//--------------------------------------------------

const _output = models.map((m) => {
    return {
        collection: m.names.snake,
        dependencies: m.dependencies.list.map((d) => {
            return d.names.snake
        }),
        fields: m.fields.list.map((f) => {
            const out = Object.assign({}, f);
            out.name = out.names.snake;
            delete out.names;
            // If the field has an entity reference, store the model's name
            if (out.model) {
                out.reference = out.model.names.snake;
                delete out.m;
                delete out.model;
            }
            return out;
        })
    };
});

//--------------------------------------------------
//  Output
//--------------------------------------------------
return JSON.stringify(_output, null, 4);
