define(['dart_sdk', 'packages/collection/src/comparators'], function(dart_sdk, comparators) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__equality = comparators.src__equality;
  const _root = Object.create(null);
  const pub_semver = Object.create(_root);
  const src__patterns = Object.create(_root);
  const src__version_union = Object.create(_root);
  const src__version_range = Object.create(_root);
  const src__utils = Object.create(_root);
  const src__version_constraint = Object.create(_root);
  const src__version = Object.create(_root);
  const $any = dartx.any;
  const $iterator = dartx.iterator;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $single = dartx.single;
  const $first = dartx.first;
  const $last = dartx.last;
  const $join = dartx.join;
  const $hashCode = dartx.hashCode;
  const $every = dartx.every;
  const $compareTo = dartx.compareTo;
  const $trim = dartx.trim;
  const $substring = dartx.substring;
  const $startsWith = dartx.startsWith;
  const $isNotEmpty = dartx.isNotEmpty;
  const $toList = dartx.toList;
  const $expand = dartx.expand;
  const $sort = dartx.sort;
  const $_set = dartx._set;
  const $map = dartx.map;
  const $split = dartx.split;
  const $_get = dartx._get;
  let VersionRangeTobool = () => (VersionRangeTobool = dart.constFn(dart.fnType(core.bool, [src__version_range.VersionRange])))();
  let JSArrayOfVersionRange = () => (JSArrayOfVersionRange = dart.constFn(_interceptors.JSArray$(src__version_range.VersionRange)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let __Tobool = () => (__Tobool = dart.constFn(dart.fnType(core.bool, [], {includeCurrent: core.bool})))();
  let JSArrayOfVersionConstraint = () => (JSArrayOfVersionConstraint = dart.constFn(_interceptors.JSArray$(src__version_constraint.VersionConstraint)))();
  let ListOfVersionRange = () => (ListOfVersionRange = dart.constFn(core.List$(src__version_range.VersionRange)))();
  let ComparableOfVersionRange = () => (ComparableOfVersionRange = dart.constFn(core.Comparable$(src__version_range.VersionRange)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToVersion = () => (VoidToVersion = dart.constFn(dart.fnType(src__version.Version, [])))();
  let VoidToVersionRange = () => (VoidToVersionRange = dart.constFn(dart.fnType(src__version_range.VersionRange, [])))();
  let VoidToVersionConstraint = () => (VoidToVersionConstraint = dart.constFn(dart.fnType(src__version_constraint.VersionConstraint, [])))();
  let VersionConstraintToList = () => (VersionConstraintToList = dart.constFn(dart.fnType(core.List, [src__version_constraint.VersionConstraint])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let StringToObject = () => (StringToObject = dart.constFn(dart.fnType(core.Object, [core.String])))();
  dart.defineLazy(src__patterns, {
    /*src__patterns.START_VERSION*/get START_VERSION() {
      return core.RegExp.new("^" + "(\\d+).(\\d+).(\\d+)" + "(-([0-9A-Za-z-]+(\\.[0-9A-Za-z-]+)*))?" + "(\\+([0-9A-Za-z-]+(\\.[0-9A-Za-z-]+)*))?");
    },
    /*src__patterns.COMPLETE_VERSION*/get COMPLETE_VERSION() {
      return core.RegExp.new(dart.notNull(src__patterns.START_VERSION.pattern) + "$");
    },
    /*src__patterns.START_COMPARISON*/get START_COMPARISON() {
      return core.RegExp.new("^[<>]=?");
    },
    /*src__patterns.COMPATIBLE_WITH*/get COMPATIBLE_WITH() {
      return "^";
    }
  });
  const _rangesFor = Symbol('_rangesFor');
  let const$;
  let const$0;
  src__version_union.VersionUnion = class VersionUnion extends core.Object {
    get ranges() {
      return this[ranges$];
    }
    set ranges(value) {
      super.ranges = value;
    }
    get isEmpty() {
      return false;
    }
    get isAny() {
      return false;
    }
    allows(version) {
      return this.ranges[$any](dart.fn(constraint => constraint.allows(version), VersionRangeTobool()));
    }
    allowsAll(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      ourRanges.moveNext();
      theirRanges.moveNext();
      while (ourRanges.current != null && theirRanges.current != null) {
        if (dart.test(ourRanges.current.allowsAll(theirRanges.current))) {
          theirRanges.moveNext();
        } else {
          ourRanges.moveNext();
        }
      }
      return theirRanges.current == null;
    }
    allowsAny(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      ourRanges.moveNext();
      theirRanges.moveNext();
      while (ourRanges.current != null && theirRanges.current != null) {
        if (dart.test(ourRanges.current.allowsAny(theirRanges.current))) {
          return true;
        }
        if (dart.test(src__utils.allowsHigher(theirRanges.current, ourRanges.current))) {
          ourRanges.moveNext();
        } else {
          theirRanges.moveNext();
        }
      }
      return false;
    }
    intersect(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      let newRanges = JSArrayOfVersionRange().of([]);
      ourRanges.moveNext();
      theirRanges.moveNext();
      while (ourRanges.current != null && theirRanges.current != null) {
        let intersection = ourRanges.current.intersect(theirRanges.current);
        if (!dart.test(intersection.isEmpty)) newRanges[$add](src__version_range.VersionRange._check(intersection));
        if (dart.test(src__utils.allowsHigher(theirRanges.current, ourRanges.current))) {
          ourRanges.moveNext();
        } else {
          theirRanges.moveNext();
        }
      }
      if (dart.test(newRanges[$isEmpty])) return src__version_constraint.VersionConstraint.empty;
      if (newRanges[$length] === 1) return newRanges[$single];
      return new src__version_union.VersionUnion.fromRanges(newRanges);
    }
    difference(other) {
      let ourRanges = this.ranges[$iterator];
      let theirRanges = this[_rangesFor](other)[$iterator];
      let newRanges = JSArrayOfVersionRange().of([]);
      ourRanges.moveNext();
      theirRanges.moveNext();
      let current = ourRanges.current;
      function theirNextRange() {
        if (dart.test(theirRanges.moveNext())) return true;
        newRanges[$add](current);
        while (dart.test(ourRanges.moveNext())) {
          newRanges[$add](ourRanges.current);
        }
        return false;
      }
      dart.fn(theirNextRange, VoidTobool());
      function ourNextRange(opts) {
        let includeCurrent = opts && 'includeCurrent' in opts ? opts.includeCurrent : true;
        if (dart.test(includeCurrent)) newRanges[$add](current);
        if (!dart.test(ourRanges.moveNext())) return false;
        current = ourRanges.current;
        return true;
      }
      dart.fn(ourNextRange, __Tobool());
      while (true) {
        if (dart.test(src__utils.strictlyLower(theirRanges.current, current))) {
          if (!dart.test(theirNextRange())) break;
          continue;
        }
        if (dart.test(src__utils.strictlyHigher(theirRanges.current, current))) {
          if (!dart.test(ourNextRange())) break;
          continue;
        }
        let difference = current.difference(theirRanges.current);
        if (src__version_union.VersionUnion.is(difference)) {
          if (!(difference.ranges[$length] === 2)) dart.assertFailed();
          newRanges[$add](difference.ranges[$first]);
          current = difference.ranges[$last];
          if (!dart.test(theirNextRange())) break;
        } else if (dart.test(difference.isEmpty)) {
          if (!dart.test(ourNextRange({includeCurrent: false}))) break;
        } else {
          current = src__version_range.VersionRange.as(difference);
          if (dart.test(src__utils.allowsHigher(current, theirRanges.current))) {
            if (!dart.test(theirNextRange())) break;
          } else {
            if (!dart.test(ourNextRange())) break;
          }
        }
      }
      if (dart.test(newRanges[$isEmpty])) return src__version_constraint.VersionConstraint.empty;
      if (newRanges[$length] === 1) return newRanges[$single];
      return new src__version_union.VersionUnion.fromRanges(newRanges);
    }
    [_rangesFor](constraint) {
      if (dart.test(constraint.isEmpty)) return JSArrayOfVersionRange().of([]);
      if (src__version_union.VersionUnion.is(constraint)) return constraint.ranges;
      if (src__version_range.VersionRange.is(constraint)) return JSArrayOfVersionRange().of([constraint]);
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(constraint) + "."));
    }
    union(other) {
      return src__version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraint().of([this, other]));
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__version_union.VersionUnion.is(other)) return false;
      return (const$ || (const$ = dart.const(new src__equality.ListEquality.new()))).equals(this.ranges, core.List._check(dart.dload(other, 'ranges')));
    }
    get hashCode() {
      return (const$0 || (const$0 = dart.const(new src__equality.ListEquality.new()))).hash(this.ranges);
    }
    toString() {
      return this.ranges[$join](" or ");
    }
  };
  (src__version_union.VersionUnion.fromRanges = function(ranges) {
    this[ranges$] = ranges;
  }).prototype = src__version_union.VersionUnion.prototype;
  dart.addTypeTests(src__version_union.VersionUnion);
  const ranges$ = Symbol("VersionUnion.ranges");
  src__version_union.VersionUnion[dart.implements] = () => [src__version_constraint.VersionConstraint];
  dart.setMethodSignature(src__version_union.VersionUnion, () => ({
    __proto__: dart.getMethods(src__version_union.VersionUnion.__proto__),
    allows: dart.fnType(core.bool, [src__version.Version]),
    allowsAll: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    intersect: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    difference: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    [_rangesFor]: dart.fnType(core.List$(src__version_range.VersionRange), [src__version_constraint.VersionConstraint]),
    union: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint])
  }));
  dart.setGetterSignature(src__version_union.VersionUnion, () => ({
    __proto__: dart.getGetters(src__version_union.VersionUnion.__proto__),
    isEmpty: core.bool,
    isAny: core.bool
  }));
  dart.setFieldSignature(src__version_union.VersionUnion, () => ({
    __proto__: dart.getFields(src__version_union.VersionUnion.__proto__),
    ranges: dart.finalFieldType(ListOfVersionRange())
  }));
  dart.defineExtensionMethods(src__version_union.VersionUnion, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__version_union.VersionUnion, ['hashCode']);
  const _compareMax = Symbol('_compareMax');
  src__version_range.VersionRange = class VersionRange extends core.Object {
    get min() {
      return this[min$];
    }
    set min(value) {
      super.min = value;
    }
    get max() {
      return this[max$];
    }
    set max(value) {
      super.max = value;
    }
    get includeMin() {
      return this[includeMin$];
    }
    set includeMin(value) {
      super.includeMin = value;
    }
    get includeMax() {
      return this[includeMax$];
    }
    set includeMax(value) {
      super.includeMax = value;
    }
    static new(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      let includeMin = opts && 'includeMin' in opts ? opts.includeMin : false;
      let includeMax = opts && 'includeMax' in opts ? opts.includeMax : false;
      let alwaysIncludeMaxPreRelease = opts && 'alwaysIncludeMaxPreRelease' in opts ? opts.alwaysIncludeMaxPreRelease : false;
      if (min != null && max != null && dart.test(min['>'](max))) {
        dart.throw(new core.ArgumentError.new("Minimum version (\"" + dart.str(min) + "\") must be less than maximum (\"" + dart.str(max) + "\")."));
      }
      if (!dart.test(alwaysIncludeMaxPreRelease) && !dart.test(includeMax) && max != null && !dart.test(max.isPreRelease) && dart.test(max.build[$isEmpty]) && (min == null || !dart.test(min.isPreRelease) || !dart.test(src__utils.equalsWithoutPreRelease(min, max)))) {
        max = max.firstPreRelease;
      }
      return new src__version_range.VersionRange.__(min, max, includeMin, includeMax);
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__version_range.VersionRange.is(other)) return false;
      return dart.equals(this.min, dart.dload(other, 'min')) && dart.equals(this.max, dart.dload(other, 'max')) && core.identical(this.includeMin, dart.dload(other, 'includeMin')) && core.identical(this.includeMax, dart.dload(other, 'includeMax'));
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.min)) ^ dart.notNull(dart.hashCode(this.max)) * 3 ^ dart.hashCode(this.includeMin) * 5 ^ dart.hashCode(this.includeMax) * 7) >>> 0;
    }
    get isEmpty() {
      return false;
    }
    get isAny() {
      return this.min == null && this.max == null;
    }
    allows(other) {
      if (this.min != null) {
        if (dart.test(other['<'](this.min))) return false;
        if (!dart.test(this.includeMin) && dart.equals(other, this.min)) return false;
      }
      if (this.max != null) {
        if (dart.test(other['>'](this.max))) return false;
        if (!dart.test(this.includeMax) && dart.equals(other, this.max)) return false;
      }
      return true;
    }
    allowsAll(other) {
      if (dart.test(other.isEmpty)) return true;
      if (src__version.Version.is(other)) return this.allows(other);
      if (src__version_union.VersionUnion.is(other)) {
        return other.ranges[$every](dart.fn(constraint => this.allowsAll(constraint), VersionRangeTobool()));
      }
      if (src__version_range.VersionRange.is(other)) {
        return !dart.test(src__utils.allowsLower(other, this)) && !dart.test(src__utils.allowsHigher(other, this));
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    allowsAny(other) {
      if (dart.test(other.isEmpty)) return false;
      if (src__version.Version.is(other)) return this.allows(other);
      if (src__version_union.VersionUnion.is(other)) {
        return other.ranges[$any](dart.fn(constraint => this.allowsAny(constraint), VersionRangeTobool()));
      }
      if (src__version_range.VersionRange.is(other)) {
        return !dart.test(src__utils.strictlyLower(other, this)) && !dart.test(src__utils.strictlyHigher(other, this));
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    intersect(other) {
      if (dart.test(other.isEmpty)) return other;
      if (src__version_union.VersionUnion.is(other)) return other.intersect(this);
      if (src__version.Version.is(other)) {
        return dart.test(this.allows(other)) ? other : src__version_constraint.VersionConstraint.empty;
      }
      if (src__version_range.VersionRange.is(other)) {
        let intersectMin = null;
        let intersectIncludeMin = null;
        if (dart.test(src__utils.allowsLower(this, other))) {
          if (dart.test(src__utils.strictlyLower(this, other))) return src__version_constraint.VersionConstraint.empty;
          intersectMin = other.min;
          intersectIncludeMin = other.includeMin;
        } else {
          if (dart.test(src__utils.strictlyLower(other, this))) return src__version_constraint.VersionConstraint.empty;
          intersectMin = this.min;
          intersectIncludeMin = this.includeMin;
        }
        let intersectMax = null;
        let intersectIncludeMax = null;
        if (dart.test(src__utils.allowsHigher(this, other))) {
          intersectMax = other.max;
          intersectIncludeMax = other.includeMax;
        } else {
          intersectMax = this.max;
          intersectIncludeMax = this.includeMax;
        }
        if (intersectMin == null && intersectMax == null) {
          return src__version_range.VersionRange.new();
        }
        if (dart.equals(intersectMin, intersectMax)) {
          if (!(dart.test(intersectIncludeMin) && dart.test(intersectIncludeMax))) dart.assertFailed();
          return intersectMin;
        }
        return src__version_range.VersionRange.new({min: intersectMin, max: intersectMax, includeMin: intersectIncludeMin, includeMax: intersectIncludeMax, alwaysIncludeMaxPreRelease: true});
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    union(other) {
      if (src__version.Version.is(other)) {
        if (dart.test(this.allows(other))) return this;
        if (dart.equals(other, this.min)) {
          return src__version_range.VersionRange.new({min: this.min, max: this.max, includeMin: true, includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (dart.equals(other, this.max)) {
          return src__version_range.VersionRange.new({min: this.min, max: this.max, includeMin: this.includeMin, includeMax: true, alwaysIncludeMaxPreRelease: true});
        }
        return src__version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraint().of([this, other]));
      }
      if (src__version_range.VersionRange.is(other)) {
        let edgesTouch = dart.equals(this.max, other.min) && (dart.test(this.includeMax) || dart.test(other.includeMin)) || dart.equals(this.min, other.max) && (dart.test(this.includeMin) || dart.test(other.includeMax));
        if (!edgesTouch && !dart.test(this.allowsAny(other))) {
          return src__version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraint().of([this, other]));
        }
        let unionMin = null;
        let unionIncludeMin = null;
        if (dart.test(src__utils.allowsLower(this, other))) {
          unionMin = this.min;
          unionIncludeMin = this.includeMin;
        } else {
          unionMin = other.min;
          unionIncludeMin = other.includeMin;
        }
        let unionMax = null;
        let unionIncludeMax = null;
        if (dart.test(src__utils.allowsHigher(this, other))) {
          unionMax = this.max;
          unionIncludeMax = this.includeMax;
        } else {
          unionMax = other.max;
          unionIncludeMax = other.includeMax;
        }
        return src__version_range.VersionRange.new({min: unionMin, max: unionMax, includeMin: unionIncludeMin, includeMax: unionIncludeMax, alwaysIncludeMaxPreRelease: true});
      }
      return src__version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraint().of([this, other]));
    }
    difference(other) {
      if (dart.test(other.isEmpty)) return this;
      if (src__version.Version.is(other)) {
        if (!dart.test(this.allows(other))) return this;
        if (dart.equals(other, this.min)) {
          if (!dart.test(this.includeMin)) return this;
          return src__version_range.VersionRange.new({min: this.min, max: this.max, includeMin: false, includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (dart.equals(other, this.max)) {
          if (!dart.test(this.includeMax)) return this;
          return src__version_range.VersionRange.new({min: this.min, max: this.max, includeMin: this.includeMin, includeMax: false, alwaysIncludeMaxPreRelease: true});
        }
        return new src__version_union.VersionUnion.fromRanges(JSArrayOfVersionRange().of([src__version_range.VersionRange.new({min: this.min, max: other, includeMin: this.includeMin, includeMax: false, alwaysIncludeMaxPreRelease: true}), src__version_range.VersionRange.new({min: other, max: this.max, includeMin: false, includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true})]));
      } else if (src__version_range.VersionRange.is(other)) {
        if (!dart.test(this.allowsAny(other))) return this;
        let before = null;
        if (!dart.test(src__utils.allowsLower(this, other))) {
          before = null;
        } else if (dart.equals(this.min, other.min)) {
          if (!(dart.test(this.includeMin) && !dart.test(other.includeMin))) dart.assertFailed();
          if (!(this.min != null)) dart.assertFailed();
          before = this.min;
        } else {
          before = src__version_range.VersionRange.new({min: this.min, max: other.min, includeMin: this.includeMin, includeMax: !dart.test(other.includeMin), alwaysIncludeMaxPreRelease: true});
        }
        let after = null;
        if (!dart.test(src__utils.allowsHigher(this, other))) {
          after = null;
        } else if (dart.equals(this.max, other.max)) {
          if (!(dart.test(this.includeMax) && !dart.test(other.includeMax))) dart.assertFailed();
          if (!(this.max != null)) dart.assertFailed();
          after = this.max;
        } else {
          after = src__version_range.VersionRange.new({min: other.max, max: this.max, includeMin: !dart.test(other.includeMax), includeMax: this.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (before == null && after == null) return src__version_constraint.VersionConstraint.empty;
        if (before == null) return after;
        if (after == null) return before;
        return new src__version_union.VersionUnion.fromRanges(JSArrayOfVersionRange().of([before, after]));
      } else if (src__version_union.VersionUnion.is(other)) {
        let ranges = JSArrayOfVersionRange().of([]);
        let current = this;
        for (let range of other.ranges) {
          if (dart.test(src__utils.strictlyLower(range, current))) continue;
          if (dart.test(src__utils.strictlyHigher(range, current))) break;
          let difference = current.difference(range);
          if (dart.test(difference.isEmpty)) {
            return src__version_constraint.VersionConstraint.empty;
          } else if (src__version_union.VersionUnion.is(difference)) {
            if (!(difference.ranges[$length] === 2)) dart.assertFailed();
            ranges[$add](difference.ranges[$first]);
            current = difference.ranges[$last];
          } else {
            current = src__version_range.VersionRange.as(difference);
          }
        }
        if (dart.test(ranges[$isEmpty])) return current;
        return new src__version_union.VersionUnion.fromRanges((() => {
          ranges[$add](current);
          return ranges;
        })());
      }
      dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(other) + "."));
    }
    compareTo(other) {
      src__version_range.VersionRange._check(other);
      if (this.min == null) {
        if (other.min == null) return this[_compareMax](other);
        return -1;
      } else if (other.min == null) {
        return 1;
      }
      let result = this.min.compareTo(other.min);
      if (result !== 0) return result;
      if (this.includeMin != other.includeMin) return dart.test(this.includeMin) ? -1 : 1;
      return this[_compareMax](other);
    }
    [_compareMax](other) {
      if (this.max == null) {
        if (other.max == null) return 0;
        return 1;
      } else if (other.max == null) {
        return -1;
      }
      let result = this.max.compareTo(other.max);
      if (result !== 0) return result;
      if (this.includeMax != other.includeMax) return dart.test(this.includeMax) ? 1 : -1;
      return 0;
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      if (this.min != null) {
        buffer.write(dart.test(this.includeMin) ? ">=" : ">");
        buffer.write(this.min);
      }
      if (this.max != null) {
        if (this.min != null) buffer.write(" ");
        if (dart.test(this.includeMax)) {
          buffer.write("<=");
          buffer.write(this.max);
        } else {
          buffer.write("<");
          if (dart.test(this.max.isFirstPreRelease)) {
            buffer.write(dart.str(this.max.major) + "." + dart.str(this.max.minor) + "." + dart.str(this.max.patch));
          } else {
            buffer.write(this.max);
            let minIsPreReleaseOfMax = this.min != null && dart.test(this.min.isPreRelease) && dart.test(src__utils.equalsWithoutPreRelease(this.min, this.max));
            if (!dart.test(this.max.isPreRelease) && dart.test(this.max.build[$isEmpty]) && !minIsPreReleaseOfMax) {
              buffer.write("-∞");
            }
          }
        }
      }
      if (this.min == null && this.max == null) buffer.write("any");
      return buffer.toString();
    }
  };
  (src__version_range.VersionRange.__ = function(min, max, includeMin, includeMax) {
    this[min$] = min;
    this[max$] = max;
    this[includeMin$] = includeMin;
    this[includeMax$] = includeMax;
  }).prototype = src__version_range.VersionRange.prototype;
  dart.addTypeTests(src__version_range.VersionRange);
  const min$ = Symbol("VersionRange.min");
  const max$ = Symbol("VersionRange.max");
  const includeMin$ = Symbol("VersionRange.includeMin");
  const includeMax$ = Symbol("VersionRange.includeMax");
  src__version_range.VersionRange[dart.implements] = () => [ComparableOfVersionRange(), src__version_constraint.VersionConstraint];
  dart.setMethodSignature(src__version_range.VersionRange, () => ({
    __proto__: dart.getMethods(src__version_range.VersionRange.__proto__),
    allows: dart.fnType(core.bool, [src__version.Version]),
    allowsAll: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    intersect: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    union: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    difference: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    [_compareMax]: dart.fnType(core.int, [src__version_range.VersionRange])
  }));
  dart.setGetterSignature(src__version_range.VersionRange, () => ({
    __proto__: dart.getGetters(src__version_range.VersionRange.__proto__),
    isEmpty: core.bool,
    isAny: core.bool
  }));
  dart.setFieldSignature(src__version_range.VersionRange, () => ({
    __proto__: dart.getFields(src__version_range.VersionRange.__proto__),
    min: dart.finalFieldType(src__version.Version),
    max: dart.finalFieldType(src__version.Version),
    includeMin: dart.finalFieldType(core.bool),
    includeMax: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__version_range.VersionRange, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(src__version_range.VersionRange, ['hashCode']);
  src__version_range.CompatibleWithVersionRange = class CompatibleWithVersionRange extends src__version_range.VersionRange {
    toString() {
      return "^" + dart.str(this.min);
    }
  };
  (src__version_range.CompatibleWithVersionRange.new = function(version) {
    src__version_range.CompatibleWithVersionRange.__proto__.__.call(this, version, version.nextBreaking.firstPreRelease, true, false);
  }).prototype = src__version_range.CompatibleWithVersionRange.prototype;
  dart.addTypeTests(src__version_range.CompatibleWithVersionRange);
  dart.defineExtensionMethods(src__version_range.CompatibleWithVersionRange, ['toString']);
  src__utils.areAdjacent = function(range1, range2) {
    if (!dart.equals(range1.max, range2.min)) return false;
    return dart.test(range1.includeMax) && !dart.test(range2.includeMin) || !dart.test(range1.includeMax) && dart.test(range2.includeMin);
  };
  src__utils.allowsLower = function(range1, range2) {
    if (range1.min == null) return range2.min != null;
    if (range2.min == null) return false;
    let comparison = range1.min.compareTo(range2.min);
    if (comparison === -1) return true;
    if (comparison === 1) return false;
    return dart.test(range1.includeMin) && !dart.test(range2.includeMin);
  };
  src__utils.allowsHigher = function(range1, range2) {
    if (range1.max == null) return range2.max != null;
    if (range2.max == null) return false;
    let comparison = range1.max.compareTo(range2.max);
    if (comparison === 1) return true;
    if (comparison === -1) return false;
    return dart.test(range1.includeMax) && !dart.test(range2.includeMax);
  };
  src__utils.strictlyLower = function(range1, range2) {
    if (range1.max == null || range2.min == null) return false;
    let comparison = range1.max.compareTo(range2.min);
    if (comparison === -1) return true;
    if (comparison === 1) return false;
    return !dart.test(range1.includeMax) || !dart.test(range2.includeMin);
  };
  src__utils.strictlyHigher = function(range1, range2) {
    return src__utils.strictlyLower(range2, range1);
  };
  src__utils.equalsWithoutPreRelease = function(version1, version2) {
    return version1.major == version2.major && version1.minor == version2.minor && version1.patch == version2.patch;
  };
  src__version_constraint.VersionConstraint = class VersionConstraint extends core.Object {
    static parse(text) {
      let originalText = text;
      function skipWhitespace() {
        text = text[$trim]();
      }
      dart.fn(skipWhitespace, VoidToNull());
      skipWhitespace();
      if (text === "any") return src__version_constraint.VersionConstraint.any;
      function matchVersion() {
        let version = src__patterns.START_VERSION.firstMatch(text);
        if (version == null) return null;
        text = text[$substring](version.end);
        return src__version.Version.parse(version._get(0));
      }
      dart.fn(matchVersion, VoidToVersion());
      function matchComparison() {
        let comparison = src__patterns.START_COMPARISON.firstMatch(text);
        if (comparison == null) return null;
        let op = comparison._get(0);
        text = text[$substring](comparison.end);
        skipWhitespace();
        let version = matchVersion();
        if (version == null) {
          dart.throw(new core.FormatException.new("Expected version number after \"" + dart.str(op) + "\" in " + ("\"" + dart.str(originalText) + "\", got \"" + dart.str(text) + "\".")));
        }
        switch (op) {
          case "<=":
          {
            return src__version_range.VersionRange.new({max: version, includeMax: true});
          }
          case "<":
          {
            return src__version_range.VersionRange.new({max: version, includeMax: false, alwaysIncludeMaxPreRelease: true});
          }
          case ">=":
          {
            return src__version_range.VersionRange.new({min: version, includeMin: true});
          }
          case ">":
          {
            return src__version_range.VersionRange.new({min: version, includeMin: false});
          }
        }
        dart.throw("Unreachable.");
      }
      dart.fn(matchComparison, VoidToVersionRange());
      function matchCompatibleWith() {
        if (!text[$startsWith]("^")) return null;
        text = text[$substring]("^".length);
        skipWhitespace();
        let version = matchVersion();
        if (version == null) {
          dart.throw(new core.FormatException.new("Expected version number after " + ("\"" + "^" + "\" in \"" + dart.str(originalText) + "\", got \"" + dart.str(text) + "\".")));
        }
        if (text[$isNotEmpty]) {
          dart.throw(new core.FormatException.new("Cannot include other constraints with " + ("\"" + "^" + "\" constraint in \"" + dart.str(originalText) + "\".")));
        }
        return src__version_constraint.VersionConstraint.compatibleWith(version);
      }
      dart.fn(matchCompatibleWith, VoidToVersionConstraint());
      let compatibleWith = matchCompatibleWith();
      if (compatibleWith != null) return compatibleWith;
      let min = null;
      let includeMin = false;
      let max = null;
      let includeMax = false;
      while (true) {
        skipWhitespace();
        if (text[$isEmpty]) break;
        let l = matchVersion();
        let newRange = l != null ? l : matchComparison();
        if (newRange == null) {
          dart.throw(new core.FormatException.new("Could not parse version \"" + dart.str(originalText) + "\". " + ("Unknown text at \"" + dart.str(text) + "\".")));
        }
        if (newRange.min != null) {
          if (min == null || dart.test(newRange.min['>'](min))) {
            min = newRange.min;
            includeMin = newRange.includeMin;
          } else if (dart.equals(newRange.min, min) && !dart.test(newRange.includeMin)) {
            includeMin = false;
          }
        }
        if (newRange.max != null) {
          if (max == null || dart.test(newRange.max['<'](max))) {
            max = newRange.max;
            includeMax = newRange.includeMax;
          } else if (dart.equals(newRange.max, max) && !dart.test(newRange.includeMax)) {
            includeMax = false;
          }
        }
      }
      if (min == null && max == null) {
        dart.throw(new core.FormatException.new("Cannot parse an empty string."));
      }
      if (min != null && max != null) {
        if (dart.test(min['>'](max))) return src__version_constraint.VersionConstraint.empty;
        if (dart.equals(min, max)) {
          if (dart.test(includeMin) && dart.test(includeMax)) return min;
          return src__version_constraint.VersionConstraint.empty;
        }
      }
      return src__version_range.VersionRange.new({min: min, includeMin: includeMin, max: max, includeMax: includeMax});
    }
    static compatibleWith(version) {
      return new src__version_range.CompatibleWithVersionRange.new(version);
    }
    static intersection(constraints) {
      let constraint = src__version_range.VersionRange.new();
      for (let other of constraints) {
        constraint = src__version_range.VersionRange._check(constraint.intersect(other));
      }
      return constraint;
    }
    static unionOf(constraints) {
      let flattened = constraints[$expand](dart.dynamic, dart.fn(constraint => {
        if (dart.test(constraint.isEmpty)) return [];
        if (src__version_union.VersionUnion.is(constraint)) return constraint.ranges;
        return JSArrayOfVersionConstraint().of([constraint]);
      }, VersionConstraintToList()))[$toList]();
      if (dart.test(flattened[$isEmpty])) return src__version_constraint.VersionConstraint.empty;
      if (dart.test(flattened[$any](dart.fn(constraint => core.bool._check(dart.dload(constraint, 'isAny')), dynamicTobool())))) {
        return src__version_constraint.VersionConstraint.any;
      }
      for (let constraint of flattened) {
        if (src__version_range.VersionRange.is(constraint)) continue;
        dart.throw(new core.ArgumentError.new("Unknown VersionConstraint type " + dart.str(constraint) + "."));
      }
      flattened[$sort]();
      let merged = JSArrayOfVersionRange().of([]);
      for (let constraint of flattened) {
        if (dart.test(merged[$isEmpty]) || !dart.test(merged[$last].allowsAny(src__version_constraint.VersionConstraint._check(constraint))) && !dart.test(src__utils.areAdjacent(merged[$last], src__version_range.VersionRange._check(constraint)))) {
          merged[$add](src__version_range.VersionRange._check(constraint));
        } else {
          merged[$_set](dart.notNull(merged[$length]) - 1, src__version_range.VersionRange._check(merged[$last].union(src__version_constraint.VersionConstraint._check(constraint))));
        }
      }
      if (merged[$length] === 1) return merged[$single];
      return new src__version_union.VersionUnion.fromRanges(merged);
    }
  };
  (src__version_constraint.VersionConstraint[dart.mixinNew] = function() {
  }).prototype = src__version_constraint.VersionConstraint.prototype;
  dart.addTypeTests(src__version_constraint.VersionConstraint);
  dart.defineLazy(src__version_constraint.VersionConstraint, {
    /*src__version_constraint.VersionConstraint.any*/get any() {
      return src__version_range.VersionRange.new();
    },
    set any(_) {},
    /*src__version_constraint.VersionConstraint.empty*/get empty() {
      return dart.const(new src__version_constraint._EmptyVersion.new());
    },
    set empty(_) {}
  });
  src__version_constraint._EmptyVersion = class _EmptyVersion extends core.Object {
    get isEmpty() {
      return true;
    }
    get isAny() {
      return false;
    }
    allows(other) {
      return false;
    }
    allowsAll(other) {
      return other.isEmpty;
    }
    allowsAny(other) {
      return false;
    }
    intersect(other) {
      return this;
    }
    union(other) {
      return other;
    }
    difference(other) {
      return this;
    }
    toString() {
      return "<empty>";
    }
  };
  (src__version_constraint._EmptyVersion.new = function() {
  }).prototype = src__version_constraint._EmptyVersion.prototype;
  dart.addTypeTests(src__version_constraint._EmptyVersion);
  src__version_constraint._EmptyVersion[dart.implements] = () => [src__version_constraint.VersionConstraint];
  dart.setMethodSignature(src__version_constraint._EmptyVersion, () => ({
    __proto__: dart.getMethods(src__version_constraint._EmptyVersion.__proto__),
    allows: dart.fnType(core.bool, [src__version.Version]),
    allowsAll: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    intersect: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    union: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    difference: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint])
  }));
  dart.setGetterSignature(src__version_constraint._EmptyVersion, () => ({
    __proto__: dart.getGetters(src__version_constraint._EmptyVersion.__proto__),
    isEmpty: core.bool,
    isAny: core.bool
  }));
  dart.defineExtensionMethods(src__version_constraint._EmptyVersion, ['toString']);
  dart.defineLazy(src__version, {
    /*src__version._equality*/get _equality() {
      return dart.const(new src__equality.IterableEquality.new());
    }
  });
  const _text = Symbol('_text');
  const _incrementMajor = Symbol('_incrementMajor');
  const _incrementMinor = Symbol('_incrementMinor');
  const _incrementPatch = Symbol('_incrementPatch');
  const _compareLists = Symbol('_compareLists');
  src__version.Version = class Version extends core.Object {
    static get none() {
      return src__version.Version.new(0, 0, 0);
    }
    static prioritize(a, b) {
      if (dart.test(a.isPreRelease) && !dart.test(b.isPreRelease)) return -1;
      if (!dart.test(a.isPreRelease) && dart.test(b.isPreRelease)) return 1;
      return a.compareTo(b);
    }
    static antiprioritize(a, b) {
      if (dart.test(a.isPreRelease) && !dart.test(b.isPreRelease)) return -1;
      if (!dart.test(a.isPreRelease) && dart.test(b.isPreRelease)) return 1;
      return b.compareTo(a);
    }
    get major() {
      return this[major$];
    }
    set major(value) {
      super.major = value;
    }
    get minor() {
      return this[minor$];
    }
    set minor(value) {
      super.minor = value;
    }
    get patch() {
      return this[patch$];
    }
    set patch(value) {
      super.patch = value;
    }
    get preRelease() {
      return this[preRelease$];
    }
    set preRelease(value) {
      super.preRelease = value;
    }
    get build() {
      return this[build$];
    }
    set build(value) {
      super.build = value;
    }
    get min() {
      return this;
    }
    get max() {
      return this;
    }
    get includeMin() {
      return true;
    }
    get includeMax() {
      return true;
    }
    static new(major, minor, patch, opts) {
      let pre = opts && 'pre' in opts ? opts.pre : null;
      let build = opts && 'build' in opts ? opts.build : null;
      let text = dart.str(major) + "." + dart.str(minor) + "." + dart.str(patch);
      if (pre != null) {
        text = text + ("-" + dart.str(pre));
      }
      if (build != null) {
        text = text + ("+" + dart.str(build));
      }
      return new src__version.Version.__(major, minor, patch, pre, build, text);
    }
    static parse(text) {
      let match = src__patterns.COMPLETE_VERSION.firstMatch(text);
      if (match == null) {
        dart.throw(new core.FormatException.new("Could not parse \"" + dart.str(text) + "\"."));
      }
      try {
        let major = core.int.parse(match._get(1));
        let minor = core.int.parse(match._get(2));
        let patch = core.int.parse(match._get(3));
        let preRelease = match._get(5);
        let build = match._get(8);
        return new src__version.Version.__(major, minor, patch, preRelease, build, text);
      } catch (e) {
        if (core.FormatException.is(e)) {
          dart.throw(new core.FormatException.new("Could not parse \"" + dart.str(text) + "\"."));
        } else
          throw e;
      }
    }
    static primary(versions) {
      let primary = null;
      for (let version of versions) {
        if (primary == null || !dart.test(version.isPreRelease) && dart.dtest(dart.dload(primary, 'isPreRelease')) || core.identical(version.isPreRelease, dart.dload(primary, 'isPreRelease')) && dart.test(version['>'](src__version.Version._check(primary)))) {
          primary = version;
        }
      }
      return src__version.Version._check(primary);
    }
    static _splitParts(text) {
      return text[$split](".")[$map](core.Object, dart.fn(part => {
        try {
          return core.int.parse(part);
        } catch (e) {
          if (core.FormatException.is(e)) {
            return part;
          } else
            throw e;
        }
      }, StringToObject()))[$toList]();
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__version.Version.is(other)) return false;
      return core.identical(this.major, dart.dload(other, 'major')) && core.identical(this.minor, dart.dload(other, 'minor')) && core.identical(this.patch, dart.dload(other, 'patch')) && dart.test(src__version._equality.equals(this.preRelease, core.Iterable._check(dart.dload(other, 'preRelease')))) && dart.test(src__version._equality.equals(this.build, core.Iterable._check(dart.dload(other, 'build'))));
    }
    get hashCode() {
      return (dart.notNull(this.major) ^ dart.notNull(this.minor) ^ dart.notNull(this.patch) ^ dart.notNull(src__version._equality.hash(this.preRelease)) ^ dart.notNull(src__version._equality.hash(this.build))) >>> 0;
    }
    ['<'](other) {
      return dart.notNull(this.compareTo(other)) < 0;
    }
    ['>'](other) {
      return dart.notNull(this.compareTo(other)) > 0;
    }
    ['<='](other) {
      return dart.notNull(this.compareTo(other)) <= 0;
    }
    ['>='](other) {
      return dart.notNull(this.compareTo(other)) >= 0;
    }
    get isAny() {
      return false;
    }
    get isEmpty() {
      return false;
    }
    get isPreRelease() {
      return this.preRelease[$isNotEmpty];
    }
    get nextMajor() {
      if (dart.test(this.isPreRelease) && this.minor === 0 && this.patch === 0) {
        return src__version.Version.new(this.major, this.minor, this.patch);
      }
      return this[_incrementMajor]();
    }
    get nextMinor() {
      if (dart.test(this.isPreRelease) && this.patch === 0) {
        return src__version.Version.new(this.major, this.minor, this.patch);
      }
      return this[_incrementMinor]();
    }
    get nextPatch() {
      if (dart.test(this.isPreRelease)) {
        return src__version.Version.new(this.major, this.minor, this.patch);
      }
      return this[_incrementPatch]();
    }
    get nextBreaking() {
      if (this.major === 0) {
        return this[_incrementMinor]();
      }
      return this[_incrementMajor]();
    }
    get firstPreRelease() {
      return src__version.Version.new(this.major, this.minor, this.patch, {pre: "0"});
    }
    get isFirstPreRelease() {
      return this.preRelease[$length] === 1 && dart.equals(this.preRelease[$first], 0);
    }
    [_incrementMajor]() {
      return src__version.Version.new(dart.notNull(this.major) + 1, 0, 0);
    }
    [_incrementMinor]() {
      return src__version.Version.new(this.major, dart.notNull(this.minor) + 1, 0);
    }
    [_incrementPatch]() {
      return src__version.Version.new(this.major, this.minor, dart.notNull(this.patch) + 1);
    }
    allows(other) {
      return this._equals(other);
    }
    allowsAll(other) {
      return dart.test(other.isEmpty) || dart.equals(other, this);
    }
    allowsAny(other) {
      return other.allows(this);
    }
    intersect(other) {
      return dart.test(other.allows(this)) ? this : src__version_constraint.VersionConstraint.empty;
    }
    union(other) {
      if (dart.test(other.allows(this))) return other;
      if (src__version_range.VersionRange.is(other)) {
        if (dart.equals(other.min, this)) {
          return src__version_range.VersionRange.new({min: other.min, max: other.max, includeMin: true, includeMax: other.includeMax, alwaysIncludeMaxPreRelease: true});
        }
        if (dart.equals(other.max, this)) {
          return src__version_range.VersionRange.new({min: other.min, max: other.max, includeMin: other.includeMin, includeMax: true, alwaysIncludeMaxPreRelease: true});
        }
      }
      return src__version_constraint.VersionConstraint.unionOf(JSArrayOfVersionConstraint().of([this, other]));
    }
    difference(other) {
      return dart.test(other.allows(this)) ? src__version_constraint.VersionConstraint.empty : this;
    }
    compareTo(other) {
      src__version_range.VersionRange._check(other);
      if (src__version.Version.is(other)) {
        if (this.major != other.major) return this.major[$compareTo](other.major);
        if (this.minor != other.minor) return this.minor[$compareTo](other.minor);
        if (this.patch != other.patch) return this.patch[$compareTo](other.patch);
        if (!dart.test(this.isPreRelease) && dart.test(other.isPreRelease)) return 1;
        if (!dart.test(other.isPreRelease) && dart.test(this.isPreRelease)) return -1;
        let comparison = this[_compareLists](this.preRelease, other.preRelease);
        if (comparison !== 0) return comparison;
        if (dart.test(this.build[$isEmpty]) && dart.test(other.build[$isNotEmpty])) return -1;
        if (dart.test(other.build[$isEmpty]) && dart.test(this.build[$isNotEmpty])) return 1;
        return this[_compareLists](this.build, other.build);
      } else {
        return -dart.notNull(other.compareTo(this));
      }
    }
    toString() {
      return this[_text];
    }
    [_compareLists](a, b) {
      for (let i = 0; i < math.max(core.int, a[$length], b[$length]); i++) {
        let aPart = i < dart.notNull(a[$length]) ? a[$_get](i) : null;
        let bPart = i < dart.notNull(b[$length]) ? b[$_get](i) : null;
        if (dart.equals(aPart, bPart)) continue;
        if (aPart == null) return -1;
        if (bPart == null) return 1;
        if (typeof aPart == 'number') {
          if (typeof bPart == 'number') {
            return aPart[$compareTo](bPart);
          } else {
            return -1;
          }
        } else {
          if (typeof bPart == 'number') {
            return 1;
          } else {
            return core.int._check(dart.dsend(aPart, 'compareTo', [bPart]));
          }
        }
      }
      return 0;
    }
  };
  (src__version.Version.__ = function(major, minor, patch, preRelease, build, text) {
    this[major$] = major;
    this[minor$] = minor;
    this[patch$] = patch;
    this[_text] = text;
    this[preRelease$] = preRelease == null ? [] : src__version.Version._splitParts(preRelease);
    this[build$] = build == null ? [] : src__version.Version._splitParts(build);
    if (dart.notNull(this.major) < 0) dart.throw(new core.ArgumentError.new("Major version must be non-negative."));
    if (dart.notNull(this.minor) < 0) dart.throw(new core.ArgumentError.new("Minor version must be non-negative."));
    if (dart.notNull(this.patch) < 0) dart.throw(new core.ArgumentError.new("Patch version must be non-negative."));
  }).prototype = src__version.Version.prototype;
  dart.addTypeTests(src__version.Version);
  const major$ = Symbol("Version.major");
  const minor$ = Symbol("Version.minor");
  const patch$ = Symbol("Version.patch");
  const preRelease$ = Symbol("Version.preRelease");
  const build$ = Symbol("Version.build");
  src__version.Version[dart.implements] = () => [src__version_constraint.VersionConstraint, src__version_range.VersionRange];
  dart.setMethodSignature(src__version.Version, () => ({
    __proto__: dart.getMethods(src__version.Version.__proto__),
    '<': dart.fnType(core.bool, [src__version.Version]),
    '>': dart.fnType(core.bool, [src__version.Version]),
    '<=': dart.fnType(core.bool, [src__version.Version]),
    '>=': dart.fnType(core.bool, [src__version.Version]),
    [_incrementMajor]: dart.fnType(src__version.Version, []),
    [_incrementMinor]: dart.fnType(src__version.Version, []),
    [_incrementPatch]: dart.fnType(src__version.Version, []),
    allows: dart.fnType(core.bool, [src__version.Version]),
    allowsAll: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    allowsAny: dart.fnType(core.bool, [src__version_constraint.VersionConstraint]),
    intersect: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    union: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    difference: dart.fnType(src__version_constraint.VersionConstraint, [src__version_constraint.VersionConstraint]),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    [_compareLists]: dart.fnType(core.int, [core.List, core.List])
  }));
  dart.setGetterSignature(src__version.Version, () => ({
    __proto__: dart.getGetters(src__version.Version.__proto__),
    min: src__version.Version,
    max: src__version.Version,
    includeMin: core.bool,
    includeMax: core.bool,
    isAny: core.bool,
    isEmpty: core.bool,
    isPreRelease: core.bool,
    nextMajor: src__version.Version,
    nextMinor: src__version.Version,
    nextPatch: src__version.Version,
    nextBreaking: src__version.Version,
    firstPreRelease: src__version.Version,
    isFirstPreRelease: core.bool
  }));
  dart.setFieldSignature(src__version.Version, () => ({
    __proto__: dart.getFields(src__version.Version.__proto__),
    major: dart.finalFieldType(core.int),
    minor: dart.finalFieldType(core.int),
    patch: dart.finalFieldType(core.int),
    preRelease: dart.finalFieldType(core.List),
    build: dart.finalFieldType(core.List),
    [_text]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__version.Version, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(src__version.Version, ['hashCode']);
  dart.trackLibraries("packages/pub_semver/pub_semver.ddc", {
    "package:pub_semver/pub_semver.dart": pub_semver,
    "package:pub_semver/src/patterns.dart": src__patterns,
    "package:pub_semver/src/version_union.dart": src__version_union,
    "package:pub_semver/src/version_range.dart": src__version_range,
    "package:pub_semver/src/utils.dart": src__utils,
    "package:pub_semver/src/version_constraint.dart": src__version_constraint,
    "package:pub_semver/src/version.dart": src__version
  }, '{"version":3,"sourceRoot":"","sources":["src/patterns.dart","src/version_union.dart","src/version_range.dart","src/utils.dart","src/version_constraint.dart","src/version.dart"],"names":[],"mappings":"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","file":"pub_semver.ddc.js"}');
  // Exports:
  return {
    pub_semver: pub_semver,
    src__patterns: src__patterns,
    src__version_union: src__version_union,
    src__version_range: src__version_range,
    src__utils: src__utils,
    src__version_constraint: src__version_constraint,
    src__version: src__version
  };
});

//# sourceMappingURL=pub_semver.ddc.js.map
