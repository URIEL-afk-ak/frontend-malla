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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst navItems = [\n    {\n        href: '/',\n        label: 'Inicio',\n        icon: '🏠'\n    },\n    {\n        href: '/malla',\n        label: 'Malla',\n        icon: '📚'\n    },\n    {\n        href: '/malla-grafica',\n        label: 'Malla Gráfica',\n        icon: '🗺️'\n    },\n    {\n        href: '/notas',\n        label: 'Notas',\n        icon: '📝'\n    },\n    {\n        href: '/horario',\n        label: 'Horarios',\n        icon: '⏰'\n    }\n];\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            position: 'sticky',\n            top: 0,\n            zIndex: 100,\n            background: 'rgba(255,255,255,0.95)',\n            boxShadow: '0 2px 12px 0 rgba(37,99,235,0.07)',\n            borderBottom: '1.5px solid #e5e7eb',\n            backdropFilter: 'blur(4px)'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                maxWidth: 1200,\n                margin: '0 auto',\n                display: 'flex',\n                alignItems: 'center',\n                gap: '1.5rem',\n                padding: '0.7rem 1.5rem',\n                fontWeight: 600,\n                fontSize: '1.08rem',\n                letterSpacing: '0.01em'\n            },\n            children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: item.href,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        style: {\n                            display: 'flex',\n                            alignItems: 'center',\n                            gap: '0.5em',\n                            color: router.pathname === item.href ? '#2563eb' : '#23272f',\n                            background: router.pathname === item.href ? '#e0e7ff' : 'transparent',\n                            borderRadius: '10px',\n                            padding: '0.45em 1em',\n                            transition: 'background 0.18s, color 0.18s',\n                            boxShadow: router.pathname === item.href ? '0 2px 8px 0 #2563eb22' : 'none',\n                            fontWeight: router.pathname === item.href ? 700 : 600,\n                            textDecoration: 'none',\n                            outline: 'none'\n                        },\n                        tabIndex: 0,\n                        \"aria-current\": router.pathname === item.href ? 'page' : undefined,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: '1.2em'\n                                },\n                                children: item.icon\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this),\n                            item.label\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                }, item.href, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM2QjtBQUNXO0FBRXhDLE1BQU1FLFdBQVc7SUFDZjtRQUFFQyxNQUFNO1FBQUtDLE9BQU87UUFBVUMsTUFBTTtJQUFLO0lBQ3pDO1FBQUVGLE1BQU07UUFBVUMsT0FBTztRQUFTQyxNQUFNO0lBQUs7SUFDN0M7UUFBRUYsTUFBTTtRQUFrQkMsT0FBTztRQUFpQkMsTUFBTTtJQUFNO0lBQzlEO1FBQUVGLE1BQU07UUFBVUMsT0FBTztRQUFTQyxNQUFNO0lBQUs7SUFDN0M7UUFBRUYsTUFBTTtRQUFZQyxPQUFPO1FBQVlDLE1BQU07SUFBSTtDQUNsRDtBQUVjLFNBQVNDO0lBQ3RCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixxQkFDRSw4REFBQ087UUFBSUMsT0FBTztZQUNWQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLFdBQVc7WUFDWEMsY0FBYztZQUNkQyxnQkFBZ0I7UUFDbEI7a0JBQ0UsNEVBQUNDO1lBQUlSLE9BQU87Z0JBQ1ZTLFVBQVU7Z0JBQ1ZDLFFBQVE7Z0JBQ1JDLFNBQVM7Z0JBQ1RDLFlBQVk7Z0JBQ1pDLEtBQUs7Z0JBQ0xDLFNBQVM7Z0JBQ1RDLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZDLGVBQWU7WUFDakI7c0JBQ0d4QixTQUFTeUIsR0FBRyxDQUFDQyxDQUFBQSxxQkFDWiw4REFBQzVCLGtEQUFJQTtvQkFBaUJHLE1BQU15QixLQUFLekIsSUFBSTtvQkFBRTBCLGNBQWM7OEJBQ25ELDRFQUFDQzt3QkFDQ3JCLE9BQU87NEJBQ0xXLFNBQVM7NEJBQ1RDLFlBQVk7NEJBQ1pDLEtBQUs7NEJBQ0xTLE9BQU94QixPQUFPeUIsUUFBUSxLQUFLSixLQUFLekIsSUFBSSxHQUFHLFlBQVk7NEJBQ25EVSxZQUFZTixPQUFPeUIsUUFBUSxLQUFLSixLQUFLekIsSUFBSSxHQUFHLFlBQVk7NEJBQ3hEOEIsY0FBYzs0QkFDZFYsU0FBUzs0QkFDVFcsWUFBWTs0QkFDWnBCLFdBQVdQLE9BQU95QixRQUFRLEtBQUtKLEtBQUt6QixJQUFJLEdBQUcsMEJBQTBCOzRCQUNyRXFCLFlBQVlqQixPQUFPeUIsUUFBUSxLQUFLSixLQUFLekIsSUFBSSxHQUFHLE1BQU07NEJBQ2xEZ0MsZ0JBQWdCOzRCQUNoQkMsU0FBUzt3QkFDWDt3QkFDQUMsVUFBVTt3QkFDVkMsZ0JBQWMvQixPQUFPeUIsUUFBUSxLQUFLSixLQUFLekIsSUFBSSxHQUFHLFNBQVNvQzs7MENBRXZELDhEQUFDQztnQ0FBSy9CLE9BQU87b0NBQUNnQixVQUFVO2dDQUFPOzBDQUFJRyxLQUFLdkIsSUFBSTs7Ozs7OzRCQUMzQ3VCLEtBQUt4QixLQUFLOzs7Ozs7O21CQXBCSndCLEtBQUt6QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUEyQjlCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVzdWFyaW9cXERlc2t0b3BcXG1hbGxhXFxmcm9udGVuZFxcY29tcG9uZW50c1xcTmF2YmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgbmF2SXRlbXMgPSBbXHJcbiAgeyBocmVmOiAnLycsIGxhYmVsOiAnSW5pY2lvJywgaWNvbjogJ/Cfj6AnIH0sXHJcbiAgeyBocmVmOiAnL21hbGxhJywgbGFiZWw6ICdNYWxsYScsIGljb246ICfwn5OaJyB9LFxyXG4gIHsgaHJlZjogJy9tYWxsYS1ncmFmaWNhJywgbGFiZWw6ICdNYWxsYSBHcsOhZmljYScsIGljb246ICfwn5e677iPJyB9LFxyXG4gIHsgaHJlZjogJy9ub3RhcycsIGxhYmVsOiAnTm90YXMnLCBpY29uOiAn8J+TnScgfSxcclxuICB7IGhyZWY6ICcvaG9yYXJpbycsIGxhYmVsOiAnSG9yYXJpb3MnLCBpY29uOiAn4o+wJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IHN0eWxlPXt7XHJcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICB6SW5kZXg6IDEwMCxcclxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC45NSknLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDJweCAxMnB4IDAgcmdiYSgzNyw5OSwyMzUsMC4wNyknLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxLjVweCBzb2xpZCAjZTVlN2ViJyxcclxuICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDRweCknXHJcbiAgICB9fT5cclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIG1heFdpZHRoOiAxMjAwLFxyXG4gICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGdhcDogJzEuNXJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuN3JlbSAxLjVyZW0nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICBmb250U2l6ZTogJzEuMDhyZW0nLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAxZW0nLFxyXG4gICAgICB9fT5cclxuICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtpdGVtLmhyZWZ9IGhyZWY9e2l0ZW0uaHJlZn0gbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZ2FwOiAnMC41ZW0nLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gaXRlbS5ocmVmID8gJyMyNTYzZWInIDogJyMyMzI3MmYnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcm91dGVyLnBhdGhuYW1lID09PSBpdGVtLmhyZWYgPyAnI2UwZTdmZicgOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMC40NWVtIDFlbScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAwLjE4cywgY29sb3IgMC4xOHMnLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiByb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0uaHJlZiA/ICcwIDJweCA4cHggMCAjMjU2M2ViMjInIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSBpdGVtLmhyZWYgPyA3MDAgOiA2MDAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0uaHJlZiA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICcxLjJlbSd9fT57aXRlbS5pY29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJuYXZJdGVtcyIsImhyZWYiLCJsYWJlbCIsImljb24iLCJOYXZiYXIiLCJyb3V0ZXIiLCJuYXYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsImJvcmRlckJvdHRvbSIsImJhY2tkcm9wRmlsdGVyIiwiZGl2IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibWFwIiwiaXRlbSIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImNvbG9yIiwicGF0aG5hbWUiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJvdXRsaW5lIiwidGFiSW5kZXgiLCJhcmlhLWN1cnJlbnQiLCJ1bmRlZmluZWQiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Navbar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./context/PlanContext.js":
/*!********************************!*\
  !*** ./context/PlanContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlanProvider: () => (/* binding */ PlanProvider),\n/* harmony export */   usePlan: () => (/* binding */ usePlan)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PlanContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction PlanProvider({ children }) {\n    const [materias, setMaterias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [notas, setNotas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [horarios, setHorarios] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [estadisticas, setEstadisticas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const value = {\n        materias,\n        setMaterias,\n        notas,\n        setNotas,\n        horarios,\n        setHorarios,\n        estadisticas,\n        setEstadisticas,\n        loading,\n        setLoading,\n        error,\n        setError\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlanContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\context\\\\PlanContext.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\nfunction usePlan() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlanContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvUGxhbkNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNRyw0QkFBY0gsb0RBQWFBO0FBRTFCLFNBQVNJLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBRXZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDLENBQUM7SUFDbEQsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZ0IsUUFBUTtRQUNaWjtRQUFVQztRQUNWQztRQUFPQztRQUNQQztRQUFVQztRQUNWQztRQUFjQztRQUNkQztRQUFTQztRQUNUQztRQUFPQztJQUNUO0lBRUEscUJBQ0UsOERBQUNkLFlBQVlnQixRQUFRO1FBQUNELE9BQU9BO2tCQUMxQmI7Ozs7OztBQUdQO0FBRU8sU0FBU2U7SUFDZCxPQUFPbkIsaURBQVVBLENBQUNFO0FBQ3BCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVzdWFyaW9cXERlc2t0b3BcXG1hbGxhXFxmcm9udGVuZFxcY29udGV4dFxcUGxhbkNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQbGFuQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGFuUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gIGNvbnN0IFttYXRlcmlhcywgc2V0TWF0ZXJpYXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtub3Rhcywgc2V0Tm90YXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtob3Jhcmlvcywgc2V0SG9yYXJpb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlc3RhZGlzdGljYXMsIHNldEVzdGFkaXN0aWNhc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgbWF0ZXJpYXMsIHNldE1hdGVyaWFzLFxyXG4gICAgbm90YXMsIHNldE5vdGFzLFxyXG4gICAgaG9yYXJpb3MsIHNldEhvcmFyaW9zLFxyXG4gICAgZXN0YWRpc3RpY2FzLCBzZXRFc3RhZGlzdGljYXMsXHJcbiAgICBsb2FkaW5nLCBzZXRMb2FkaW5nLFxyXG4gICAgZXJyb3IsIHNldEVycm9yXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQbGFuQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BsYW5Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQbGFuKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFBsYW5Db250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlBsYW5Db250ZXh0IiwiUGxhblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtYXRlcmlhcyIsInNldE1hdGVyaWFzIiwibm90YXMiLCJzZXROb3RhcyIsImhvcmFyaW9zIiwic2V0SG9yYXJpb3MiLCJlc3RhZGlzdGljYXMiLCJzZXRFc3RhZGlzdGljYXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlUGxhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/PlanContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_materiaCard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/materiaCard.css */ \"(pages-dir-node)/./styles/materiaCard.css\");\n/* harmony import */ var _styles_materiaCard_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_materiaCard_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_mallaGrid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mallaGrid.css */ \"(pages-dir-node)/./styles/mallaGrid.css\");\n/* harmony import */ var _styles_mallaGrid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_mallaGrid_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"(pages-dir-node)/./components/Navbar.jsx\");\n/* harmony import */ var _context_PlanContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/PlanContext */ \"(pages-dir-node)/./context/PlanContext.js\");\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_PlanContext__WEBPACK_IMPORTED_MODULE_5__.PlanProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ0k7QUFDRjtBQUVTO0FBQ1k7QUFFdkMsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyRCxxQkFDQyw4REFBQ0gsOERBQVlBOzswQkFDWiw4REFBQ0QsMERBQU1BOzs7OzswQkFDUCw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVzdWFyaW9cXERlc2t0b3BcXG1hbGxhXFxmcm9udGVuZFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21hdGVyaWFDYXJkLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21hbGxhR3JpZC5jc3MnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCB7IFBsYW5Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvUGxhbkNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxQbGFuUHJvdmlkZXI+XHJcblx0XHRcdDxOYXZiYXIgLz5cclxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0PC9QbGFuUHJvdmlkZXI+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiUGxhblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/mallaGrid.css":
/*!******************************!*\
  !*** ./styles/mallaGrid.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/materiaCard.css":
/*!********************************!*\
  !*** ./styles/materiaCard.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();