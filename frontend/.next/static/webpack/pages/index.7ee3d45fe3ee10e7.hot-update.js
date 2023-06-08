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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../../node_modules/axios/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SearchForm = (param)=>{\n    let { onSearch  } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.removeItem(\"searchResults\");\n    }, [\n        username,\n        keyword\n    ]);\n    const searchRepositories = async ()=>{\n        if (!username || !keyword) {\n            //usernameかkeywordが入力されないときは、APIリクエストを送らない\n            //こうすることで、一旦githubのurlにとび、元のページに戻ってきたときにエラーが生じないで済む。\n            return;\n        }\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/search/\".concat(username, \"/\").concat(keyword));\n            onSearch(response.data);\n        // Save search results to local storage\n        //localStorage.setItem('searchResults', JSON.stringify(response.data));\n        //localStorage.removeItem(\"searchResults\");\n        } catch (error) {\n            if (axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAxiosError(error)) {\n                if (error.response && error.response.status === 500) {\n                    // Redirect to /500 page if the error was a 500 error\n                    router.replace(\"/500\");\n                } else if (error.response && error.response.status === 404) {\n                    // Redirect to /404 page if the error was a 404 error\n                    router.replace(\"/404\");\n                }\n                console.error(error.message);\n            } else {\n                // Handle generic errors here\n                console.error(error);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"GitHub username\",\n                onChange: (event)=>setUsername(event.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Keyword\",\n                onChange: (event)=>setKeyword(event.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: searchRepositories,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mitom\\\\my_app\\\\frontend\\\\components\\\\SearchForm.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchForm, \"qyIlqBG/csHIAneqPu/qJIgJMVw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\nvar _c;\n$RefreshReg$(_c, \"SearchForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEZvcm0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBQ0s7QUFDYjtBQUNDO0FBQ29CO0FBVS9DLE1BQU1NLGFBQXdDO1FBQUMsRUFBRUMsU0FBUSxFQUFFOztJQUN6RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1ZLFNBQVNWLHNEQUFTQTtJQUN4QkQsZ0RBQVNBLENBQUM7UUFDUlksYUFBYUMsV0FBVztJQUMxQixHQUFHO1FBQUNOO1FBQVVFO0tBQVE7SUFFdEIsTUFBTUsscUJBQXFCO1FBQ3pCLElBQUksQ0FBQ1AsWUFBWSxDQUFDRSxTQUFTO1lBQ3ZCLDBDQUEwQztZQUMxQyxvREFBb0Q7WUFDcEQ7UUFDSjtRQUNBLElBQUk7WUFDSixNQUFNTSxXQUFXLE1BQU1iLGlEQUFTYyxDQUFDLGdDQUE0Q1AsT0FBWkYsVUFBUyxLQUFXLE9BQVJFO1lBQzdFSCxTQUFTUyxTQUFTRTtRQUNsQix1Q0FBdUM7UUFDdkMsdUVBQXVFO1FBQ3ZFLDJDQUEyQztRQUMzQyxFQUNBLE9BQU9DLE9BQU87WUFDVixJQUFJaEIsMERBQWtCaUIsQ0FBQ0QsUUFBUTtnQkFDM0IsSUFBSUEsTUFBTUgsWUFBWUcsTUFBTUgsU0FBU0ssV0FBVyxLQUFLO29CQUNqRCxxREFBcUQ7b0JBQ3JEVCxPQUFPVSxRQUFRO2dCQUNqQixPQUNHLElBQUlILE1BQU1ILFlBQVlHLE1BQU1ILFNBQVNLLFdBQVcsS0FBSztvQkFDdEQscURBQXFEO29CQUNyRFQsT0FBT1UsUUFBUTtnQkFDakI7Z0JBQ0ZDLFFBQVFKLE1BQU1BLE1BQU1LO1lBQ3RCLE9BRUs7Z0JBQ0gsNkJBQTZCO2dCQUM3QkQsUUFBUUosTUFBTUE7WUFDdEI7UUFDRjtJQUNGO0lBRUUscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVdyQixxRUFBV3NCOzswQkFDekIsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxVQUFVLENBQUNDLFFBQVV2QixZQUFZdUIsTUFBTUMsT0FBT0M7Ozs7OzswQkFHaEQsOERBQUNOO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxVQUFVLENBQUNDLFFBQVVyQixXQUFXcUIsTUFBTUMsT0FBT0M7Ozs7OzswQkFHL0MsOERBQUNDO2dCQUFPQyxTQUFTckI7MEJBQW9COzs7Ozs7Ozs7Ozs7QUFLM0M7R0E1RE1UOztRQUdXSixrREFBU0E7OztLQUhwQkk7QUE4RE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hGb3JtLnRzeD81MWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QgIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmludGVyZmFjZSBSZXBvc2l0b3J5IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaHRtbF91cmw6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgU2VhcmNoRm9ybVByb3BzIHtcclxuICBvblNlYXJjaDogKHJlcG9zaXRvcmllczogUmVwb3NpdG9yeVtdKSA9PiB2b2lkO1xyXG59XHJcbmNvbnN0IFNlYXJjaEZvcm06IFJlYWN0LkZDPFNlYXJjaEZvcm1Qcm9wcz4gPSAoeyBvblNlYXJjaCB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzZWFyY2hSZXN1bHRzXCIpO1xyXG4gIH0sIFt1c2VybmFtZSwga2V5d29yZF0pO1xyXG5cclxuICBjb25zdCBzZWFyY2hSZXBvc2l0b3JpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXVzZXJuYW1lIHx8ICFrZXl3b3JkKSB7XHJcbiAgICAgICAgLy91c2VybmFtZeOBi2tleXdvcmTjgYzlhaXlipvjgZXjgozjgarjgYTjgajjgY3jga/jgIFBUEnjg6rjgq/jgqjjgrnjg4jjgpLpgIHjgonjgarjgYRcclxuICAgICAgICAvL+OBk+OBhuOBmeOCi+OBk+OBqOOBp+OAgeS4gOaXpmdpdGh1YuOBrnVybOOBq+OBqOOBs+OAgeWFg+OBruODmuODvOOCuOOBq+aIu+OBo+OBpuOBjeOBn+OBqOOBjeOBq+OCqOODqeODvOOBjOeUn+OBmOOBquOBhOOBp+a4iOOCgOOAglxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3NlYXJjaC8ke3VzZXJuYW1lfS8ke2tleXdvcmR9YCk7XHJcbiAgICBvblNlYXJjaChyZXNwb25zZS5kYXRhKTtcclxuICAgIC8vIFNhdmUgc2VhcmNoIHJlc3VsdHMgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoUmVzdWx0cycsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIC8vbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzZWFyY2hSZXN1bHRzXCIpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byAvNTAwIHBhZ2UgaWYgdGhlIGVycm9yIHdhcyBhIDUwMCBlcnJvclxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoJy81MDAnKTtcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gLzQwNCBwYWdlIGlmIHRoZSBlcnJvciB3YXMgYSA0MDQgZXJyb3JcclxuICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvNDA0Jyk7XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgZ2VuZXJpYyBlcnJvcnMgaGVyZVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJHaXRIdWIgdXNlcm5hbWVcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJLZXl3b3JkXCJcclxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRLZXl3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaFJlcG9zaXRvcmllc30+XHJcbiAgICAgICAgU2VhcmNoXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiUmVhY3QiLCJzdHlsZXMiLCJTZWFyY2hGb3JtIiwib25TZWFyY2giLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2VhcmNoUmVwb3NpdG9yaWVzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJpc0F4aW9zRXJyb3IiLCJzdGF0dXMiLCJyZXBsYWNlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchForm.tsx\n"));

/***/ })

});