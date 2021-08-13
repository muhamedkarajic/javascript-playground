import * as t from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
import { isLeft } from "fp-ts/lib/These";

const InputCodec = t.type({
  id: t.string,
  name: t.null,
});

type Input = t.TypeOf<typeof InputCodec>;

const input1 = `{"id": "1", "name": null}`;
const input2 = `{"id": "2", "name": "Long String..."}`;

let result = InputCodec.decode(JSON.parse(input1));
if (isLeft(result)) {
  console.log(PathReporter.report(result));
} else {
  const input: Input = result.right;
  console.log(input.id, input.name, input);
}

result = InputCodec.decode(JSON.parse(input2));

if (isLeft(result)) {
  console.log(PathReporter.report(result));
} else {
  const input: Input = result.right;
  console.log(input.id, input.name, input);
}