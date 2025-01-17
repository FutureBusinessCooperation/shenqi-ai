"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/courses/page",{

/***/ "(app-pages-browser)/./src/app/courses/page.tsx":
/*!**********************************!*\
  !*** ./src/app/courses/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Courses; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Courses() {\n    _s();\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCourses = async ()=>{\n            const response = await fetch(\"/api/courses\");\n            const data = await response.json();\n            setCourses(data);\n        };\n        fetchCourses();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-b from-gray-50 to-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1024px] mx-auto px-4 pt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl font-bold text-gray-900 mb-4\",\n                                children: \"课程中心\"\n                            }, void 0, false, {\n                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg text-gray-600\",\n                                children: \"探索最新最全的AI课程，开启你的学习之旅\"\n                            }, void 0, false, {\n                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6\",\n                        children: courses.map((course)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-40 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-6xl\",\n                                            children: \"\\uD83C\\uDF93\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-semibold mb-2 text-gray-900\",\n                                                children: course.title\n                                            }, void 0, false, {\n                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600 mb-4 line-clamp-2\",\n                                                children: course.content\n                                            }, void 0, false, {\n                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"space-y-2\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex items-center text-sm text-gray-500\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs\",\n                                                                children: course.category\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                                lineNumber: 41,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"mx-2\",\n                                                                children: \"•\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-gray-500\",\n                                                                children: course.tags.join(\", \")\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                                lineNumber: 45,\n                                                                columnNumber: 21\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex items-center justify-between text-sm\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-gray-500\",\n                                                                children: [\n                                                                    \"作者：\",\n                                                                    course.user\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                                lineNumber: 48,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"text-gray-500\",\n                                                                children: new Date(course.updatedAt).toLocaleDateString()\n                                                            }, void 0, false, {\n                                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 21\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, course._id, true, {\n                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Courses, \"Ks3haE1eP87BHv/TJ29co0rtnQM=\");\n_c = Courses;\nvar _c;\n$RefreshReg$(_c, \"Courses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291cnNlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTJDO0FBQ0g7QUFFekIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGVBQWU7WUFDbkIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsV0FBV0k7UUFDYjtRQUNBSDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1YsMERBQU1BOzs7OzswQkFDUCw4REFBQ1M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUF3Qzs7Ozs7OzBDQUN0RCw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQXdCOzs7Ozs7Ozs7Ozs7a0NBR3ZDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlIsUUFBUVcsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDTDtnQ0FFQ0MsV0FBVTs7a0RBRVYsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDSzs0Q0FBS0wsV0FBVTtzREFBVzs7Ozs7Ozs7Ozs7a0RBRTdCLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNNO2dEQUFHTixXQUFVOzBEQUE0Q0ksT0FBT0csS0FBSzs7Ozs7OzBEQUN0RSw4REFBQ0w7Z0RBQUVGLFdBQVU7MERBQW1DSSxPQUFPSSxPQUFPOzs7Ozs7MERBQzlELDhEQUFDVDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNEO3dEQUFJQyxXQUFVOzswRUFDYiw4REFBQ0s7Z0VBQUtMLFdBQVU7MEVBQ2JJLE9BQU9LLFFBQVE7Ozs7OzswRUFFbEIsOERBQUNKO2dFQUFLTCxXQUFVOzBFQUFPOzs7Ozs7MEVBQ3ZCLDhEQUFDSztnRUFBS0wsV0FBVTswRUFBaUJJLE9BQU9NLElBQUksQ0FBQ0MsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7a0VBRXBELDhEQUFDWjt3REFBSUMsV0FBVTs7MEVBQ2IsOERBQUNLO2dFQUFLTCxXQUFVOztvRUFBZ0I7b0VBQUlJLE9BQU9RLElBQUk7Ozs7Ozs7MEVBQy9DLDhEQUFDUDtnRUFBS0wsV0FBVTswRUFDYixJQUFJYSxLQUFLVCxPQUFPVSxTQUFTLEVBQUVDLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFwQmpEWCxPQUFPWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0I3QjtHQXZEd0J6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvdXJzZXMvcGFnZS50c3g/MmU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VzKCkge1xuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ291cnNlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY291cnNlcycpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBzZXRDb3Vyc2VzKGRhdGEpXG4gICAgfVxuICAgIGZldGNoQ291cnNlcygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLWdyYXktNTAgdG8td2hpdGVcIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEwMjRweF0gbXgtYXV0byBweC00IHB0LTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItNFwiPuivvueoi+S4reW/gzwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwXCI+5o6i57Si5pyA5paw5pyA5YWo55qEQUnor77nqIvvvIzlvIDlkK/kvaDnmoTlrabkuaDkuYvml4U8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIGtleT17Y291cnNlLl9pZH0gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgb3ZlcmZsb3ctaGlkZGVuIGhvdmVyOi10cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTEwMCB0by1wdXJwbGUtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC02eGxcIj7wn46TPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTIgdGV4dC1ncmF5LTkwMFwiPntjb3Vyc2UudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTQgbGluZS1jbGFtcC0yXCI+e2NvdXJzZS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctYmx1ZS01MCB0ZXh0LWJsdWUtNjAwIHB4LTIgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtjb3Vyc2UuY2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMlwiPuKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPntjb3Vyc2UudGFncy5qb2luKCcsICcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+5L2c6ICF77yae2NvdXJzZS51c2VyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShjb3Vyc2UudXBkYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiQ291cnNlcyIsImNvdXJzZXMiLCJzZXRDb3Vyc2VzIiwiZmV0Y2hDb3Vyc2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwibWFwIiwiY291cnNlIiwic3BhbiIsImgyIiwidGl0bGUiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJ0YWdzIiwiam9pbiIsInVzZXIiLCJEYXRlIiwidXBkYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/courses/page.tsx\n"));

/***/ })

});