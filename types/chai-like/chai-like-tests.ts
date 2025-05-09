import chaiLike = require("chai-like");
import "chai/register-should";

declare const expect: Chai.ExpectStatic;

import("chai").then(({ use }) => use(chaiLike));

expect([{ a: 1, b: false, c: "hello", d: 4.5 }]).to.be.like([{ b: false, c: "hello", d: 4.5 }]);
expect(123).to.not.be.like(456);

"hello".should.not.be.like(123);
({ a: "b", c: ["d", "e"] }).should.be.like({ c: ["d", "e"] });

chaiLike.extend({
    match: (object, expected) => typeof object === "string" && expected instanceof RegExp,
    assert: (object, expected) => (<RegExp> expected).test(object),
});
chaiLike.clearPlugins();
