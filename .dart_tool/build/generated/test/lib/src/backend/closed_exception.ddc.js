define(['dart_sdk', 'packages/source_maps/builder', 'packages/source_map_stack_trace/source_map_stack_trace', 'packages/package_resolver/package_resolver', 'packages/string_scanner/string_scanner', 'packages/boolean_selector/boolean_selector', 'packages/source_span/source_span', 'packages/collection/src/canonicalized_map', 'packages/async/async'], function(dart_sdk, builder, source_map_stack_trace, package_resolver, string_scanner, boolean_selector, source_span, canonicalized_map, async) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async$ = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = builder.parser;
  const source_map_stack_trace$ = source_map_stack_trace.source_map_stack_trace;
  const src__sync_package_resolver = package_resolver.src__sync_package_resolver;
  const src__string_scanner = string_scanner.src__string_scanner;
  const boolean_selector$ = boolean_selector.boolean_selector;
  const src__span_exception = source_span.src__span_exception;
  const src__span = source_span.src__span;
  const src__unmodifiable_wrappers = canonicalized_map.src__unmodifiable_wrappers;
  const src__cancelable_operation = async.src__cancelable_operation;
  const _root = Object.create(null);
  const src__util__stack_trace_mapper = Object.create(_root);
  const src__backend__closed_exception = Object.create(_root);
  const src__backend__operating_system = Object.create(_root);
  const src__frontend__timeout = Object.create(_root);
  const src__frontend__skip = Object.create(_root);
  const src__backend__runtime = Object.create(_root);
  const src__backend__suite_platform = Object.create(_root);
  const src__backend__platform_selector = Object.create(_root);
  const src__backend__message = Object.create(_root);
  const src__backend__state = Object.create(_root);
  const src__runner__configuration__runtime_selection = Object.create(_root);
  const src__util__iterable_set = Object.create(_root);
  const src__runner__environment = Object.create(_root);
  const src__runner__plugin__environment = Object.create(_root);
  const src__runner__reporter = Object.create(_root);
  const src__util__placeholder = Object.create(_root);
  const src__frontend__utils = Object.create(_root);
  const src__frontend__on_platform = Object.create(_root);
  const src__frontend__retry = Object.create(_root);
  const src__frontend__tags = Object.create(_root);
  const src__frontend__test_on = Object.create(_root);
  const src__backend__outstanding_callback_counter = Object.create(_root);
  const $_get = dartx._get;
  const $isNotEmpty = dartx.isNotEmpty;
  const $cast = dartx.cast;
  const $map = dartx.map;
  const $firstWhere = dartx.firstWhere;
  const $round = dartx.round;
  const $hashCode = dartx.hashCode;
  const $contains = dartx.contains;
  const $length = dartx.length;
  const $iterator = dartx.iterator;
  const $toSet = dartx.toSet;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapEntryOfString$String = () => (MapEntryOfString$String = dart.constFn(core.MapEntry$(core.String, core.String)))();
  let StringAndUriToMapEntryOfString$String = () => (StringAndUriToMapEntryOfString$String = dart.constFn(dart.fnType(MapEntryOfString$String(), [core.String, core.Uri])))();
  let MapEntryOfString$Uri = () => (MapEntryOfString$Uri = dart.constFn(core.MapEntry$(core.String, core.Uri)))();
  let StringAndStringToMapEntryOfString$Uri = () => (StringAndStringToMapEntryOfString$Uri = dart.constFn(dart.fnType(MapEntryOfString$Uri(), [core.String, core.String])))();
  let OperatingSystemTobool = () => (OperatingSystemTobool = dart.constFn(dart.fnType(core.bool, [src__backend__operating_system.OperatingSystem])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let RuntimeTobool = () => (RuntimeTobool = dart.constFn(dart.fnType(core.bool, [src__backend__runtime.Runtime])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let RuntimeToString = () => (RuntimeToString = dart.constFn(dart.fnType(core.String, [src__backend__runtime.Runtime])))();
  let OperatingSystemToString = () => (OperatingSystemToString = dart.constFn(dart.fnType(core.String, [src__backend__operating_system.OperatingSystem])))();
  let VoidToBooleanSelector = () => (VoidToBooleanSelector = dart.constFn(dart.fnType(boolean_selector$.BooleanSelector, [])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async$.Future, [])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  const _mapContents = Symbol('_mapContents');
  const _mapUrl = Symbol('_mapUrl');
  const _packageResolver = Symbol('_packageResolver');
  const _sdkRoot = Symbol('_sdkRoot');
  const _mapping = Symbol('_mapping');
  src__util__stack_trace_mapper.StackTraceMapper = class StackTraceMapper extends core.Object {
    mapStackTrace(trace) {
      let t = this[_mapping];
      t == null ? this[_mapping] = parser.parseExtended(this[_mapContents], {mapUrl: this[_mapUrl]}) : t;
      return source_map_stack_trace$.mapStackTrace(this[_mapping], trace, {packageResolver: this[_packageResolver], sdkRoot: this[_sdkRoot]});
    }
    serialize() {
      return new (IdentityMapOfString$dynamic()).from(["mapContents", this[_mapContents], "sdkRoot", this[_sdkRoot] == null ? null : dart.toString(this[_sdkRoot]), "packageConfigMap", src__util__stack_trace_mapper.StackTraceMapper._serializePackageConfigMap(this[_packageResolver].packageConfigMap), "packageRoot", (() => {
          let t = this[_packageResolver].packageRoot;
          return t == null ? null : dart.toString(t);
        })(), "mapUrl", this[_mapUrl] == null ? null : dart.toString(this[_mapUrl])]);
    }
    static deserialize(serialized) {
      if (serialized == null) return null;
      let l = core.String.as(serialized[$_get]("packageRoot"));
      let packageRoot = l != null ? l : "";
      return new src__util__stack_trace_mapper.StackTraceMapper.new(core.String.as(serialized[$_get]("mapContents")), {sdkRoot: core.Uri.parse(core.String.as(serialized[$_get]("sdkRoot"))), packageResolver: packageRoot[$isNotEmpty] ? src__sync_package_resolver.SyncPackageResolver.root(core.Uri.parse(core.String.as(serialized[$_get]("packageRoot")))) : src__sync_package_resolver.SyncPackageResolver.config(src__util__stack_trace_mapper.StackTraceMapper._deserializePackageConfigMap(core.Map.as(serialized[$_get]("packageConfigMap"))[$cast](core.String, core.String))), mapUrl: core.Uri.parse(core.String.as(serialized[$_get]("mapUrl")))});
    }
    static _serializePackageConfigMap(packageConfigMap) {
      if (packageConfigMap == null) return null;
      return packageConfigMap[$map](core.String, core.String, dart.fn((key, value) => MapEntryOfString$String().new(key, dart.str(value)), StringAndUriToMapEntryOfString$String()));
    }
    static _deserializePackageConfigMap(serialized) {
      if (serialized == null) return null;
      return serialized[$map](core.String, core.Uri, dart.fn((key, value) => MapEntryOfString$Uri().new(key, core.Uri.parse(value)), StringAndStringToMapEntryOfString$Uri()));
    }
  };
  (src__util__stack_trace_mapper.StackTraceMapper.new = function(mapContents, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    let packageResolver = opts && 'packageResolver' in opts ? opts.packageResolver : null;
    let sdkRoot = opts && 'sdkRoot' in opts ? opts.sdkRoot : null;
    this[_mapping] = null;
    this[_mapContents] = mapContents;
    this[_mapUrl] = mapUrl;
    this[_packageResolver] = packageResolver;
    this[_sdkRoot] = sdkRoot;
  }).prototype = src__util__stack_trace_mapper.StackTraceMapper.prototype;
  dart.addTypeTests(src__util__stack_trace_mapper.StackTraceMapper);
  dart.setMethodSignature(src__util__stack_trace_mapper.StackTraceMapper, () => ({
    __proto__: dart.getMethods(src__util__stack_trace_mapper.StackTraceMapper.__proto__),
    mapStackTrace: dart.fnType(core.StackTrace, [core.StackTrace]),
    serialize: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__util__stack_trace_mapper.StackTraceMapper, () => ({
    __proto__: dart.getFields(src__util__stack_trace_mapper.StackTraceMapper.__proto__),
    [_mapping]: dart.fieldType(parser.Mapping),
    [_packageResolver]: dart.finalFieldType(src__sync_package_resolver.SyncPackageResolver),
    [_sdkRoot]: dart.finalFieldType(core.Uri),
    [_mapContents]: dart.finalFieldType(core.String),
    [_mapUrl]: dart.finalFieldType(core.Uri)
  }));
  src__backend__closed_exception.ClosedException = class ClosedException extends core.Object {
    toString() {
      return "This test has been closed.";
    }
  };
  (src__backend__closed_exception.ClosedException.new = function() {
  }).prototype = src__backend__closed_exception.ClosedException.prototype;
  dart.addTypeTests(src__backend__closed_exception.ClosedException);
  src__backend__closed_exception.ClosedException[dart.implements] = () => [core.Exception];
  dart.defineExtensionMethods(src__backend__closed_exception.ClosedException, ['toString']);
  src__backend__operating_system.OperatingSystem = class OperatingSystem extends core.Object {
    static find(identifier) {
      return src__backend__operating_system.OperatingSystem.all[$firstWhere](dart.fn(platform => platform.identifier == identifier, OperatingSystemTobool()), {orElse: dart.fn(() => null, VoidToNull())});
    }
    static findByIoName(name) {
      switch (name) {
        case "windows":
        {
          return src__backend__operating_system.OperatingSystem.windows;
        }
        case "macos":
        {
          return src__backend__operating_system.OperatingSystem.macOS;
        }
        case "linux":
        {
          return src__backend__operating_system.OperatingSystem.linux;
        }
        case "android":
        {
          return src__backend__operating_system.OperatingSystem.android;
        }
        case "ios":
        {
          return src__backend__operating_system.OperatingSystem.iOS;
        }
        default:
        {
          return src__backend__operating_system.OperatingSystem.none;
        }
      }
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get identifier() {
      return this[identifier$];
    }
    set identifier(value) {
      super.identifier = value;
    }
    get isPosix() {
      return !this._equals(src__backend__operating_system.OperatingSystem.windows) && !this._equals(src__backend__operating_system.OperatingSystem.none);
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__operating_system.OperatingSystem.__ = function(name, identifier) {
    this[name$] = name;
    this[identifier$] = identifier;
  }).prototype = src__backend__operating_system.OperatingSystem.prototype;
  dart.addTypeTests(src__backend__operating_system.OperatingSystem);
  const name$ = Symbol("OperatingSystem.name");
  const identifier$ = Symbol("OperatingSystem.identifier");
  dart.setGetterSignature(src__backend__operating_system.OperatingSystem, () => ({
    __proto__: dart.getGetters(src__backend__operating_system.OperatingSystem.__proto__),
    isPosix: core.bool
  }));
  dart.setFieldSignature(src__backend__operating_system.OperatingSystem, () => ({
    __proto__: dart.getFields(src__backend__operating_system.OperatingSystem.__proto__),
    name: dart.finalFieldType(core.String),
    identifier: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__operating_system.OperatingSystem, ['toString']);
  dart.defineLazy(src__backend__operating_system.OperatingSystem, {
    /*src__backend__operating_system.OperatingSystem.windows*/get windows() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("Windows", "windows"));
    },
    /*src__backend__operating_system.OperatingSystem.macOS*/get macOS() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("OS X", "mac-os"));
    },
    /*src__backend__operating_system.OperatingSystem.linux*/get linux() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("Linux", "linux"));
    },
    /*src__backend__operating_system.OperatingSystem.android*/get android() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("Android", "android"));
    },
    /*src__backend__operating_system.OperatingSystem.iOS*/get iOS() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("iOS", "ios"));
    },
    /*src__backend__operating_system.OperatingSystem.none*/get none() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("none", "none"));
    },
    /*src__backend__operating_system.OperatingSystem.all*/get all() {
      return dart.constList([src__backend__operating_system.OperatingSystem.windows, src__backend__operating_system.OperatingSystem.macOS, src__backend__operating_system.OperatingSystem.linux, src__backend__operating_system.OperatingSystem.android, src__backend__operating_system.OperatingSystem.iOS], src__backend__operating_system.OperatingSystem);
    }
  });
  dart.defineLazy(src__frontend__timeout, {
    /*src__frontend__timeout._untilUnit*/get _untilUnit() {
      return core.RegExp.new("[^a-df-z\\s]+", {caseSensitive: false});
    },
    /*src__frontend__timeout._unit*/get _unit() {
      return core.RegExp.new("([um]s|[dhms])", {caseSensitive: false});
    },
    /*src__frontend__timeout._whitespace*/get _whitespace() {
      return core.RegExp.new("\\s+");
    }
  });
  src__frontend__timeout.Timeout = class Timeout extends core.Object {
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get scaleFactor() {
      return this[scaleFactor$];
    }
    set scaleFactor(value) {
      super.scaleFactor = value;
    }
    static parse(timeout) {
      let scanner = new src__string_scanner.StringScanner.new(timeout);
      if (dart.test(scanner.scan("none"))) {
        scanner.expectDone();
        return src__frontend__timeout.Timeout.none;
      }
      scanner.expect(src__frontend__timeout._untilUnit, {name: "number"});
      let number = core.double.parse(scanner.lastMatch._get(0));
      if (dart.test(scanner.scan("x")) || dart.test(scanner.scan("X"))) {
        scanner.expectDone();
        return new src__frontend__timeout.Timeout.factor(number);
      }
      let microseconds = 0.0;
      while (true) {
        scanner.expect(src__frontend__timeout._unit, {name: "unit"});
        microseconds = microseconds + dart.notNull(src__frontend__timeout.Timeout._microsecondsFor(number, scanner.lastMatch._get(0)));
        scanner.scan(src__frontend__timeout._whitespace);
        if (!dart.test(scanner.scan(src__frontend__timeout._untilUnit))) break;
        number = core.double.parse(scanner.lastMatch._get(0));
      }
      scanner.expectDone();
      return new src__frontend__timeout.Timeout.new(new core.Duration.new({microseconds: microseconds[$round]()}));
    }
    static _microsecondsFor(number, unit) {
      switch (unit) {
        case "d":
        {
          return dart.notNull(number) * 24 * 60 * 60 * 1000000;
        }
        case "h":
        {
          return dart.notNull(number) * 60 * 60 * 1000000;
        }
        case "m":
        {
          return dart.notNull(number) * 60 * 1000000;
        }
        case "s":
        {
          return dart.notNull(number) * 1000000;
        }
        case "ms":
        {
          return dart.notNull(number) * 1000;
        }
        case "us":
        {
          return number;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Unknown unit " + dart.str(unit) + "."));
        }
      }
    }
    merge(other) {
      if (this._equals(src__frontend__timeout.Timeout.none) || dart.equals(other, src__frontend__timeout.Timeout.none)) return src__frontend__timeout.Timeout.none;
      if (other.duration != null) return new src__frontend__timeout.Timeout.new(other.duration);
      if (this.duration != null) return new src__frontend__timeout.Timeout.new(this.duration['*'](other.scaleFactor));
      return new src__frontend__timeout.Timeout.factor(dart.notNull(this.scaleFactor) * dart.notNull(other.scaleFactor));
    }
    apply(base) {
      if (this._equals(src__frontend__timeout.Timeout.none)) return null;
      return this.duration == null ? base['*'](this.scaleFactor) : this.duration;
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.duration)) ^ 5 * dart.hashCode(this.scaleFactor)) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return src__frontend__timeout.Timeout.is(other) && dart.equals(other.duration, this.duration) && other.scaleFactor == this.scaleFactor;
    }
    toString() {
      if (this.duration != null) return dart.toString(this.duration);
      if (this.scaleFactor != null) return dart.str(this.scaleFactor) + "x";
      return "none";
    }
  };
  (src__frontend__timeout.Timeout.new = function(duration) {
    this[duration$] = duration;
    this[scaleFactor$] = null;
  }).prototype = src__frontend__timeout.Timeout.prototype;
  (src__frontend__timeout.Timeout.factor = function(scaleFactor) {
    this[scaleFactor$] = scaleFactor;
    this[duration$] = null;
  }).prototype = src__frontend__timeout.Timeout.prototype;
  (src__frontend__timeout.Timeout._none = function() {
    this[scaleFactor$] = null;
    this[duration$] = null;
  }).prototype = src__frontend__timeout.Timeout.prototype;
  dart.addTypeTests(src__frontend__timeout.Timeout);
  const duration$ = Symbol("Timeout.duration");
  const scaleFactor$ = Symbol("Timeout.scaleFactor");
  dart.setMethodSignature(src__frontend__timeout.Timeout, () => ({
    __proto__: dart.getMethods(src__frontend__timeout.Timeout.__proto__),
    merge: dart.fnType(src__frontend__timeout.Timeout, [src__frontend__timeout.Timeout]),
    apply: dart.fnType(core.Duration, [core.Duration])
  }));
  dart.setFieldSignature(src__frontend__timeout.Timeout, () => ({
    __proto__: dart.getFields(src__frontend__timeout.Timeout.__proto__),
    duration: dart.finalFieldType(core.Duration),
    scaleFactor: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(src__frontend__timeout.Timeout, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__frontend__timeout.Timeout, ['hashCode']);
  dart.defineLazy(src__frontend__timeout.Timeout, {
    /*src__frontend__timeout.Timeout.none*/get none() {
      return dart.const(new src__frontend__timeout.Timeout._none());
    }
  });
  src__frontend__skip.Skip = class Skip extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (src__frontend__skip.Skip.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$] = reason;
  }).prototype = src__frontend__skip.Skip.prototype;
  dart.addTypeTests(src__frontend__skip.Skip);
  const reason$ = Symbol("Skip.reason");
  dart.setFieldSignature(src__frontend__skip.Skip, () => ({
    __proto__: dart.getFields(src__frontend__skip.Skip.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  src__backend__runtime.Runtime = class Runtime extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get identifier() {
      return this[identifier$0];
    }
    set identifier(value) {
      super.identifier = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get isChild() {
      return this.parent != null;
    }
    get isDartVM() {
      return this[isDartVM$];
    }
    set isDartVM(value) {
      super.isDartVM = value;
    }
    get isBrowser() {
      return this[isBrowser$];
    }
    set isBrowser(value) {
      super.isBrowser = value;
    }
    get isJS() {
      return this[isJS$];
    }
    set isJS(value) {
      super.isJS = value;
    }
    get isBlink() {
      return this[isBlink$];
    }
    set isBlink(value) {
      super.isBlink = value;
    }
    get isHeadless() {
      return this[isHeadless$];
    }
    set isHeadless(value) {
      super.isHeadless = value;
    }
    get root() {
      return this.parent != null ? this.parent : this;
    }
    static deserialize(serialized) {
      if (typeof serialized == 'string') {
        return src__backend__runtime.Runtime.builtIn[$firstWhere](dart.fn(platform => platform.identifier == serialized, RuntimeTobool()));
      }
      let map = core.Map.as(serialized);
      let parent = map[$_get]("parent");
      if (parent != null) {
        return new src__backend__runtime.Runtime._child(core.String.as(map[$_get]("name")), core.String.as(map[$_get]("identifier")), src__backend__runtime.Runtime.deserialize(parent));
      }
      return new src__backend__runtime.Runtime.new(core.String.as(map[$_get]("name")), core.String.as(map[$_get]("identifier")), {isDartVM: core.bool.as(map[$_get]("isDartVM")), isBrowser: core.bool.as(map[$_get]("isBrowser")), isJS: core.bool.as(map[$_get]("isJS")), isBlink: core.bool.as(map[$_get]("isBlink")), isHeadless: core.bool.as(map[$_get]("isHeadless"))});
    }
    serialize() {
      if (dart.test(src__backend__runtime.Runtime.builtIn[$contains](this))) return this.identifier;
      if (this.parent != null) {
        return new (IdentityMapOfString$Object()).from(["name", this.name, "identifier", this.identifier, "parent", this.parent.serialize()]);
      }
      return new (IdentityMapOfString$Object()).from(["name", this.name, "identifier", this.identifier, "isDartVM", this.isDartVM, "isBrowser", this.isBrowser, "isJS", this.isJS, "isBlink", this.isBlink, "isHeadless", this.isHeadless]);
    }
    extend(name, identifier) {
      if (this.parent == null) return new src__backend__runtime.Runtime._child(name, identifier, this);
      dart.throw(new core.StateError.new("A child platform may not be extended."));
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__runtime.Runtime.new = function(name, identifier, opts) {
    let isDartVM = opts && 'isDartVM' in opts ? opts.isDartVM : false;
    let isBrowser = opts && 'isBrowser' in opts ? opts.isBrowser : false;
    let isJS = opts && 'isJS' in opts ? opts.isJS : false;
    let isBlink = opts && 'isBlink' in opts ? opts.isBlink : false;
    let isHeadless = opts && 'isHeadless' in opts ? opts.isHeadless : false;
    this[name$0] = name;
    this[identifier$0] = identifier;
    this[isDartVM$] = isDartVM;
    this[isBrowser$] = isBrowser;
    this[isJS$] = isJS;
    this[isBlink$] = isBlink;
    this[isHeadless$] = isHeadless;
    this[parent$] = null;
  }).prototype = src__backend__runtime.Runtime.prototype;
  (src__backend__runtime.Runtime._child = function(name, identifier, parent) {
    this[name$0] = name;
    this[identifier$0] = identifier;
    this[parent$] = parent;
    this[isDartVM$] = parent.isDartVM;
    this[isBrowser$] = parent.isBrowser;
    this[isJS$] = parent.isJS;
    this[isBlink$] = parent.isBlink;
    this[isHeadless$] = parent.isHeadless;
  }).prototype = src__backend__runtime.Runtime.prototype;
  dart.addTypeTests(src__backend__runtime.Runtime);
  const name$0 = Symbol("Runtime.name");
  const identifier$0 = Symbol("Runtime.identifier");
  const parent$ = Symbol("Runtime.parent");
  const isDartVM$ = Symbol("Runtime.isDartVM");
  const isBrowser$ = Symbol("Runtime.isBrowser");
  const isJS$ = Symbol("Runtime.isJS");
  const isBlink$ = Symbol("Runtime.isBlink");
  const isHeadless$ = Symbol("Runtime.isHeadless");
  dart.setMethodSignature(src__backend__runtime.Runtime, () => ({
    __proto__: dart.getMethods(src__backend__runtime.Runtime.__proto__),
    serialize: dart.fnType(core.Object, []),
    extend: dart.fnType(src__backend__runtime.Runtime, [core.String, core.String])
  }));
  dart.setGetterSignature(src__backend__runtime.Runtime, () => ({
    __proto__: dart.getGetters(src__backend__runtime.Runtime.__proto__),
    isChild: core.bool,
    root: src__backend__runtime.Runtime
  }));
  dart.setFieldSignature(src__backend__runtime.Runtime, () => ({
    __proto__: dart.getFields(src__backend__runtime.Runtime.__proto__),
    name: dart.finalFieldType(core.String),
    identifier: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(src__backend__runtime.Runtime),
    isDartVM: dart.finalFieldType(core.bool),
    isBrowser: dart.finalFieldType(core.bool),
    isJS: dart.finalFieldType(core.bool),
    isBlink: dart.finalFieldType(core.bool),
    isHeadless: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__backend__runtime.Runtime, ['toString']);
  dart.defineLazy(src__backend__runtime.Runtime, {
    /*src__backend__runtime.Runtime.vm*/get vm() {
      return dart.const(new src__backend__runtime.Runtime.new("VM", "vm", {isDartVM: true}));
    },
    /*src__backend__runtime.Runtime.chrome*/get chrome() {
      return dart.const(new src__backend__runtime.Runtime.new("Chrome", "chrome", {isBrowser: true, isJS: true, isBlink: true}));
    },
    /*src__backend__runtime.Runtime.phantomJS*/get phantomJS() {
      return dart.const(new src__backend__runtime.Runtime.new("PhantomJS", "phantomjs", {isBrowser: true, isJS: true, isBlink: true, isHeadless: true}));
    },
    /*src__backend__runtime.Runtime.firefox*/get firefox() {
      return dart.const(new src__backend__runtime.Runtime.new("Firefox", "firefox", {isBrowser: true, isJS: true}));
    },
    /*src__backend__runtime.Runtime.safari*/get safari() {
      return dart.const(new src__backend__runtime.Runtime.new("Safari", "safari", {isBrowser: true, isJS: true}));
    },
    /*src__backend__runtime.Runtime.internetExplorer*/get internetExplorer() {
      return dart.const(new src__backend__runtime.Runtime.new("Internet Explorer", "ie", {isBrowser: true, isJS: true}));
    },
    /*src__backend__runtime.Runtime.nodeJS*/get nodeJS() {
      return dart.const(new src__backend__runtime.Runtime.new("Node.js", "node", {isJS: true}));
    },
    /*src__backend__runtime.Runtime.builtIn*/get builtIn() {
      return dart.constList([src__backend__runtime.Runtime.vm, src__backend__runtime.Runtime.chrome, src__backend__runtime.Runtime.phantomJS, src__backend__runtime.Runtime.firefox, src__backend__runtime.Runtime.safari, src__backend__runtime.Runtime.internetExplorer, src__backend__runtime.Runtime.nodeJS], src__backend__runtime.Runtime);
    }
  });
  src__backend__suite_platform.SuitePlatform = class SuitePlatform extends core.Object {
    get runtime() {
      return this[runtime$];
    }
    set runtime(value) {
      super.runtime = value;
    }
    get os() {
      return this[os$];
    }
    set os(value) {
      super.os = value;
    }
    get inGoogle() {
      return this[inGoogle$];
    }
    set inGoogle(value) {
      super.inGoogle = value;
    }
    static deserialize(serialized) {
      let map = core.Map.as(serialized);
      return new src__backend__suite_platform.SuitePlatform.new(src__backend__runtime.Runtime.deserialize(map[$_get]("runtime")), {os: src__backend__operating_system.OperatingSystem.find(core.String.as(map[$_get]("os"))), inGoogle: core.bool.as(map[$_get]("inGoogle"))});
    }
    serialize() {
      return new (IdentityMapOfString$Object()).from(["runtime", this.runtime.serialize(), "os", this.os.identifier, "inGoogle", this.inGoogle]);
    }
  };
  (src__backend__suite_platform.SuitePlatform.new = function(runtime, opts) {
    let os = opts && 'os' in opts ? opts.os : null;
    let inGoogle = opts && 'inGoogle' in opts ? opts.inGoogle : false;
    this[runtime$] = runtime;
    this[inGoogle$] = inGoogle;
    this[os$] = os != null ? os : src__backend__operating_system.OperatingSystem.none;
    if (dart.test(this.runtime.isBrowser) && !dart.equals(this.os, src__backend__operating_system.OperatingSystem.none)) {
      dart.throw(new core.ArgumentError.new("No OS should be passed for runtime \"" + dart.str(this.runtime) + "\"."));
    }
  }).prototype = src__backend__suite_platform.SuitePlatform.prototype;
  dart.addTypeTests(src__backend__suite_platform.SuitePlatform);
  const runtime$ = Symbol("SuitePlatform.runtime");
  const os$ = Symbol("SuitePlatform.os");
  const inGoogle$ = Symbol("SuitePlatform.inGoogle");
  dart.setMethodSignature(src__backend__suite_platform.SuitePlatform, () => ({
    __proto__: dart.getMethods(src__backend__suite_platform.SuitePlatform.__proto__),
    serialize: dart.fnType(core.Object, [])
  }));
  dart.setFieldSignature(src__backend__suite_platform.SuitePlatform, () => ({
    __proto__: dart.getFields(src__backend__suite_platform.SuitePlatform.__proto__),
    runtime: dart.finalFieldType(src__backend__runtime.Runtime),
    os: dart.finalFieldType(src__backend__operating_system.OperatingSystem),
    inGoogle: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(src__backend__platform_selector, {
    /*src__backend__platform_selector._universalValidVariables*/get _universalValidVariables() {
      let _ = SetOfString().from(["posix", "dart-vm", "browser", "js", "blink", "google"]);
      _.addAll(src__backend__runtime.Runtime.builtIn[$map](core.String, dart.fn(runtime => runtime.identifier, RuntimeToString())));
      _.addAll(src__backend__operating_system.OperatingSystem.all[$map](core.String, dart.fn(os => os.identifier, OperatingSystemToString())));
      return _;
    }
  });
  const _inner = Symbol('_inner');
  const _span = Symbol('_span');
  src__backend__platform_selector.PlatformSelector = class PlatformSelector extends core.Object {
    static _wrapFormatException(T, body, span) {
      if (span == null) return body();
      try {
        return body();
      } catch (error) {
        if (core.FormatException.is(error)) {
          dart.throw(new src__span_exception.SourceSpanFormatException.new(error.message, span));
        } else
          throw error;
      }
    }
    validate(validVariables) {
      if (this === src__backend__platform_selector.PlatformSelector.all) return;
      src__backend__platform_selector.PlatformSelector._wrapFormatException(dart.void, dart.fn(() => this[_inner].validate(dart.fn(name => dart.test(src__backend__platform_selector._universalValidVariables.contains(name)) || dart.test(validVariables.contains(name)), StringTobool())), VoidTovoid()), this[_span]);
    }
    evaluate(platform) {
      return this[_inner].evaluate(dart.fn(variable => {
        if (variable == platform.runtime.identifier) return true;
        if (variable == (() => {
          let t = platform.runtime.parent;
          return t == null ? null : t.identifier;
        })()) return true;
        if (variable == platform.os.identifier) return true;
        switch (variable) {
          case "dart-vm":
          {
            return platform.runtime.isDartVM;
          }
          case "browser":
          {
            return platform.runtime.isBrowser;
          }
          case "js":
          {
            return platform.runtime.isJS;
          }
          case "blink":
          {
            return platform.runtime.isBlink;
          }
          case "posix":
          {
            return platform.os.isPosix;
          }
          case "google":
          {
            return platform.inGoogle;
          }
          default:
          {
            return false;
          }
        }
      }, StringTobool()));
    }
    intersection(other) {
      if (dart.equals(other, src__backend__platform_selector.PlatformSelector.all)) return this;
      return new src__backend__platform_selector.PlatformSelector.__(this[_inner].intersection(other[_inner]));
    }
    toString() {
      return dart.toString(this[_inner]);
    }
    _equals(other) {
      if (other == null) return false;
      return src__backend__platform_selector.PlatformSelector.is(other) && dart.equals(this[_inner], other[_inner]);
    }
    get hashCode() {
      return dart.hashCode(this[_inner]);
    }
  };
  (src__backend__platform_selector.PlatformSelector.parse = function(selector, span) {
    if (span === void 0) span = null;
    this[_inner] = src__backend__platform_selector.PlatformSelector._wrapFormatException(boolean_selector$.BooleanSelector, dart.fn(() => boolean_selector$.BooleanSelector.parse(selector), VoidToBooleanSelector()), span);
    this[_span] = span;
  }).prototype = src__backend__platform_selector.PlatformSelector.prototype;
  (src__backend__platform_selector.PlatformSelector.__ = function(inner) {
    this[_inner] = inner;
    this[_span] = null;
  }).prototype = src__backend__platform_selector.PlatformSelector.prototype;
  dart.addTypeTests(src__backend__platform_selector.PlatformSelector);
  dart.setMethodSignature(src__backend__platform_selector.PlatformSelector, () => ({
    __proto__: dart.getMethods(src__backend__platform_selector.PlatformSelector.__proto__),
    validate: dart.fnType(dart.void, [core.Set$(core.String)]),
    evaluate: dart.fnType(core.bool, [src__backend__suite_platform.SuitePlatform]),
    intersection: dart.fnType(src__backend__platform_selector.PlatformSelector, [src__backend__platform_selector.PlatformSelector])
  }));
  dart.setFieldSignature(src__backend__platform_selector.PlatformSelector, () => ({
    __proto__: dart.getFields(src__backend__platform_selector.PlatformSelector.__proto__),
    [_inner]: dart.finalFieldType(boolean_selector$.BooleanSelector),
    [_span]: dart.finalFieldType(src__span.SourceSpan)
  }));
  dart.defineExtensionMethods(src__backend__platform_selector.PlatformSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__backend__platform_selector.PlatformSelector, ['hashCode']);
  dart.defineLazy(src__backend__platform_selector.PlatformSelector, {
    /*src__backend__platform_selector.PlatformSelector.all*/get all() {
      return dart.const(new src__backend__platform_selector.PlatformSelector.__(boolean_selector$.BooleanSelector.all));
    }
  });
  src__backend__message.Message = class Message extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (src__backend__message.Message.new = function(type, text) {
    this[type$] = type;
    this[text$] = text;
  }).prototype = src__backend__message.Message.prototype;
  (src__backend__message.Message.print = function(text) {
    this[text$] = text;
    this[type$] = src__backend__message.MessageType.print;
  }).prototype = src__backend__message.Message.prototype;
  (src__backend__message.Message.skip = function(text) {
    this[text$] = text;
    this[type$] = src__backend__message.MessageType.skip;
  }).prototype = src__backend__message.Message.prototype;
  dart.addTypeTests(src__backend__message.Message);
  const type$ = Symbol("Message.type");
  const text$ = Symbol("Message.text");
  dart.setFieldSignature(src__backend__message.Message, () => ({
    __proto__: dart.getFields(src__backend__message.Message.__proto__),
    type: dart.finalFieldType(src__backend__message.MessageType),
    text: dart.finalFieldType(core.String)
  }));
  src__backend__message.MessageType = class MessageType extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    static parse(name) {
      switch (name) {
        case "print":
        {
          return src__backend__message.MessageType.print;
        }
        case "skip":
        {
          return src__backend__message.MessageType.skip;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Invalid message type \"" + dart.str(name) + "\"."));
        }
      }
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__message.MessageType.__ = function(name) {
    this[name$1] = name;
  }).prototype = src__backend__message.MessageType.prototype;
  dart.addTypeTests(src__backend__message.MessageType);
  const name$1 = Symbol("MessageType.name");
  dart.setFieldSignature(src__backend__message.MessageType, () => ({
    __proto__: dart.getFields(src__backend__message.MessageType.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__message.MessageType, ['toString']);
  dart.defineLazy(src__backend__message.MessageType, {
    /*src__backend__message.MessageType.print*/get print() {
      return dart.const(new src__backend__message.MessageType.__("print"));
    },
    /*src__backend__message.MessageType.skip*/get skip() {
      return dart.const(new src__backend__message.MessageType.__("skip"));
    }
  });
  src__backend__state.State = class State extends core.Object {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get result() {
      return this[result$];
    }
    set result(value) {
      super.result = value;
    }
    get shouldBeDone() {
      return dart.equals(this.status, src__backend__state.Status.complete) && dart.test(this.result.isPassing);
    }
    _equals(other) {
      if (other == null) return false;
      return src__backend__state.State.is(other) && dart.equals(this.status, other.status) && dart.equals(this.result, other.result);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.status)) ^ 7 * dart.notNull(dart.hashCode(this.result))) >>> 0;
    }
    toString() {
      if (dart.equals(this.status, src__backend__state.Status.pending)) return "pending";
      if (dart.equals(this.status, src__backend__state.Status.complete)) return dart.toString(this.result);
      if (dart.equals(this.result, src__backend__state.Result.success)) return "running";
      return "running with " + dart.str(this.result);
    }
  };
  (src__backend__state.State.new = function(status, result) {
    this[status$] = status;
    this[result$] = result;
  }).prototype = src__backend__state.State.prototype;
  dart.addTypeTests(src__backend__state.State);
  const status$ = Symbol("State.status");
  const result$ = Symbol("State.result");
  dart.setGetterSignature(src__backend__state.State, () => ({
    __proto__: dart.getGetters(src__backend__state.State.__proto__),
    shouldBeDone: core.bool
  }));
  dart.setFieldSignature(src__backend__state.State, () => ({
    __proto__: dart.getFields(src__backend__state.State.__proto__),
    status: dart.finalFieldType(src__backend__state.Status),
    result: dart.finalFieldType(src__backend__state.Result)
  }));
  dart.defineExtensionMethods(src__backend__state.State, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__backend__state.State, ['hashCode']);
  src__backend__state.Status = class Status extends core.Object {
    get name() {
      return this[name$2];
    }
    set name(value) {
      super.name = value;
    }
    static parse(name) {
      switch (name) {
        case "pending":
        {
          return src__backend__state.Status.pending;
        }
        case "running":
        {
          return src__backend__state.Status.running;
        }
        case "complete":
        {
          return src__backend__state.Status.complete;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Invalid status name \"" + dart.str(name) + "\"."));
        }
      }
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__state.Status.__ = function(name) {
    this[name$2] = name;
  }).prototype = src__backend__state.Status.prototype;
  dart.addTypeTests(src__backend__state.Status);
  const name$2 = Symbol("Status.name");
  dart.setFieldSignature(src__backend__state.Status, () => ({
    __proto__: dart.getFields(src__backend__state.Status.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__state.Status, ['toString']);
  dart.defineLazy(src__backend__state.Status, {
    /*src__backend__state.Status.pending*/get pending() {
      return dart.const(new src__backend__state.Status.__("pending"));
    },
    /*src__backend__state.Status.running*/get running() {
      return dart.const(new src__backend__state.Status.__("running"));
    },
    /*src__backend__state.Status.complete*/get complete() {
      return dart.const(new src__backend__state.Status.__("complete"));
    }
  });
  src__backend__state.Result = class Result extends core.Object {
    get name() {
      return this[name$3];
    }
    set name(value) {
      super.name = value;
    }
    get isPassing() {
      return this._equals(src__backend__state.Result.success) || this._equals(src__backend__state.Result.skipped);
    }
    get isFailing() {
      return !dart.test(this.isPassing);
    }
    static parse(name) {
      switch (name) {
        case "success":
        {
          return src__backend__state.Result.success;
        }
        case "skipped":
        {
          return src__backend__state.Result.skipped;
        }
        case "failure":
        {
          return src__backend__state.Result.failure;
        }
        case "error":
        {
          return src__backend__state.Result.error;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new("Invalid result name \"" + dart.str(name) + "\"."));
        }
      }
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__state.Result.__ = function(name) {
    this[name$3] = name;
  }).prototype = src__backend__state.Result.prototype;
  dart.addTypeTests(src__backend__state.Result);
  const name$3 = Symbol("Result.name");
  dart.setGetterSignature(src__backend__state.Result, () => ({
    __proto__: dart.getGetters(src__backend__state.Result.__proto__),
    isPassing: core.bool,
    isFailing: core.bool
  }));
  dart.setFieldSignature(src__backend__state.Result, () => ({
    __proto__: dart.getFields(src__backend__state.Result.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__state.Result, ['toString']);
  dart.defineLazy(src__backend__state.Result, {
    /*src__backend__state.Result.success*/get success() {
      return dart.const(new src__backend__state.Result.__("success"));
    },
    /*src__backend__state.Result.skipped*/get skipped() {
      return dart.const(new src__backend__state.Result.__("skipped"));
    },
    /*src__backend__state.Result.failure*/get failure() {
      return dart.const(new src__backend__state.Result.__("failure"));
    },
    /*src__backend__state.Result.error*/get error() {
      return dart.const(new src__backend__state.Result.__("error"));
    }
  });
  src__runner__configuration__runtime_selection.RuntimeSelection = class RuntimeSelection extends core.Object {
    get name() {
      return this[name$4];
    }
    set name(value) {
      super.name = value;
    }
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
    _equals(other) {
      if (other == null) return false;
      return src__runner__configuration__runtime_selection.RuntimeSelection.is(other) && other.name == this.name;
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
  };
  (src__runner__configuration__runtime_selection.RuntimeSelection.new = function(name, span) {
    if (span === void 0) span = null;
    this[name$4] = name;
    this[span$] = span;
  }).prototype = src__runner__configuration__runtime_selection.RuntimeSelection.prototype;
  dart.addTypeTests(src__runner__configuration__runtime_selection.RuntimeSelection);
  const name$4 = Symbol("RuntimeSelection.name");
  const span$ = Symbol("RuntimeSelection.span");
  dart.setFieldSignature(src__runner__configuration__runtime_selection.RuntimeSelection, () => ({
    __proto__: dart.getFields(src__runner__configuration__runtime_selection.RuntimeSelection.__proto__),
    name: dart.finalFieldType(core.String),
    span: dart.finalFieldType(src__span.SourceSpan)
  }));
  dart.defineExtensionMethods(src__runner__configuration__runtime_selection.RuntimeSelection, ['_equals']);
  dart.defineExtensionAccessors(src__runner__configuration__runtime_selection.RuntimeSelection, ['hashCode']);
  const _base = Symbol('_base');
  const _is_IterableSet_default = Symbol('_is_IterableSet_default');
  src__util__iterable_set.IterableSet$ = dart.generic(E => {
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    const SetMixin_UnmodifiableSetMixin$ = class SetMixin_UnmodifiableSetMixin extends collection.SetMixin$(E) {};
    (SetMixin_UnmodifiableSetMixin$.new = function() {
    }).prototype = SetMixin_UnmodifiableSetMixin$.prototype;
    dart.mixinMembers(SetMixin_UnmodifiableSetMixin$, src__unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class IterableSet extends SetMixin_UnmodifiableSetMixin$ {
      get length() {
        return this[_base][$length];
      }
      get iterator() {
        return this[_base][$iterator];
      }
      contains(element) {
        return this[_base][$contains](element);
      }
      lookup(needle) {
        return this[_base][$firstWhere](dart.fn(element => dart.equals(element, needle), ETobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      toSet() {
        return this[_base][$toSet]();
      }
    }
    (IterableSet.new = function(base) {
      this[_base] = base;
    }).prototype = IterableSet.prototype;
    dart.addTypeTests(IterableSet);
    IterableSet.prototype[_is_IterableSet_default] = true;
    dart.setMethodSignature(IterableSet, () => ({
      __proto__: dart.getMethods(IterableSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(IterableSet, () => ({
      __proto__: dart.getGetters(IterableSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setFieldSignature(IterableSet, () => ({
      __proto__: dart.getFields(IterableSet.__proto__),
      [_base]: dart.finalFieldType(IterableOfE())
    }));
    dart.defineExtensionMethods(IterableSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(IterableSet, ['length', 'iterator']);
    return IterableSet;
  });
  src__util__iterable_set.IterableSet = src__util__iterable_set.IterableSet$();
  dart.addTypeTests(src__util__iterable_set.IterableSet, _is_IterableSet_default);
  src__runner__environment.Environment = class Environment extends core.Object {};
  (src__runner__environment.Environment.new = function() {
  }).prototype = src__runner__environment.Environment.prototype;
  dart.addTypeTests(src__runner__environment.Environment);
  src__runner__plugin__environment.PluginEnvironment = class PluginEnvironment extends core.Object {
    get supportsDebugging() {
      return this[supportsDebugging];
    }
    set supportsDebugging(value) {
      super.supportsDebugging = value;
    }
    get onRestart() {
      return async$.StreamController.broadcast().stream;
    }
    get observatoryUrl() {
      return null;
    }
    get remoteDebuggerUrl() {
      return null;
    }
    displayPause() {
      return dart.throw(new core.UnsupportedError.new("PluginEnvironment.displayPause is not supported."));
    }
  };
  (src__runner__plugin__environment.PluginEnvironment.new = function() {
    this[supportsDebugging] = false;
  }).prototype = src__runner__plugin__environment.PluginEnvironment.prototype;
  dart.addTypeTests(src__runner__plugin__environment.PluginEnvironment);
  const supportsDebugging = Symbol("PluginEnvironment.supportsDebugging");
  src__runner__plugin__environment.PluginEnvironment[dart.implements] = () => [src__runner__environment.Environment];
  dart.setMethodSignature(src__runner__plugin__environment.PluginEnvironment, () => ({
    __proto__: dart.getMethods(src__runner__plugin__environment.PluginEnvironment.__proto__),
    displayPause: dart.fnType(src__cancelable_operation.CancelableOperation, [])
  }));
  dart.setGetterSignature(src__runner__plugin__environment.PluginEnvironment, () => ({
    __proto__: dart.getGetters(src__runner__plugin__environment.PluginEnvironment.__proto__),
    onRestart: async$.Stream,
    observatoryUrl: core.Uri,
    remoteDebuggerUrl: core.Uri
  }));
  dart.setFieldSignature(src__runner__plugin__environment.PluginEnvironment, () => ({
    __proto__: dart.getFields(src__runner__plugin__environment.PluginEnvironment.__proto__),
    supportsDebugging: dart.finalFieldType(core.bool)
  }));
  src__runner__reporter.Reporter = class Reporter extends core.Object {};
  (src__runner__reporter.Reporter.new = function() {
  }).prototype = src__runner__reporter.Reporter.prototype;
  dart.addTypeTests(src__runner__reporter.Reporter);
  src__util__placeholder._Placeholder = class _Placeholder extends core.Object {};
  (src__util__placeholder._Placeholder.new = function() {
  }).prototype = src__util__placeholder._Placeholder.prototype;
  dart.addTypeTests(src__util__placeholder._Placeholder);
  dart.defineLazy(src__util__placeholder, {
    /*src__util__placeholder.placeholder*/get placeholder() {
      return dart.const(new src__util__placeholder._Placeholder.new());
    }
  });
  src__frontend__utils.pumpEventQueue = function(opts) {
    let times = opts && 'times' in opts ? opts.times : null;
    let t = times;
    t == null ? times = 20 : t;
    if (times === 0) return async$.Future.value();
    return async$.Future.new(dart.fn(() => src__frontend__utils.pumpEventQueue({times: dart.notNull(times) - 1}), VoidToFuture()));
  };
  src__frontend__on_platform.OnPlatform = class OnPlatform extends core.Object {
    get annotationsByPlatform() {
      return this[annotationsByPlatform$];
    }
    set annotationsByPlatform(value) {
      super.annotationsByPlatform = value;
    }
  };
  (src__frontend__on_platform.OnPlatform.new = function(annotationsByPlatform) {
    this[annotationsByPlatform$] = annotationsByPlatform;
  }).prototype = src__frontend__on_platform.OnPlatform.prototype;
  dart.addTypeTests(src__frontend__on_platform.OnPlatform);
  const annotationsByPlatform$ = Symbol("OnPlatform.annotationsByPlatform");
  dart.setFieldSignature(src__frontend__on_platform.OnPlatform, () => ({
    __proto__: dart.getFields(src__frontend__on_platform.OnPlatform.__proto__),
    annotationsByPlatform: dart.finalFieldType(MapOfString$dynamic())
  }));
  src__frontend__retry.Retry = class Retry extends core.Object {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
  };
  (src__frontend__retry.Retry.new = function(count) {
    this[count$] = count;
  }).prototype = src__frontend__retry.Retry.prototype;
  dart.addTypeTests(src__frontend__retry.Retry);
  const count$ = Symbol("Retry.count");
  dart.setFieldSignature(src__frontend__retry.Retry, () => ({
    __proto__: dart.getFields(src__frontend__retry.Retry.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  const _tags = Symbol('_tags');
  src__frontend__tags.Tags = class Tags extends core.Object {
    get tags() {
      return this[_tags][$toSet]();
    }
  };
  (src__frontend__tags.Tags.new = function(tags) {
    this[_tags] = tags;
  }).prototype = src__frontend__tags.Tags.prototype;
  dart.addTypeTests(src__frontend__tags.Tags);
  dart.setGetterSignature(src__frontend__tags.Tags, () => ({
    __proto__: dart.getGetters(src__frontend__tags.Tags.__proto__),
    tags: core.Set$(core.String)
  }));
  dart.setFieldSignature(src__frontend__tags.Tags, () => ({
    __proto__: dart.getFields(src__frontend__tags.Tags.__proto__),
    [_tags]: dart.finalFieldType(IterableOfString())
  }));
  src__frontend__test_on.TestOn = class TestOn extends core.Object {
    get expression() {
      return this[expression$];
    }
    set expression(value) {
      super.expression = value;
    }
  };
  (src__frontend__test_on.TestOn.new = function(expression) {
    this[expression$] = expression;
  }).prototype = src__frontend__test_on.TestOn.prototype;
  dart.addTypeTests(src__frontend__test_on.TestOn);
  const expression$ = Symbol("TestOn.expression");
  dart.setFieldSignature(src__frontend__test_on.TestOn, () => ({
    __proto__: dart.getFields(src__frontend__test_on.TestOn.__proto__),
    expression: dart.finalFieldType(core.String)
  }));
  const _count = Symbol('_count');
  const _completer = Symbol('_completer');
  src__backend__outstanding_callback_counter.OutstandingCallbackCounter = class OutstandingCallbackCounter extends core.Object {
    get noOutstandingCallbacks() {
      return this[_completer].future;
    }
    addOutstandingCallback() {
      this[_count] = dart.notNull(this[_count]) + 1;
    }
    removeOutstandingCallback() {
      this[_count] = dart.notNull(this[_count]) - 1;
      if (this[_count] !== 0) return;
      if (dart.test(this[_completer].isCompleted)) return;
      this[_completer].complete();
    }
    removeAllOutstandingCallbacks() {
      if (!dart.test(this[_completer].isCompleted)) this[_completer].complete();
    }
  };
  (src__backend__outstanding_callback_counter.OutstandingCallbackCounter.new = function() {
    this[_count] = 1;
    this[_completer] = async$.Completer.new();
  }).prototype = src__backend__outstanding_callback_counter.OutstandingCallbackCounter.prototype;
  dart.addTypeTests(src__backend__outstanding_callback_counter.OutstandingCallbackCounter);
  dart.setMethodSignature(src__backend__outstanding_callback_counter.OutstandingCallbackCounter, () => ({
    __proto__: dart.getMethods(src__backend__outstanding_callback_counter.OutstandingCallbackCounter.__proto__),
    addOutstandingCallback: dart.fnType(dart.void, []),
    removeOutstandingCallback: dart.fnType(dart.void, []),
    removeAllOutstandingCallbacks: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__backend__outstanding_callback_counter.OutstandingCallbackCounter, () => ({
    __proto__: dart.getGetters(src__backend__outstanding_callback_counter.OutstandingCallbackCounter.__proto__),
    noOutstandingCallbacks: async$.Future
  }));
  dart.setFieldSignature(src__backend__outstanding_callback_counter.OutstandingCallbackCounter, () => ({
    __proto__: dart.getFields(src__backend__outstanding_callback_counter.OutstandingCallbackCounter.__proto__),
    [_count]: dart.fieldType(core.int),
    [_completer]: dart.finalFieldType(async$.Completer)
  }));
  dart.trackLibraries("packages/test/src/backend/closed_exception.ddc", {
    "package:test/src/util/stack_trace_mapper.dart": src__util__stack_trace_mapper,
    "package:test/src/backend/closed_exception.dart": src__backend__closed_exception,
    "package:test/src/backend/operating_system.dart": src__backend__operating_system,
    "package:test/src/frontend/timeout.dart": src__frontend__timeout,
    "package:test/src/frontend/skip.dart": src__frontend__skip,
    "package:test/src/backend/runtime.dart": src__backend__runtime,
    "package:test/src/backend/suite_platform.dart": src__backend__suite_platform,
    "package:test/src/backend/platform_selector.dart": src__backend__platform_selector,
    "package:test/src/backend/message.dart": src__backend__message,
    "package:test/src/backend/state.dart": src__backend__state,
    "package:test/src/runner/configuration/runtime_selection.dart": src__runner__configuration__runtime_selection,
    "package:test/src/util/iterable_set.dart": src__util__iterable_set,
    "package:test/src/runner/environment.dart": src__runner__environment,
    "package:test/src/runner/plugin/environment.dart": src__runner__plugin__environment,
    "package:test/src/runner/reporter.dart": src__runner__reporter,
    "package:test/src/util/placeholder.dart": src__util__placeholder,
    "package:test/src/frontend/utils.dart": src__frontend__utils,
    "package:test/src/frontend/on_platform.dart": src__frontend__on_platform,
    "package:test/src/frontend/retry.dart": src__frontend__retry,
    "package:test/src/frontend/tags.dart": src__frontend__tags,
    "package:test/src/frontend/test_on.dart": src__frontend__test_on,
    "package:test/src/backend/outstanding_callback_counter.dart": src__backend__outstanding_callback_counter
  }, '{"version":3,"sourceRoot":"","sources":["../util/stack_trace_mapper.dart","closed_exception.dart","operating_system.dart","../frontend/timeout.dart","../frontend/skip.dart","runtime.dart","suite_platform.dart","platform_selector.dart","message.dart","state.dart","../runner/configuration/runtime_selection.dart","../util/iterable_set.dart","../runner/environment.dart","../runner/plugin/environment.dart","../runner/reporter.dart","../util/placeholder.dart","../frontend/utils.dart","../frontend/on_platform.dart","../frontend/retry.dart","../frontend/tags.dart","../frontend/test_on.dart","outstanding_callback_counter.dart"],"names":[],"mappings":"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","file":"closed_exception.ddc.js"}');
  // Exports:
  return {
    src__util__stack_trace_mapper: src__util__stack_trace_mapper,
    src__backend__closed_exception: src__backend__closed_exception,
    src__backend__operating_system: src__backend__operating_system,
    src__frontend__timeout: src__frontend__timeout,
    src__frontend__skip: src__frontend__skip,
    src__backend__runtime: src__backend__runtime,
    src__backend__suite_platform: src__backend__suite_platform,
    src__backend__platform_selector: src__backend__platform_selector,
    src__backend__message: src__backend__message,
    src__backend__state: src__backend__state,
    src__runner__configuration__runtime_selection: src__runner__configuration__runtime_selection,
    src__util__iterable_set: src__util__iterable_set,
    src__runner__environment: src__runner__environment,
    src__runner__plugin__environment: src__runner__plugin__environment,
    src__runner__reporter: src__runner__reporter,
    src__util__placeholder: src__util__placeholder,
    src__frontend__utils: src__frontend__utils,
    src__frontend__on_platform: src__frontend__on_platform,
    src__frontend__retry: src__frontend__retry,
    src__frontend__tags: src__frontend__tags,
    src__frontend__test_on: src__frontend__test_on,
    src__backend__outstanding_callback_counter: src__backend__outstanding_callback_counter
  };
});

//# sourceMappingURL=closed_exception.ddc.js.map
