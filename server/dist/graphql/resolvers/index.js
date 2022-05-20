"use strict";var _path=_interopRequireDefault(require("path"));var _merge=require("@graphql-tools/merge");var _loadFiles=require("@graphql-tools/load-files");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var resolversArray=(0,_loadFiles.loadFilesSync)(_path["default"].join(__dirname),{extensions:["js"],extractExports:function extractExports(fileExport){if(typeof fileExport==="function"){return fileExport("query_root")}return fileExport}});module.exports=(0,_merge.mergeResolvers)(resolversArray);// const Query = require("./queries");


// const Mutation = require("./mutations");
// const Subscription = require("./subscriptions");
// const User = require("./user");
// const Post = require("./post");
// const Comment = require("./comment");
// module.exports = {
//   Query,
//   Mutation,
//   Subscription,
//   User,
//   Post,
//   Comment,
// };