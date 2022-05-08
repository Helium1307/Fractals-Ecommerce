import mongoose from 'mongoose';
import softDelete from './softDelete';

export function createSchema<DocType>(
  definition?: mongoose.SchemaDefinition<mongoose.SchemaDefinitionType<DocType>>
) {
  const schema = new mongoose.Schema<DocType>(definition, {
    timestamps: true,
  });

  return schema;
}

export function createSchemaWithSoftDelete<DocType>(
  definition?: mongoose.SchemaDefinition<mongoose.SchemaDefinitionType<DocType>>
): mongoose.Schema<DocType, mongoose.Model<DocType, any, any, any>, any> {
  const schema = createSchema(definition);

  schema.plugin(softDelete);

  return schema;
}
