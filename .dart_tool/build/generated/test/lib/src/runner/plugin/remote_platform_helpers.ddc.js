define(['dart_sdk', 'packages/stream_channel/stream_channel', 'packages/async/async', 'packages/term_glyph/term_glyph', 'packages/test/test', 'packages/test/src/backend/closed_exception'], function(dart_sdk, stream_channel, async, term_glyph, test, closed_exception) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async$ = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_channel$ = stream_channel.stream_channel;
  const src__stream_channel_completer = stream_channel.src__stream_channel_completer;
  const src__stream_channel_controller = stream_channel.src__stream_channel_controller;
  const src__multi_channel = stream_channel.src__multi_channel;
  const src__stream_queue = async.src__stream_queue;
  const src__generated = term_glyph.src__generated;
  const src__backend__metadata = test.src__backend__metadata;
  const src__backend__declarer = test.src__backend__declarer;
  const src__backend__stack_trace_formatter = test.src__backend__stack_trace_formatter;
  const src__backend__suite = test.src__backend__suite;
  const src__backend__invoker = test.src__backend__invoker;
  const src__util__remote_exception = test.src__util__remote_exception;
  const src__backend__group = test.src__backend__group;
  const src__backend__test = test.src__backend__test;
  const src__backend__group_entry = test.src__backend__group_entry;
  const src__backend__live_test = test.src__backend__live_test;
  const src__backend__suite_platform = closed_exception.src__backend__suite_platform;
  const src__backend__state = closed_exception.src__backend__state;
  const src__backend__message = closed_exception.src__backend__message;
  const _root = Object.create(null);
  const src__runner__suite_channel_manager = Object.create(_root);
  const src__runner__remote_listener = Object.create(_root);
  const src__runner__plugin__remote_platform_helpers = Object.create(_root);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $map = dartx.map;
  let IdentityMapOfString$StreamChannel = () => (IdentityMapOfString$StreamChannel = dart.constFn(_js_helper.IdentityMap$(core.String, stream_channel$.StreamChannel)))();
  let IdentityMapOfString$StreamChannelCompleter = () => (IdentityMapOfString$StreamChannelCompleter = dart.constFn(_js_helper.IdentityMap$(core.String, src__stream_channel_completer.StreamChannelCompleter)))();
  let _IdentityHashSetOfString = () => (_IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))();
  let MapOfString$StreamChannel = () => (MapOfString$StreamChannel = dart.constFn(core.Map$(core.String, stream_channel$.StreamChannel)))();
  let MapOfString$StreamChannelCompleter = () => (MapOfString$StreamChannelCompleter = dart.constFn(core.Map$(core.String, src__stream_channel_completer.StreamChannelCompleter)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let StreamChannelControllerOfObject = () => (StreamChannelControllerOfObject = dart.constFn(src__stream_channel_controller.StreamChannelController$(core.Object)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ZoneAndZoneDelegateAndZone__ToNull = () => (ZoneAndZoneDelegateAndZone__ToNull = dart.constFn(dart.fnType(core.Null, [async$.Zone, async$.ZoneDelegate, async$.Zone, core.String])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async$.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let JSArrayOfGroup = () => (JSArrayOfGroup = dart.constFn(_interceptors.JSArray$(src__backend__group.Group)))();
  let GroupEntryToMap = () => (GroupEntryToMap = dart.constFn(dart.fnType(core.Map, [src__backend__group_entry.GroupEntry])))();
  let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [src__backend__state.State])))();
  let AsyncErrorToNull = () => (AsyncErrorToNull = dart.constFn(dart.fnType(core.Null, [async$.AsyncError])))();
  let MessageToNull = () => (MessageToNull = dart.constFn(dart.fnType(core.Null, [src__backend__message.Message])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  dart.defineLazy(src__runner__suite_channel_manager, {
    /*src__runner__suite_channel_manager._currentKey*/get _currentKey() {
      return new core.Object.new();
    }
  });
  const _incomingConnections = Symbol('_incomingConnections');
  const _outgoingConnections = Symbol('_outgoingConnections');
  const _names = Symbol('_names');
  src__runner__suite_channel_manager.SuiteChannelManager = class SuiteChannelManager extends core.Object {
    static get current() {
      return src__runner__suite_channel_manager.SuiteChannelManager.as(async$.Zone.current._get(src__runner__suite_channel_manager._currentKey));
    }
    asCurrent(T, body) {
      return async$.runZoned(T, body, {zoneValues: new _js_helper.LinkedMap.from([src__runner__suite_channel_manager._currentKey, this])});
    }
    connectOut(name) {
      if (dart.test(this[_incomingConnections][$containsKey](name))) {
        return this[_incomingConnections][$_get](name);
      } else if (dart.test(this[_names].contains(name))) {
        dart.throw(new core.StateError.new("Duplicate suiteChannel() connection \"" + dart.str(name) + "\"."));
      } else {
        this[_names].add(name);
        let completer = new src__stream_channel_completer.StreamChannelCompleter.new();
        this[_outgoingConnections][$_set](name, completer);
        return completer.channel;
      }
    }
    connectIn(name, channel) {
      if (dart.test(this[_outgoingConnections][$containsKey](name))) {
        this[_outgoingConnections][$remove](name).setChannel(channel);
      } else if (dart.test(this[_incomingConnections][$containsKey](name))) {
        dart.throw(new core.StateError.new("Duplicate RunnerSuite.channel() connection \"" + dart.str(name) + "\"."));
      } else {
        this[_incomingConnections][$_set](name, channel);
      }
    }
  };
  (src__runner__suite_channel_manager.SuiteChannelManager.new = function() {
    this[_incomingConnections] = new (IdentityMapOfString$StreamChannel()).new();
    this[_outgoingConnections] = new (IdentityMapOfString$StreamChannelCompleter()).new();
    this[_names] = new (_IdentityHashSetOfString()).new();
  }).prototype = src__runner__suite_channel_manager.SuiteChannelManager.prototype;
  dart.addTypeTests(src__runner__suite_channel_manager.SuiteChannelManager);
  dart.setMethodSignature(src__runner__suite_channel_manager.SuiteChannelManager, () => ({
    __proto__: dart.getMethods(src__runner__suite_channel_manager.SuiteChannelManager.__proto__),
    asCurrent: dart.gFnType(T => [T, [dart.fnType(T, [])]]),
    connectOut: dart.fnType(stream_channel$.StreamChannel, [core.String]),
    connectIn: dart.fnType(dart.void, [core.String, stream_channel$.StreamChannel])
  }));
  dart.setFieldSignature(src__runner__suite_channel_manager.SuiteChannelManager, () => ({
    __proto__: dart.getFields(src__runner__suite_channel_manager.SuiteChannelManager.__proto__),
    [_incomingConnections]: dart.finalFieldType(MapOfString$StreamChannel()),
    [_outgoingConnections]: dart.finalFieldType(MapOfString$StreamChannelCompleter()),
    [_names]: dart.finalFieldType(SetOfString())
  }));
  const _suite = Symbol('_suite');
  const _printZone = Symbol('_printZone');
  const _listen = Symbol('_listen');
  let const$;
  const _serializeGroup = Symbol('_serializeGroup');
  const _serializeTest = Symbol('_serializeTest');
  const _runLiveTest = Symbol('_runLiveTest');
  let const$0;
  src__runner__remote_listener.RemoteListener = class RemoteListener extends core.Object {
    static start(getMain, opts) {
      let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
      let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
      let controller = new (StreamChannelControllerOfObject()).new({allowForeignErrors: false, sync: true});
      let channel = src__multi_channel.MultiChannel.new(controller.local);
      let verboseChain = true;
      let printZone = dart.test(hidePrints) ? null : async$.Zone.current;
      let spec = async$.ZoneSpecification.new({print: dart.fn((_, __, ___, line) => {
          if (printZone != null) printZone.print(line);
          channel.sink.add(new (IdentityMapOfString$String()).from(["type", "print", "line", line]));
        }, ZoneAndZoneDelegateAndZone__ToNull())});
      async$.Stream.fromIterable([]).listen(dart.fn(_ => {
      }, dynamicToNull())).cancel();
      new src__runner__suite_channel_manager.SuiteChannelManager.new().asCurrent(core.Null, dart.fn(() => {
        new src__backend__stack_trace_formatter.StackTraceFormatter.new().asCurrent(core.Null, dart.fn(() => {
          async$.runZoned(FutureOfNull(), dart.fn(() => async$.async(core.Null, function*() {
            let main = null;
            try {
              main = getMain();
            } catch (e) {
              if (core.NoSuchMethodError.is(e)) {
                let _ = e;
                src__runner__remote_listener.RemoteListener._sendLoadException(channel, "No top-level main() function defined.");
                return;
              } else {
                let error = e;
                let stackTrace = dart.stackTrace(error);
                src__runner__remote_listener.RemoteListener._sendError(channel, error, stackTrace, verboseChain);
                return;
              }
            }
            if (!core.Function.is(main)) {
              src__runner__remote_listener.RemoteListener._sendLoadException(channel, "Top-level main getter is not a function.");
              return;
            } else if (!VoidTodynamic().is(main)) {
              src__runner__remote_listener.RemoteListener._sendLoadException(channel, "Top-level main() function takes arguments.");
              return;
            }
            let queue = src__stream_queue.StreamQueue.new(channel.stream);
            let message = (yield queue.next);
            if (!dart.equals(dart.dindex(message, "type"), "initial")) dart.assertFailed();
            queue.rest.listen(dart.fn(message => {
              if (!dart.equals(dart.dindex(message, "type"), "suiteChannel")) dart.assertFailed();
              src__runner__suite_channel_manager.SuiteChannelManager.current.connectIn(core.String.as(dart.dindex(message, "name")), channel.virtualChannel(core.int.as(dart.dindex(message, "id"))));
            }, dynamicToNull()));
            if ((() => {
              let l = core.bool.as(dart.dindex(message, "asciiGlyphs"));
              return l != null ? l : false;
            })()) src__generated.ascii = true;
            let metadata = new src__backend__metadata.Metadata.deserialize(dart.dindex(message, "metadata"));
            verboseChain = metadata.verboseTrace;
            let declarer = new src__backend__declarer.Declarer.new({metadata: metadata, platformVariables: SetOfString().from(core.Iterable.as(dart.dindex(message, "platformVariables"))), collectTraces: core.bool.as(dart.dindex(message, "collectTraces")), noRetry: core.bool.as(dart.dindex(message, "noRetry"))});
            src__backend__stack_trace_formatter.StackTraceFormatter.current.configure({except: src__runner__remote_listener.RemoteListener._deserializeSet(core.List.as(dart.dindex(message, "foldTraceExcept"))), only: src__runner__remote_listener.RemoteListener._deserializeSet(core.List.as(dart.dindex(message, "foldTraceOnly")))});
            if (beforeLoad != null) yield beforeLoad();
            yield declarer.declare(VoidTodynamic().as(main));
            let suite = new src__backend__suite.Suite.new(declarer.build(), src__backend__suite_platform.SuitePlatform.deserialize(dart.dindex(message, "platform")), {path: core.String.as(dart.dindex(message, "path"))});
            async$.runZoned(core.Null, dart.fn(() => {
              src__backend__invoker.Invoker.guard(dart.void, dart.fn(() => new src__runner__remote_listener.RemoteListener.__(suite, printZone)[_listen](channel), VoidTovoid()));
            }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([const$ || (const$ = dart.const(core.Symbol.new('test.declarer'))), declarer])});
          }), VoidToFutureOfNull()), {onError: dart.fn((error, stackTrace) => {
              src__runner__remote_listener.RemoteListener._sendError(channel, error, stackTrace, verboseChain);
            }, dynamicAndStackTraceToNull()), zoneSpecification: spec});
        }, VoidToNull()));
      }, VoidToNull()));
      return controller.foreign;
    }
    static _deserializeSet(list) {
      if (list == null) return null;
      if (dart.test(list[$isEmpty])) return null;
      return SetOfString().from(list);
    }
    static _sendLoadException(channel, message) {
      channel.sink.add(new (IdentityMapOfString$String()).from(["type", "loadException", "message", message]));
    }
    static _sendError(channel, error, stackTrace, verboseChain) {
      channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", src__util__remote_exception.RemoteException.serialize(error, src__backend__stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(stackTrace, {verbose: verboseChain}))]));
    }
    [_listen](channel) {
      channel.sink.add(new (IdentityMapOfString$Object()).from(["type", "success", "root", this[_serializeGroup](channel, this[_suite].group, JSArrayOfGroup().of([]))]));
    }
    [_serializeGroup](channel, group, parents) {
      parents = parents[$toList]();
      parents[$add](group);
      return new _js_helper.LinkedMap.from(["type", "group", "name", group.name, "metadata", group.metadata.serialize(), "trace", group.trace == null ? null : dart.toString(group.trace), "setUpAll", this[_serializeTest](channel, group.setUpAll, parents), "tearDownAll", this[_serializeTest](channel, group.tearDownAll, parents), "entries", group.entries[$map](core.Map, dart.fn(entry => src__backend__group.Group.is(entry) ? this[_serializeGroup](channel, entry, parents) : this[_serializeTest](channel, src__backend__test.Test.as(entry), parents), GroupEntryToMap()))[$toList]()]);
    }
    [_serializeTest](channel, test, groups) {
      if (test == null) return null;
      let testChannel = channel.virtualChannel();
      testChannel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dindex(message, "command"), "run")) dart.assertFailed();
        this[_runLiveTest](test.load(this[_suite], {groups: groups}), channel.virtualChannel(core.int.as(dart.dindex(message, "channel"))));
      }, dynamicToNull()));
      return new _js_helper.LinkedMap.from(["type", "test", "name", test.name, "metadata", test.metadata.serialize(), "trace", (() => {
          let t = test.trace;
          return t == null ? null : dart.toString(t);
        })(), "channel", testChannel.id]);
    }
    [_runLiveTest](liveTest, channel) {
      channel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dindex(message, "command"), "close")) dart.assertFailed();
        liveTest.close();
      }, dynamicToNull()));
      liveTest.onStateChange.listen(dart.fn(state => {
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "state-change", "status", state.status.name, "result", state.result.name]));
      }, StateToNull()));
      liveTest.onError.listen(dart.fn(asyncError => {
        channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", src__util__remote_exception.RemoteException.serialize(asyncError.error, src__backend__stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(asyncError.stackTrace, {verbose: liveTest.test.metadata.verboseTrace}))]));
      }, AsyncErrorToNull()));
      liveTest.onMessage.listen(dart.fn(message => {
        if (this[_printZone] != null) this[_printZone].print(message.text);
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "message", "message-type", message.type.name, "text", message.text]));
      }, MessageToNull()));
      async$.runZoned(core.Null, dart.fn(() => {
        liveTest.run().then(dart.void, dart.fn(_ => channel.sink.add(new (IdentityMapOfString$String()).from(["type", "complete"])), dynamicTovoid()));
      }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([const$0 || (const$0 = dart.const(core.Symbol.new('test.runner.test_channel'))), channel])});
    }
  };
  (src__runner__remote_listener.RemoteListener.__ = function(suite, printZone) {
    this[_suite] = suite;
    this[_printZone] = printZone;
  }).prototype = src__runner__remote_listener.RemoteListener.prototype;
  dart.addTypeTests(src__runner__remote_listener.RemoteListener);
  dart.setMethodSignature(src__runner__remote_listener.RemoteListener, () => ({
    __proto__: dart.getMethods(src__runner__remote_listener.RemoteListener.__proto__),
    [_listen]: dart.fnType(dart.void, [src__multi_channel.MultiChannel]),
    [_serializeGroup]: dart.fnType(core.Map, [src__multi_channel.MultiChannel, src__backend__group.Group, core.Iterable$(src__backend__group.Group)]),
    [_serializeTest]: dart.fnType(core.Map, [src__multi_channel.MultiChannel, src__backend__test.Test, core.Iterable$(src__backend__group.Group)]),
    [_runLiveTest]: dart.fnType(dart.void, [src__backend__live_test.LiveTest, src__multi_channel.MultiChannel])
  }));
  dart.setFieldSignature(src__runner__remote_listener.RemoteListener, () => ({
    __proto__: dart.getFields(src__runner__remote_listener.RemoteListener.__proto__),
    [_suite]: dart.finalFieldType(src__backend__suite.Suite),
    [_printZone]: dart.finalFieldType(async$.Zone)
  }));
  src__runner__plugin__remote_platform_helpers.serializeSuite = function(getMain, opts) {
    let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
    let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
    return src__runner__remote_listener.RemoteListener.start(getMain, {hidePrints: hidePrints, beforeLoad: beforeLoad});
  };
  src__runner__plugin__remote_platform_helpers.suiteChannel = function(name) {
    let manager = src__runner__suite_channel_manager.SuiteChannelManager.current;
    if (manager == null) {
      dart.throw(new core.StateError.new("suiteChannel() may only be called within a test worker."));
    }
    return manager.connectOut(name);
  };
  src__runner__plugin__remote_platform_helpers.setStackTraceMapper = function(mapper) {
    let formatter = src__backend__stack_trace_formatter.StackTraceFormatter.current;
    if (formatter == null) {
      dart.throw(new core.StateError.new("setStackTraceMapper() may only be called within a test worker."));
    }
    formatter.configure({mapper: mapper});
  };
  dart.trackLibraries("packages/test/src/runner/plugin/remote_platform_helpers.ddc", {
    "package:test/src/runner/suite_channel_manager.dart": src__runner__suite_channel_manager,
    "package:test/src/runner/remote_listener.dart": src__runner__remote_listener,
    "package:test/src/runner/plugin/remote_platform_helpers.dart": src__runner__plugin__remote_platform_helpers
  }, '{"version":3,"sourceRoot":"","sources":["../suite_channel_manager.dart","../remote_listener.dart","remote_platform_helpers.dart"],"names":[],"mappings":"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","file":"remote_platform_helpers.ddc.js"}');
  // Exports:
  return {
    src__runner__suite_channel_manager: src__runner__suite_channel_manager,
    src__runner__remote_listener: src__runner__remote_listener,
    src__runner__plugin__remote_platform_helpers: src__runner__plugin__remote_platform_helpers
  };
});

//# sourceMappingURL=remote_platform_helpers.ddc.js.map
