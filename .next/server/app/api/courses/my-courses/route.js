"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/courses/my-courses/route";
exports.ids = ["app/api/courses/my-courses/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2Fmy-courses%2Froute&page=%2Fapi%2Fcourses%2Fmy-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Fmy-courses%2Froute.ts&appDir=%2Fhome%2Fsealos%2Fproject%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsealos%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2Fmy-courses%2Froute&page=%2Fapi%2Fcourses%2Fmy-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Fmy-courses%2Froute.ts&appDir=%2Fhome%2Fsealos%2Fproject%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsealos%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_sealos_project_src_app_api_courses_my_courses_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/courses/my-courses/route.ts */ \"(rsc)/./src/app/api/courses/my-courses/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/courses/my-courses/route\",\n        pathname: \"/api/courses/my-courses\",\n        filename: \"route\",\n        bundlePath: \"app/api/courses/my-courses/route\"\n    },\n    resolvedPagePath: \"/home/sealos/project/src/app/api/courses/my-courses/route.ts\",\n    nextConfigOutput,\n    userland: _home_sealos_project_src_app_api_courses_my_courses_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/courses/my-courses/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjb3Vyc2VzJTJGbXktY291cnNlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY291cnNlcyUyRm15LWNvdXJzZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjb3Vyc2VzJTJGbXktY291cnNlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc2VhbG9zJTJGcHJvamVjdCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNlYWxvcyUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDIvPzBkNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvc2VhbG9zL3Byb2plY3Qvc3JjL2FwcC9hcGkvY291cnNlcy9teS1jb3Vyc2VzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jb3Vyc2VzL215LWNvdXJzZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb3Vyc2VzL215LWNvdXJzZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvdXJzZXMvbXktY291cnNlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3NlYWxvcy9wcm9qZWN0L3NyYy9hcHAvYXBpL2NvdXJzZXMvbXktY291cnNlcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY291cnNlcy9teS1jb3Vyc2VzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2Fmy-courses%2Froute&page=%2Fapi%2Fcourses%2Fmy-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Fmy-courses%2Froute.ts&appDir=%2Fhome%2Fsealos%2Fproject%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsealos%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/courses/my-courses/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/courses/my-courses/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n/* harmony import */ var _models_Course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Course */ \"(rsc)/./src/models/Course.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)();\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"未授权\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const courses = await _models_Course__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n            user: session.user.email\n        }).sort({\n            createdAt: -1\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(courses);\n    } catch (error) {\n        console.error(\"获取我的课程错误:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message || \"获取课程失败\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb3Vyc2VzL215LWNvdXJzZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0w7QUFDRDtBQUNRO0FBRXJDLGVBQWVJO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1GLDJEQUFnQkE7UUFDdEMsSUFBSSxDQUFDRSxTQUFTQyxNQUFNQyxPQUFPO1lBQ3pCLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBTSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDM0Q7UUFFQSxNQUFNVCx3REFBU0E7UUFDZixNQUFNVSxVQUFVLE1BQU1ULHNEQUFNQSxDQUFDVSxJQUFJLENBQUM7WUFBRU4sTUFBTUQsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1FBQUMsR0FBR00sSUFBSSxDQUFDO1lBQUVDLFdBQVcsQ0FBQztRQUFFO1FBQ3JGLE9BQU9kLHFEQUFZQSxDQUFDUSxJQUFJLENBQUNHO0lBQzNCLEVBQUUsT0FBT0YsT0FBWTtRQUNuQk0sUUFBUU4sS0FBSyxDQUFDLGFBQWFBO1FBQzNCLE9BQU9ULHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLE9BQU9BLE1BQU1PLE9BQU8sSUFBSTtRQUFTLEdBQ25DO1lBQUVOLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQyLy4vc3JjL2FwcC9hcGkvY291cnNlcy9teS1jb3Vyc2VzL3JvdXRlLnRzPzYwOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvbGliL21vbmdvZGInXG5pbXBvcnQgQ291cnNlIGZyb20gJ0AvbW9kZWxzL0NvdXJzZSdcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oKVxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAn5pyq5o6I5p2DJyB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgfVxuXG4gICAgYXdhaXQgZGJDb25uZWN0KClcbiAgICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgQ291cnNlLmZpbmQoeyB1c2VyOiBzZXNzaW9uLnVzZXIuZW1haWwgfSkuc29ydCh7IGNyZWF0ZWRBdDogLTEgfSlcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY291cnNlcylcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+iOt+WPluaIkeeahOivvueoi+mUmeivrzonLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICfojrflj5bor77nqIvlpLHotKUnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApXG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRiQ29ubmVjdCIsIkNvdXJzZSIsImdldFNlcnZlclNlc3Npb24iLCJHRVQiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiY291cnNlcyIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwiY29uc29sZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/courses/my-courses/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://root:dcrlhdfb@shenqi-mongo-mongodb.ns-pw6dku8n.svc:27017\";\nif (!MONGODB_URI) {\n    throw new Error(\"请定义 MONGODB_URI 环境变量\");\n}\nasync function dbConnect() {\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) {\n            return (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        }\n        const conn = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            bufferCommands: false\n        });\n        console.log(\"MongoDB 连接成功\");\n        return conn;\n    } catch (error) {\n        console.error(\"MongoDB 连接错误:\", error);\n        throw error;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJO0FBRS9DLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxlQUFlQztJQUNiLElBQUk7UUFDRixJQUFJTCw0REFBbUIsQ0FBQ08sVUFBVSxJQUFJLEdBQUc7WUFDdkMsT0FBT1AsNERBQW1CO1FBQzVCO1FBRUEsTUFBTVEsT0FBTyxNQUFNUix1REFBZ0IsQ0FBQ0MsYUFBYTtZQUMvQ1MsZ0JBQWdCO1FBQ2xCO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9KO0lBQ1QsRUFBRSxPQUFPSyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyxpQkFBaUJBO1FBQy9CLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLGlFQUFlUixTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW50aXRsZWQyLy4vc3JjL2xpYi9tb25nb2RiLnRzPzUzYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICdtb25nb2RiOi8vcm9vdDpkY3JsaGRmYkBzaGVucWktbW9uZ28tbW9uZ29kYi5ucy1wdzZka3U4bi5zdmM6MjcwMTcnXG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCfor7flrprkuYkgTU9OR09EQl9VUkkg546v5aKD5Y+Y6YePJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICB0cnkge1xuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb25cbiAgICB9XG5cbiAgICBjb25zdCBjb25uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwge1xuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZygnTW9uZ29EQiDov57mjqXmiJDlip8nKVxuICAgIHJldHVybiBjb25uXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignTW9uZ29EQiDov57mjqXplJnor686JywgZXJyb3IpXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3QgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJkYkNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbm4iLCJjb25uZWN0IiwiYnVmZmVyQ29tbWFuZHMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Course.ts":
/*!******************************!*\
  !*** ./src/models/Course.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CourseSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: String,\n        required: [\n            true,\n            \"请提供用户信息\"\n        ]\n    },\n    title: {\n        type: String,\n        required: [\n            true,\n            \"请输入课程标题\"\n        ],\n        trim: true,\n        maxlength: [\n            100,\n            \"标题不能超过100个字符\"\n        ]\n    },\n    content: {\n        type: String,\n        required: [\n            true,\n            \"请输入课程内容\"\n        ]\n    },\n    category: {\n        type: String,\n        required: [\n            true,\n            \"请选择课程分类\"\n        ],\n        enum: [\n            \"AI基础\",\n            \"机器学习\",\n            \"深度学习\"\n        ]\n    },\n    tags: {\n        type: [\n            String\n        ],\n        default: [],\n        validate: {\n            validator: function(v) {\n                return v.every((tag)=>[\n                        \"入门\",\n                        \"进阶\",\n                        \"高级\",\n                        \"实战\",\n                        \"理论\"\n                    ].includes(tag));\n            },\n            message: \"无效的标签\"\n        }\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Course || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Course\", CourseSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0NvdXJzZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsZUFBZSxJQUFJRCx3REFBZSxDQUFDO0lBQ3ZDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQVU7SUFDN0I7SUFDQUMsT0FBTztRQUNMSCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFVO1FBQzNCRSxNQUFNO1FBQ05DLFdBQVc7WUFBQztZQUFLO1NBQWU7SUFDbEM7SUFDQUMsU0FBUztRQUNQTixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFVO0lBQzdCO0lBQ0FLLFVBQVU7UUFDUlAsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBVTtRQUMzQk0sTUFBTTtZQUFDO1lBQVE7WUFBUTtTQUFPO0lBQ2hDO0lBQ0FDLE1BQU07UUFDSlQsTUFBTTtZQUFDQztTQUFPO1FBQ2RTLFNBQVMsRUFBRTtRQUNYQyxVQUFVO1lBQ1JDLFdBQVcsU0FBU0MsQ0FBVztnQkFDN0IsT0FBT0EsRUFBRUMsS0FBSyxDQUFDQyxDQUFBQSxNQUFPO3dCQUFDO3dCQUFNO3dCQUFNO3dCQUFNO3dCQUFNO3FCQUFLLENBQUNDLFFBQVEsQ0FBQ0Q7WUFDaEU7WUFDQUUsU0FBUztRQUNYO0lBQ0Y7QUFDRixHQUFHO0lBQ0RDLFlBQVk7QUFDZDtBQUVBLGlFQUFldEIsd0RBQWUsQ0FBQ3dCLE1BQU0sSUFBSXhCLHFEQUFjLENBQUMsVUFBVUMsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VudGl0bGVkMi8uL3NyYy9tb2RlbHMvQ291cnNlLnRzPzU1YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBDb3Vyc2VTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICfor7fmj5DkvpvnlKjmiLfkv6Hmga8nXSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAn6K+36L6T5YWl6K++56iL5qCH6aKYJ10sXG4gICAgdHJpbTogdHJ1ZSxcbiAgICBtYXhsZW5ndGg6IFsxMDAsICfmoIfpopjkuI3og73otoXov4cxMDDkuKrlrZfnrKYnXVxuICB9LFxuICBjb250ZW50OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ+ivt+i+k+WFpeivvueoi+WGheWuuSddLFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsICfor7fpgInmi6nor77nqIvliIbnsbsnXSxcbiAgICBlbnVtOiBbJ0FJ5Z+656GAJywgJ+acuuWZqOWtpuS5oCcsICfmt7HluqblrabkuaAnXVxuICB9LFxuICB0YWdzOiB7XG4gICAgdHlwZTogW1N0cmluZ10sXG4gICAgZGVmYXVsdDogW10sXG4gICAgdmFsaWRhdGU6IHtcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odjogc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuIHYuZXZlcnkodGFnID0+IFsn5YWl6ZeoJywgJ+i/m+mYticsICfpq5jnuqcnLCAn5a6e5oiYJywgJ+eQhuiuuiddLmluY2x1ZGVzKHRhZykpXG4gICAgICB9LFxuICAgICAgbWVzc2FnZTogJ+aXoOaViOeahOagh+etvidcbiAgICB9XG4gIH1cbn0sIHtcbiAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNvdXJzZSB8fCBtb25nb29zZS5tb2RlbCgnQ291cnNlJywgQ291cnNlU2NoZW1hKSAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJDb3Vyc2VTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidGl0bGUiLCJ0cmltIiwibWF4bGVuZ3RoIiwiY29udGVudCIsImNhdGVnb3J5IiwiZW51bSIsInRhZ3MiLCJkZWZhdWx0IiwidmFsaWRhdGUiLCJ2YWxpZGF0b3IiLCJ2IiwiZXZlcnkiLCJ0YWciLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiQ291cnNlIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Course.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcourses%2Fmy-courses%2Froute&page=%2Fapi%2Fcourses%2Fmy-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Fmy-courses%2Froute.ts&appDir=%2Fhome%2Fsealos%2Fproject%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsealos%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();