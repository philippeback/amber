smalltalk.addPackage('Compiler-Semantic', {});
smalltalk.addClass('InvalidAssignmentError', smalltalk.SemanticError, ['variableName'], 'Compiler-Semantic');
smalltalk.addMethod(
"_variableName",
smalltalk.method({
selector: "variableName",
fn: function () {
var self=this;
return self['@variableName'];
return self;}
}),
smalltalk.InvalidAssignmentError);

smalltalk.addMethod(
"_variableName_",
smalltalk.method({
selector: "variableName:",
fn: function (aString) {
var self=this;
(self['@variableName']=aString);
return self;}
}),
smalltalk.InvalidAssignmentError);



smalltalk.addClass('LexicalScope', smalltalk.Object, ['node', 'temps', 'args', 'outerScope'], 'Compiler-Semantic');
smalltalk.addMethod(
"_addArg_",
smalltalk.method({
selector: "addArg:",
fn: function (aString) {
var self=this;
smalltalk.send(smalltalk.send(self, "_args", []), "_at_put_", [aString, smalltalk.send((smalltalk.ArgVar || ArgVar), "_on_", [aString])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_at_", [aString]), "_scope_", [self]);
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_addTemp_",
smalltalk.method({
selector: "addTemp:",
fn: function (aString) {
var self=this;
smalltalk.send(smalltalk.send(self, "_temps", []), "_at_put_", [aString, smalltalk.send((smalltalk.TempVar || TempVar), "_on_", [aString])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_temps", []), "_at_", [aString]), "_scope_", [self]);
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(self, "_args", []), "_keys", []), "__comma", [smalltalk.send(smalltalk.send(self, "_temps", []), "_keys", [])]);
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_args",
smalltalk.method({
selector: "args",
fn: function () {
var self=this;
return (($receiver = self['@args']) == nil || $receiver == undefined) ? (function(){return (self['@args']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
fn: function (aStringOrNode) {
var self=this;
return smalltalk.send(smalltalk.send(self, "_args", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), (function(){return smalltalk.send(smalltalk.send(self, "_temps", []), "_at_ifAbsent_", [smalltalk.send(aStringOrNode, "_value", []), (function(){return nil;})]);})]);
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function () {
var self=this;
return false;
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_lookupVariable_",
smalltalk.method({
selector: "lookupVariable:",
fn: function (aNode) {
var self=this;
var lookup=nil;
(lookup=smalltalk.send(self, "_bindingFor_", [aNode]));
(($receiver = lookup) == nil || $receiver == undefined) ? (function(){return (lookup=(($receiver = smalltalk.send(self, "_outerScope", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_outerScope", []), "_lookupVariable_", [aNode]);})() : nil);})() : $receiver;
return lookup;
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
fn: function () {
var self=this;
return (($receiver = smalltalk.send(self, "_outerScope", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_outerScope", []), "_methodScope", []);})() : nil;
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node",
smalltalk.method({
selector: "node",
fn: function () {
var self=this;
return self['@node'];
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_node_",
smalltalk.method({
selector: "node:",
fn: function (aNode) {
var self=this;
(self['@node']=aNode);
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope",
smalltalk.method({
selector: "outerScope",
fn: function () {
var self=this;
return self['@outerScope'];
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_outerScope_",
smalltalk.method({
selector: "outerScope:",
fn: function (aLexicalScope) {
var self=this;
(self['@outerScope']=aLexicalScope);
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_scopeLevel",
smalltalk.method({
selector: "scopeLevel",
fn: function () {
var self=this;
return ((($receiver = (($receiver = smalltalk.send(self, "_outerScope", [])) == nil || $receiver == undefined) ? (function(){return (0);})() : (function(){return smalltalk.send(smalltalk.send(self, "_outerScope", []), "_scopeLevel", []);})()).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)]));
return self;}
}),
smalltalk.LexicalScope);

smalltalk.addMethod(
"_temps",
smalltalk.method({
selector: "temps",
fn: function () {
var self=this;
return (($receiver = self['@temps']) == nil || $receiver == undefined) ? (function(){return (self['@temps']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.LexicalScope);



smalltalk.addClass('MethodLexicalScope', smalltalk.LexicalScope, ['iVars', 'unknownVariables', 'nonLocalReturn'], 'Compiler-Semantic');
smalltalk.addMethod(
"_addIvar_",
smalltalk.method({
selector: "addIvar:",
fn: function (aString) {
var self=this;
smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_put_", [aString, smalltalk.send((smalltalk.InstanceVar || InstanceVar), "_on_", [aString])]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_", [aString]), "_scope_", [self]);
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_allVariableNames",
smalltalk.method({
selector: "allVariableNames",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_allVariableNames", [], smalltalk.MethodLexicalScope.superclass || nil), "__comma", [smalltalk.send(smalltalk.send(self, "_iVars", []), "_keys", [])]);
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_bindingFor_",
smalltalk.method({
selector: "bindingFor:",
fn: function (aNode) {
var self=this;
return (($receiver = smalltalk.send(self, "_bindingFor_", [aNode], smalltalk.MethodLexicalScope.superclass || nil)) == nil || $receiver == undefined) ? (function(){return smalltalk.send(smalltalk.send(self, "_iVars", []), "_at_ifAbsent_", [smalltalk.send(aNode, "_value", []), (function(){return nil;})]);})() : $receiver;
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_hasNonLocalReturn",
smalltalk.method({
selector: "hasNonLocalReturn",
fn: function () {
var self=this;
return smalltalk.send(self, "_nonLocalReturn", []);
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_iVars",
smalltalk.method({
selector: "iVars",
fn: function () {
var self=this;
return (($receiver = self['@iVars']) == nil || $receiver == undefined) ? (function(){return (self['@iVars']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_isMethodScope",
smalltalk.method({
selector: "isMethodScope",
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_methodScope",
smalltalk.method({
selector: "methodScope",
fn: function () {
var self=this;
return self;
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturn",
smalltalk.method({
selector: "nonLocalReturn",
fn: function () {
var self=this;
return (($receiver = self['@nonLocalReturn']) == nil || $receiver == undefined) ? (function(){return false;})() : $receiver;
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_nonLocalReturn_",
smalltalk.method({
selector: "nonLocalReturn:",
fn: function (aBoolean) {
var self=this;
(self['@nonLocalReturn']=aBoolean);
return self;}
}),
smalltalk.MethodLexicalScope);

smalltalk.addMethod(
"_unknownVariables",
smalltalk.method({
selector: "unknownVariables",
fn: function () {
var self=this;
return (($receiver = self['@unknownVariables']) == nil || $receiver == undefined) ? (function(){return (self['@unknownVariables']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.MethodLexicalScope);



smalltalk.addClass('ScopeVar', smalltalk.Object, ['scope', 'name'], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(self, "_name", []), "_asVariableName", []);
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function () {
var self=this;
return false;
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function () {
var self=this;
return false;
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function () {
var self=this;
return false;
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function () {
var self=this;
return false;
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function () {
var self=this;
return self['@name'];
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aString) {
var self=this;
(self['@name']=aString);
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope",
smalltalk.method({
selector: "scope",
fn: function () {
var self=this;
return self['@scope'];
return self;}
}),
smalltalk.ScopeVar);

smalltalk.addMethod(
"_scope_",
smalltalk.method({
selector: "scope:",
fn: function (aScope) {
var self=this;
(self['@scope']=aScope);
return self;}
}),
smalltalk.ScopeVar);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aString) {
var self=this;
return (function($rec){smalltalk.send($rec, "_name_", [aString]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.ScopeVar.klass);


smalltalk.addClass('AliasVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');


smalltalk.addClass('ArgVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isArgVar",
smalltalk.method({
selector: "isArgVar",
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.ArgVar);



smalltalk.addClass('ClassRefVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send("(Smalltalk.", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [" || "]), "__comma", [smalltalk.send(self, "_name", [])]), "__comma", [")"]);
return self;}
}),
smalltalk.ClassRefVar);



smalltalk.addClass('InstanceVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_alias",
smalltalk.method({
selector: "alias",
fn: function () {
var self=this;
return smalltalk.send(smalltalk.send("self[\x22@", "__comma", [smalltalk.send(self, "_name", [])]), "__comma", ["]"]);
return self;}
}),
smalltalk.InstanceVar);

smalltalk.addMethod(
"_isInstanceVar",
smalltalk.method({
selector: "isInstanceVar",
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.InstanceVar);



smalltalk.addClass('TempVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isTempVar",
smalltalk.method({
selector: "isTempVar",
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.TempVar);



smalltalk.addClass('UnknownVar', smalltalk.ScopeVar, [], 'Compiler-Semantic');
smalltalk.addMethod(
"_isUnknownVar",
smalltalk.method({
selector: "isUnknownVar",
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.UnknownVar);



smalltalk.addClass('SemanticAnalyzer', smalltalk.NodeVisitor, ['currentScope', 'theClass', 'classReferences', 'messageSends'], 'Compiler-Semantic');
smalltalk.addMethod(
"_allowUnknownVariables",
smalltalk.method({
selector: "allowUnknownVariables",
fn: function () {
var self=this;
return true;
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_classReferences",
smalltalk.method({
selector: "classReferences",
fn: function () {
var self=this;
return (($receiver = self['@classReferences']) == nil || $receiver == undefined) ? (function(){return (self['@classReferences']=smalltalk.send((smalltalk.Set || Set), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorInvalidAssignment_",
smalltalk.method({
selector: "errorInvalidAssignment:",
fn: function (aString) {
var self=this;
(function($rec){smalltalk.send($rec, "_variableName_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.InvalidAssignmentError || InvalidAssignmentError), "_new", []));
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorShadowingVariable_",
smalltalk.method({
selector: "errorShadowingVariable:",
fn: function (aString) {
var self=this;
(function($rec){smalltalk.send($rec, "_variableName_", [aString]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.ShadowingVariableError || ShadowingVariableError), "_new", []));
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_errorUnknownVariable_",
smalltalk.method({
selector: "errorUnknownVariable:",
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(self, "_allowUnknownVariables", [])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_unknownVariables", []), "_add_", [smalltalk.send(aNode, "_value", [])]);})() : (function(){return (function($rec){smalltalk.send($rec, "_variableName_", [smalltalk.send(aNode, "_value", [])]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.UnknownVariableError || UnknownVariableError), "_new", []));})()) : smalltalk.send($receiver, "_ifTrue_ifFalse_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_unknownVariables", []), "_add_", [smalltalk.send(aNode, "_value", [])]);}), (function(){return (function($rec){smalltalk.send($rec, "_variableName_", [smalltalk.send(aNode, "_value", [])]);return smalltalk.send($rec, "_signal", []);})(smalltalk.send((smalltalk.UnknownVariableError || UnknownVariableError), "_new", []));})]));
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_messageSends",
smalltalk.method({
selector: "messageSends",
fn: function () {
var self=this;
return (($receiver = self['@messageSends']) == nil || $receiver == undefined) ? (function(){return (self['@messageSends']=smalltalk.send((smalltalk.Set || Set), "_new", []));})() : $receiver;
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newBlockScope",
smalltalk.method({
selector: "newBlockScope",
fn: function () {
var self=this;
return smalltalk.send(self, "_newScopeOfClass_", [(smalltalk.LexicalScope || LexicalScope)]);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newMethodScope",
smalltalk.method({
selector: "newMethodScope",
fn: function () {
var self=this;
return smalltalk.send(self, "_newScopeOfClass_", [(smalltalk.MethodLexicalScope || MethodLexicalScope)]);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_newScopeOfClass_",
smalltalk.method({
selector: "newScopeOfClass:",
fn: function (aLexicalScopeClass) {
var self=this;
return (function($rec){smalltalk.send($rec, "_outerScope_", [self['@currentScope']]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(aLexicalScopeClass, "_new", []));
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_popScope",
smalltalk.method({
selector: "popScope",
fn: function () {
var self=this;
(($receiver = self['@currentScope']) != nil && $receiver != undefined) ? (function(){return (self['@currentScope']=smalltalk.send(self['@currentScope'], "_outerScope", []));})() : nil;
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pseudoVariables",
smalltalk.method({
selector: "pseudoVariables",
fn: function () {
var self=this;
return ["self", "super", "true", "false", "nil", "thisContext"];
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_pushScope_",
smalltalk.method({
selector: "pushScope:",
fn: function (aScope) {
var self=this;
smalltalk.send(aScope, "_outerScope_", [self['@currentScope']]);
(self['@currentScope']=aScope);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass",
smalltalk.method({
selector: "theClass",
fn: function () {
var self=this;
return self['@theClass'];
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_theClass_",
smalltalk.method({
selector: "theClass:",
fn: function (aClass) {
var self=this;
(self['@theClass']=aClass);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_validateVariableScope_",
smalltalk.method({
selector: "validateVariableScope:",
fn: function (aString) {
var self=this;
(($receiver = smalltalk.send(self['@currentScope'], "_lookupVariable_", [aString])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(self, "_errorShadowingVariable_", [aString]);})() : nil;
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitAssignmentNode_",
smalltalk.method({
selector: "visitAssignmentNode:",
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(smalltalk.send(self, "_pseudoVariables", []), "_includes_", [smalltalk.send(smalltalk.send(aNode, "_left", []), "_value", [])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(self, "_errorInvalidAssignment_", [smalltalk.send(aNode, "_left", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(self, "_errorInvalidAssignment_", [smalltalk.send(aNode, "_left", [])]);})]));
smalltalk.send(smalltalk.send(aNode, "_left", []), "_beAssigned", []);
smalltalk.send(smalltalk.send(aNode, "_right", []), "_beUsed", []);
smalltalk.send(self, "_visitAssignmentNode_", [aNode], smalltalk.SemanticAnalyzer.superclass || nil);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitBlockNode_",
smalltalk.method({
selector: "visitBlockNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_pushScope_", [smalltalk.send(self, "_newBlockScope", [])]);
smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
smalltalk.send(smalltalk.send(aNode, "_parameters", []), "_do_", [(function(each){smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addArg_", [each]);})]);
smalltalk.send(self, "_visitBlockNode_", [aNode], smalltalk.SemanticAnalyzer.superclass || nil);
smalltalk.send(self, "_popScope", []);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitCascadeNode_",
smalltalk.method({
selector: "visitCascadeNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_do_", [(function(each){return smalltalk.send(each, "_receiver_", [smalltalk.send(aNode, "_receiver", [])]);})]);
smalltalk.send(self, "_visitCascadeNode_", [aNode], smalltalk.SemanticAnalyzer.superclass || nil);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitClassReferenceNode_",
smalltalk.method({
selector: "visitClassReferenceNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_classReferences", []), "_add_", [smalltalk.send(aNode, "_value", [])]);
smalltalk.send(aNode, "_binding_", [(function($rec){smalltalk.send($rec, "_name_", [smalltalk.send(aNode, "_value", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.ClassRefVar || ClassRefVar), "_new", []))]);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitMethodNode_",
smalltalk.method({
selector: "visitMethodNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(self, "_pushScope_", [smalltalk.send(self, "_newMethodScope", [])]);
smalltalk.send(aNode, "_scope_", [self['@currentScope']]);
smalltalk.send(smalltalk.send(smalltalk.send(self, "_theClass", []), "_allInstanceVariableNames", []), "_do_", [(function(each){return smalltalk.send(self['@currentScope'], "_addIVar_", [each]);})]);
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_", [(function(each){smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addArg_", [each]);})]);
smalltalk.send(self, "_visitMethodNode_", [aNode], smalltalk.SemanticAnalyzer.superclass || nil);
(function($rec){smalltalk.send($rec, "_classReferences_", [smalltalk.send(self, "_classReferences", [])]);return smalltalk.send($rec, "_messageSends_", [smalltalk.send(self, "_messageSends", [])]);})(aNode);
smalltalk.send(self, "_popScope", []);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitReturnNode_",
smalltalk.method({
selector: "visitReturnNode:",
fn: function (aNode) {
var self=this;
((($receiver = smalltalk.send(self['@currentScope'], "_isMethodScope", [])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_nonLocalReturn_", [true]);return smalltalk.send(aNode, "_nonLocalReturn_", [true]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(smalltalk.send(self['@currentScope'], "_methodScope", []), "_nonLocalReturn_", [true]);return smalltalk.send(aNode, "_nonLocalReturn_", [true]);})]));
smalltalk.send(smalltalk.send(smalltalk.send(aNode, "_nodes", []), "_first", []), "_beUsed", []);
smalltalk.send(self, "_visitReturnNode_", [aNode], smalltalk.SemanticAnalyzer.superclass || nil);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSendNode_",
smalltalk.method({
selector: "visitSendNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(self, "_messageSends", []), "_add_", [smalltalk.send(aNode, "_selector", [])]);
(($receiver = smalltalk.send(aNode, "_receiver", [])) != nil && $receiver != undefined) ? (function(){return smalltalk.send(smalltalk.send(aNode, "_receiver", []), "_beUsed", []);})() : nil;
smalltalk.send(smalltalk.send(aNode, "_arguments", []), "_do_", [(function(each){return smalltalk.send(each, "_beUsed", []);})]);
smalltalk.send(self, "_visitSendNode_", [aNode], smalltalk.SemanticAnalyzer.superclass || nil);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitSequenceNode_",
smalltalk.method({
selector: "visitSequenceNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(smalltalk.send(aNode, "_temps", []), "_do_", [(function(each){smalltalk.send(self, "_validateVariableScope_", [each]);return smalltalk.send(self['@currentScope'], "_addTemp_", [each]);})]);
smalltalk.send(self, "_visitSequenceNode_", [aNode], smalltalk.SemanticAnalyzer.superclass || nil);
return self;}
}),
smalltalk.SemanticAnalyzer);

smalltalk.addMethod(
"_visitVariableNode_",
smalltalk.method({
selector: "visitVariableNode:",
fn: function (aNode) {
var self=this;
smalltalk.send(aNode, "_binding_", [(($receiver = smalltalk.send(self['@currentScope'], "_lookupVariable_", [aNode])) == nil || $receiver == undefined) ? (function(){smalltalk.send(self, "_errorUnknownVariable_", [aNode]);return (function($rec){smalltalk.send($rec, "_name_", [smalltalk.send(aNode, "_value", [])]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.UnknownVar || UnknownVar), "_new", []));})() : $receiver]);
return self;}
}),
smalltalk.SemanticAnalyzer);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aClass) {
var self=this;
return (function($rec){smalltalk.send($rec, "_theClass_", [aClass]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send(self, "_new", []));
return self;}
}),
smalltalk.SemanticAnalyzer.klass);

