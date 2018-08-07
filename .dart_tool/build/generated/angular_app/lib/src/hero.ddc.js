define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__hero = Object.create(_root);
  const src__mock_heroes = Object.create(_root);
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__hero.Hero)))();
  src__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
  };
  (src__hero.Hero.new = function(id, name) {
    this[id$] = id;
    this[name$] = name;
  }).prototype = src__hero.Hero.prototype;
  dart.addTypeTests(src__hero.Hero);
  const id$ = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  dart.setFieldSignature(src__hero.Hero, () => ({
    __proto__: dart.getFields(src__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.fieldType(core.String)
  }));
  dart.defineLazy(src__mock_heroes, {
    /*src__mock_heroes.mockHeroes*/get mockHeroes() {
      return JSArrayOfHero().of([new src__hero.Hero.new(11, "Mel-o-Sauras"), new src__hero.Hero.new(12, "Narco"), new src__hero.Hero.new(13, "Bombasto"), new src__hero.Hero.new(14, "Celeritas"), new src__hero.Hero.new(15, "Magneta"), new src__hero.Hero.new(16, "RubberMan"), new src__hero.Hero.new(17, "Dynama"), new src__hero.Hero.new(18, "Dr IQ"), new src__hero.Hero.new(19, "Magma"), new src__hero.Hero.new(20, "Tornado")]);
    }
  });
  dart.trackLibraries("packages/angular_app/src/hero.ddc", {
    "package:angular_app/src/hero.dart": src__hero,
    "package:angular_app/src/mock_heroes.dart": src__mock_heroes
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart","mock_heroes.dart"],"names":[],"mappings":";;;;;;;;;;;IACY;;;;;;IACH;;;;;;;iCAEF,EAAO,EAAE,IAAS;IAAb,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;MCFpB,2BAAU;YAAG,yBACjB,kBAAI,CAAC,IAAI,qBACT,kBAAI,CAAC,IAAI,cACT,kBAAI,CAAC,IAAI,iBACT,kBAAI,CAAC,IAAI,kBACT,kBAAI,CAAC,IAAI,gBACT,kBAAI,CAAC,IAAI,kBACT,kBAAI,CAAC,IAAI,eACT,kBAAI,CAAC,IAAI,cACT,kBAAI,CAAC,IAAI,cACT,kBAAI,CAAC,IAAI","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__hero: src__hero,
    src__mock_heroes: src__mock_heroes
  };
});

//# sourceMappingURL=hero.ddc.js.map
