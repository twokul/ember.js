import { alias } from '@ember/object/computed';
import { expectTypeOf } from 'expect-type';

expectTypeOf(alias('foo')).toEqualTypeOf<PropertyDecorator>();

class Foo {
  @alias('foo') alias: unknown;

  // @ts-expect-error Only takes one key
  @alias('foo', 'bar')
  alias2: unknown;

  // @ts-expect-error Requires a key
  @alias()
  alias3: unknown;
}

new Foo();
