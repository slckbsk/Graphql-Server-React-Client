"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Subscription=void 0;var _pubsub=_interopRequireDefault(require("../../pubsub"));var _data=_interopRequireDefault(require("../../data"));var _graphqlSubscriptions=require("graphql-subscriptions");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var Subscription={userCreated:{subscribe:function subscribe(){return _pubsub["default"].asyncIterator("userCreated")}},userUpdated:{subscribe:function subscribe(){return _pubsub["default"].asyncIterator("userUpdated")}},userDeleted:{subscribe:function subscribe(){return _pubsub["default"].asyncIterator("userDeleted")}},postCreated:{subscribe:(0,_graphqlSubscriptions.withFilter)(function(){return _pubsub["default"].asyncIterator("postCreated")},function(payload,variables){return variables.user_id?payload.postCreated.user_id===variables.user_id:true})},postUpdated:{subscribe:function subscribe(){return _pubsub["default"].asyncIterator("postUpdated")}},postDeleted:{subscribe:function subscribe(){return _pubsub["default"].asyncIterator("postDeleted")}},postCount:{subscribe:function subscribe(){setTimeout(function(){_pubsub["default"].publish("postCount",{postCount:_data["default"].posts.length})});return _pubsub["default"].asyncIterator("postCount")}},commentCreated:{subscribe:(0,_graphqlSubscriptions.withFilter)(function(){return _pubsub["default"].asyncIterator("commentCreated")},function(payload,variables){return variables.post_id?payload.commentCreated.post_id===variables.post_id:true})},commentUpdated:{subscribe:function subscribe(){return _pubsub["default"].asyncIterator("commentUpdated")}},commentDeleted:{subscribe:function subscribe(){return _pubsub["default"].asyncIterator("commentDeleted")}}};exports.Subscription=Subscription;