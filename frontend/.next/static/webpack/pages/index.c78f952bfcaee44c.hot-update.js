"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchForm.tsx":
/*!***********************************!*\
  !*** ./components/SearchForm.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchForm = (param)=>{\n    let { onSearch  } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.removeItem(\"searchResults\");\n    }, [\n        username,\n        keyword\n    ]);\n    const searchRepositories = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/search/\".concat(username, \"/\").concat(keyword));\n            onSearch(response.data);\n        // Save search results to local storage\n        //localStorage.setItem('searchResults', JSON.stringify(response.data));\n        //localStorage.removeItem(\"searchResults\");\n        } catch (error) {\n            if (axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAxiosError(error)) {\n                if (error.response && error.response.status === 500) {\n                    router.replace(\"/500\");\n                    console.error(error.message);\n                }\n            } else {\n                // Handle generic errors here\n                console.error(error);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"GitHub username\",\n                onChange: (event)=>setUsername(event.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Keyword\",\n                onChange: (event)=>setKeyword(event.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: searchRepositories,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchForm, \"qyIlqBG/csHIAneqPu/qJIgJMVw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\nvar _c;\n$RefreshReg$(_c, \"SearchForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBQ0s7QUFDYjtBQUNDO0FBQ29CO0FBVS9DLE1BQU1NLGFBQXdDO1FBQUMsRUFBRUMsU0FBUSxFQUFFOztJQUN6RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUN4QkQsZ0RBQVNBLENBQUM7UUFDUlksYUFBYUMsV0FBVztJQUMxQixHQUFHO1FBQUNOO1FBQVVFO0tBQVE7SUFFdEIsTUFBTUsscUJBQXFCO1FBQ3pCLElBQUk7WUFDSixNQUFNQyxXQUFXLE1BQU1iLGlEQUFTYyxDQUFDLGdDQUE0Q1AsT0FBWkYsVUFBUyxLQUFXLE9BQVJFO1lBQzdFSCxTQUFTUyxTQUFTRTtRQUNsQix1Q0FBdUM7UUFDdkMsdUVBQXVFO1FBQ3ZFLDJDQUEyQztRQUMzQyxFQUNBLE9BQU9DLE9BQU87WUFDVixJQUFJaEIsMERBQWtCaUIsQ0FBQ0QsUUFBUTtnQkFDM0IsSUFBSUEsTUFBTUgsWUFBWUcsTUFBTUgsU0FBU0ssV0FBVyxLQUFLO29CQUNyRFQsT0FBT1UsUUFBUTtvQkFDZkMsUUFBUUosTUFBTUEsTUFBTUs7Z0JBQ3BCO1lBQ0YsT0FBTztnQkFDTCw2QkFBNkI7Z0JBQzdCRCxRQUFRSixNQUFNQTtZQUN0QjtRQUNGO0lBQ0Y7SUFFRSxxQkFDRSw4REFBQ007UUFBSUMsV0FBV3JCLHFFQUFXc0I7OzBCQUN6Qiw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFVBQVUsQ0FBQ0MsUUFBVXZCLFlBQVl1QixNQUFNQyxPQUFPQzs7Ozs7OzBCQUdoRCw4REFBQ047Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLFVBQVUsQ0FBQ0MsUUFBVXJCLFdBQVdxQixNQUFNQyxPQUFPQzs7Ozs7OzBCQUcvQyw4REFBQ0M7Z0JBQU9DLFNBQVNyQjswQkFBb0I7Ozs7Ozs7Ozs7OztBQUszQztHQWhETVQ7O1FBR1dKLGtEQUFTQTs7O0tBSHBCSTtBQWtETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaEZvcm0udHN4PzUxYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCAgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW50ZXJmYWNlIFJlcG9zaXRvcnkge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBodG1sX3VybDogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBTZWFyY2hGb3JtUHJvcHMge1xyXG4gIG9uU2VhcmNoOiAocmVwb3NpdG9yaWVzOiBSZXBvc2l0b3J5W10pID0+IHZvaWQ7XHJcbn1cclxuY29uc3QgU2VhcmNoRm9ybTogUmVhY3QuRkM8U2VhcmNoRm9ybVByb3BzPiA9ICh7IG9uU2VhcmNoIH0pID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInNlYXJjaFJlc3VsdHNcIik7XHJcbiAgfSwgW3VzZXJuYW1lLCBrZXl3b3JkXSk7XHJcblxyXG4gIGNvbnN0IHNlYXJjaFJlcG9zaXRvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3NlYXJjaC8ke3VzZXJuYW1lfS8ke2tleXdvcmR9YCk7XHJcbiAgICBvblNlYXJjaChyZXNwb25zZS5kYXRhKTtcclxuICAgIC8vIFNhdmUgc2VhcmNoIHJlc3VsdHMgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUmVzdWx0cycsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIC8vbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzZWFyY2hSZXN1bHRzXCIpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiLzUwMFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGdlbmVyaWMgZXJyb3JzIGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiR2l0SHViIHVzZXJuYW1lXCJcclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiS2V5d29yZFwiXHJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0S2V5d29yZChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2hSZXBvc2l0b3JpZXN9PlxyXG4gICAgICAgIFNlYXJjaFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGb3JtO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIlJlYWN0Iiwic3R5bGVzIiwiU2VhcmNoRm9ybSIsIm9uU2VhcmNoIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImtleXdvcmQiLCJzZXRLZXl3b3JkIiwicm91dGVyIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNlYXJjaFJlcG9zaXRvcmllcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiaXNBeGlvc0Vycm9yIiwic3RhdHVzIiwicmVwbGFjZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchForm.tsx\n"));

/***/ })

});