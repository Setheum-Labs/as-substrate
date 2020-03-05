/// <reference path="../../../../node_modules/assemblyscript/std/assembly/index.d.ts" />

/**
 * @name u128
 * @description
 * An alias for for the u128 class in `as-bignum`.
 * For implementation details visit:
 * https://github.com/MaxGraey/as-bignum/blob/master/assembly/integer/u128.ts
 * 
 * Additional methods needed for de- and encoding according to the SCALE codec may be added here.
 */

import { u128 } from "as-bignum";
export class scaleU128 extends u128 {};