import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
