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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Courses; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Courses() {\n    _s();\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCourses = async ()=>{\n            const response = await fetch(\"/api/courses\");\n            const data = await response.json();\n            setCourses(data);\n        };\n        fetchCourses();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-gradient-to-b from-gray-50 to-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1024px] mx-auto px-4 pt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl font-bold text-gray-900 mb-4\",\n                                children: \"课程中心\"\n                            }, void 0, false, {\n                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg text-gray-600\",\n                                children: \"探索最新最全的AI课程，开启你的学习之旅\"\n                            }, void 0, false, {\n                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6\",\n                        children: courses.map((course)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white p-4 rounded-lg shadow-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mb-2\",\n                                        children: course.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-600 mb-4\",\n                                        children: [\n                                            course.content.substring(0, 60),\n                                            \"...\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-500 mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    \"分类: \",\n                                                    course.category\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" | \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    \"标签: \",\n                                                    course.tags.join(\", \")\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 54\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-500\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"创建人: \",\n                                                course.user\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-500\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"创建日期: \",\n                                                new Date(course.createdAt).toLocaleDateString()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-500\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: [\n                                                \"更新日期: \",\n                                                new Date(course.updatedAt).toLocaleDateString()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, course._id, true, {\n                                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sealos/project/src/app/courses/page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Courses, \"Ks3haE1eP87BHv/TJ29co0rtnQM=\");\n_c = Courses;\nvar _c;\n$RefreshReg$(_c, \"Courses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291cnNlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTJDO0FBQ0g7QUFFekIsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1NLGVBQWU7WUFDbkIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsV0FBV0k7UUFDYjtRQUNBSDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1YsMERBQU1BOzs7OzswQkFDUCw4REFBQ1M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUF3Qzs7Ozs7OzBDQUN0RCw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQXdCOzs7Ozs7Ozs7Ozs7a0NBR3ZDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlIsUUFBUVcsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDTDtnQ0FBcUJDLFdBQVU7O2tEQUM5Qiw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQThCSSxPQUFPRSxLQUFLOzs7Ozs7a0RBQ3hELDhEQUFDSjt3Q0FBRUYsV0FBVTs7NENBQXNCSSxPQUFPRyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHOzRDQUFJOzs7Ozs7O2tEQUNuRSw4REFBQ1Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDUzs7b0RBQUs7b0RBQUtMLE9BQU9NLFFBQVE7Ozs7Ozs7NENBQVE7MERBQUcsOERBQUNEOztvREFBSztvREFBS0wsT0FBT08sSUFBSSxDQUFDQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7a0RBRW5FLDhEQUFDYjt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ1M7O2dEQUFLO2dEQUFNTCxPQUFPUyxJQUFJOzs7Ozs7Ozs7Ozs7a0RBRXpCLDhEQUFDZDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ1M7O2dEQUFLO2dEQUFPLElBQUlLLEtBQUtWLE9BQU9XLFNBQVMsRUFBRUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7a0RBRTVELDhEQUFDakI7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNTOztnREFBSztnREFBTyxJQUFJSyxLQUFLVixPQUFPYSxTQUFTLEVBQUVELGtCQUFrQjs7Ozs7Ozs7Ozs7OzsrQkFicERaLE9BQU9jLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmhDO0dBNUN3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY291cnNlcy9wYWdlLnRzeD8yZTQ3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZXMoKSB7XG4gIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jb3Vyc2VzJylcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNldENvdXJzZXMoZGF0YSlcbiAgICB9XG4gICAgZmV0Y2hDb3Vyc2VzKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS01MCB0by13aGl0ZVwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTAyNHB4XSBteC1hdXRvIHB4LTQgcHQtMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBtYi00XCI+6K++56iL5Lit5b+DPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDBcIj7mjqLntKLmnIDmlrDmnIDlhajnmoRBSeivvueoi++8jOW8gOWQr+S9oOeahOWtpuS5oOS5i+aXhTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAge2NvdXJzZXMubWFwKChjb3Vyc2U6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2NvdXJzZS5faWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj57Y291cnNlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNFwiPntjb3Vyc2UuY29udGVudC5zdWJzdHJpbmcoMCwgNjApfS4uLjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPuWIhuexuzoge2NvdXJzZS5jYXRlZ29yeX08L3NwYW4+IHwgPHNwYW4+5qCH562+OiB7Y291cnNlLnRhZ3Muam9pbignLCAnKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPuWIm+W7uuS6ujoge2NvdXJzZS51c2VyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+5Yib5bu65pel5pyfOiB7bmV3IERhdGUoY291cnNlLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7mm7TmlrDml6XmnJ86IHtuZXcgRGF0ZShjb3Vyc2UudXBkYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0gIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiQ291cnNlcyIsImNvdXJzZXMiLCJzZXRDb3Vyc2VzIiwiZmV0Y2hDb3Vyc2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwibWFwIiwiY291cnNlIiwiaDIiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWJzdHJpbmciLCJzcGFuIiwiY2F0ZWdvcnkiLCJ0YWdzIiwiam9pbiIsInVzZXIiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidXBkYXRlZEF0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/courses/page.tsx\n"));

/***/ })

});