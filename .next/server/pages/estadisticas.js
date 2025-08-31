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
exports.id = "pages/estadisticas";
exports.ids = ["pages/estadisticas"];
exports.modules = {

/***/ "(pages-dir-node)/./components/EstadisticaCircular.jsx":
/*!********************************************!*\
  !*** ./components/EstadisticaCircular.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EstadisticaCircular)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!recharts */ \"(pages-dir-node)/__barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!./node_modules/recharts/lib/index.js\");\n\n\nconst COLORS = [\n    '#22c55e',\n    '#ffc107',\n    '#adb5bd'\n]; // Verde, amarillo, gris\nconst ESTADOS = [\n    'aprobada',\n    'regular',\n    'pendiente'\n];\n// Etiqueta personalizada centrada sobre cada segmento\nconst renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent })=>{\n    const RADIAN = Math.PI / 180;\n    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;\n    const x = cx + radius * Math.cos(-midAngle * RADIAN);\n    const y = cy + radius * Math.sin(-midAngle * RADIAN);\n    return percent > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n        x: x,\n        y: y,\n        fill: \"#23272f\",\n        textAnchor: \"middle\",\n        dominantBaseline: \"central\",\n        style: {\n            fontWeight: 'bold',\n            fontSize: '1.1em'\n        },\n        children: `${Math.round(percent * 100)}%`\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, undefined) : null;\n};\nfunction EstadisticaCircular({ resumen }) {\n    // Sumar totales por estado\n    const total = ESTADOS.reduce((acc, estado)=>acc + (resumen[estado] || 0), 0);\n    const data = ESTADOS.map((estado, i)=>({\n            name: estado.charAt(0).toUpperCase() + estado.slice(1),\n            value: resumen[estado] || 0\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100%',\n            height: 220,\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_1__.ResponsiveContainer, {\n            width: 220,\n            height: 220,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_1__.PieChart, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_1__.Pie, {\n                        data: data,\n                        dataKey: \"value\",\n                        nameKey: \"name\",\n                        cx: \"50%\",\n                        cy: \"50%\",\n                        outerRadius: 85,\n                        innerRadius: 45,\n                        stroke: \"#fff\",\n                        strokeWidth: 3,\n                        style: {\n                            filter: 'drop-shadow(0 2px 8px #23272f22)'\n                        },\n                        label: renderCustomLabel,\n                        labelLine: false,\n                        children: data.map((entry, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_1__.Cell, {\n                                fill: COLORS[i]\n                            }, `cell-${i}`, false, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {\n                        formatter: (value, name)=>[\n                                `${value} materias`,\n                                name\n                            ],\n                        wrapperStyle: {\n                            fontWeight: 600,\n                            fontSize: '1em',\n                            color: '#23272f',\n                            background: '#fff',\n                            borderRadius: 8,\n                            boxShadow: '0 2px 8px #23272f22'\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Cell_Legend_Pie_PieChart_ResponsiveContainer_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_1__.Legend, {\n                        formatter: (v)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontWeight: 600,\n                                    fontSize: '0.98em',\n                                    color: '#23272f'\n                                },\n                                children: v\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 35\n                            }, void 0),\n                        iconSize: 16\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\EstadisticaCircular.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRXN0YWRpc3RpY2FDaXJjdWxhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUY7QUFFckYsTUFBTU0sU0FBUztJQUFDO0lBQVc7SUFBVztDQUFVLEVBQUUsd0JBQXdCO0FBQzFFLE1BQU1DLFVBQVU7SUFBQztJQUFZO0lBQVc7Q0FBWTtBQUVwRCxzREFBc0Q7QUFDdEQsTUFBTUMsb0JBQW9CLENBQUMsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRTtJQUNoRixNQUFNQyxTQUFTQyxLQUFLQyxFQUFFLEdBQUc7SUFDekIsTUFBTUMsU0FBU04sY0FBYyxDQUFDQyxjQUFjRCxXQUFVLElBQUs7SUFDM0QsTUFBTU8sSUFBSVYsS0FBS1MsU0FBU0YsS0FBS0ksR0FBRyxDQUFDLENBQUNULFdBQVdJO0lBQzdDLE1BQU1NLElBQUlYLEtBQUtRLFNBQVNGLEtBQUtNLEdBQUcsQ0FBQyxDQUFDWCxXQUFXSTtJQUM3QyxPQUNFRCxVQUFVLGtCQUNSLDhEQUFDUztRQUFLSixHQUFHQTtRQUFHRSxHQUFHQTtRQUFHRyxNQUFLO1FBQVVDLFlBQVc7UUFBU0Msa0JBQWlCO1FBQVVDLE9BQU87WUFBQ0MsWUFBVztZQUFRQyxVQUFTO1FBQU87a0JBQ3hILEdBQUdiLEtBQUtjLEtBQUssQ0FBQ2hCLFVBQVUsS0FBSyxDQUFDLENBQUM7Ozs7O29CQUVoQztBQUVSO0FBRWUsU0FBU2lCLG9CQUFvQixFQUFFQyxPQUFPLEVBQUU7SUFDckQsMkJBQTJCO0lBQzNCLE1BQU1DLFFBQVExQixRQUFRMkIsTUFBTSxDQUFDLENBQUNDLEtBQUtDLFNBQVdELE1BQU9ILENBQUFBLE9BQU8sQ0FBQ0ksT0FBTyxJQUFJLElBQUk7SUFDNUUsTUFBTUMsT0FBTzlCLFFBQVErQixHQUFHLENBQUMsQ0FBQ0YsUUFBUUcsSUFBTztZQUN2Q0MsTUFBTUosT0FBT0ssTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS04sT0FBT08sS0FBSyxDQUFDO1lBQ3BEQyxPQUFPWixPQUFPLENBQUNJLE9BQU8sSUFBSTtRQUM1QjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJbEIsT0FBTztZQUFFbUIsT0FBTztZQUFRQyxRQUFRO1lBQUtDLFNBQVE7WUFBUUMsWUFBVztZQUFVQyxnQkFBZTtRQUFTO2tCQUNyRyw0RUFBQzdDLHFJQUFtQkE7WUFBQ3lDLE9BQU87WUFBS0MsUUFBUTtzQkFDdkMsNEVBQUMvQywwSEFBUUE7O2tDQUNQLDhEQUFDQyxxSEFBR0E7d0JBQ0ZvQyxNQUFNQTt3QkFDTmMsU0FBUTt3QkFDUkMsU0FBUTt3QkFDUjNDLElBQUc7d0JBQ0hDLElBQUc7d0JBQ0hHLGFBQWE7d0JBQ2JELGFBQWE7d0JBQ2J5QyxRQUFPO3dCQUNQQyxhQUFhO3dCQUNiM0IsT0FBTzs0QkFBQzRCLFFBQU87d0JBQWtDO3dCQUNqREMsT0FBT2hEO3dCQUNQaUQsV0FBVztrQ0FFVnBCLEtBQUtDLEdBQUcsQ0FBQyxDQUFDb0IsT0FBT25CLGtCQUNoQiw4REFBQ3JDLHNIQUFJQTtnQ0FBbUJzQixNQUFNbEIsTUFBTSxDQUFDaUMsRUFBRTsrQkFBNUIsQ0FBQyxLQUFLLEVBQUVBLEdBQUc7Ozs7Ozs7Ozs7a0NBRzFCLDhEQUFDcEMseUhBQU9BO3dCQUFDd0QsV0FBVyxDQUFDZixPQUFPSixPQUFTO2dDQUFDLEdBQUdJLE1BQU0sU0FBUyxDQUFDO2dDQUFFSjs2QkFBSzt3QkFBRW9CLGNBQWM7NEJBQUNoQyxZQUFXOzRCQUFLQyxVQUFTOzRCQUFPZ0MsT0FBTTs0QkFBV0MsWUFBVzs0QkFBUUMsY0FBYTs0QkFBR0MsV0FBVTt3QkFBcUI7Ozs7OztrQ0FDcE0sOERBQUM1RCx3SEFBTUE7d0JBQUN1RCxXQUFXTSxDQUFBQSxrQkFBSyw4REFBQ0M7Z0NBQUt2QyxPQUFPO29DQUFDQyxZQUFXO29DQUFLQyxVQUFTO29DQUFVZ0MsT0FBTTtnQ0FBUzswQ0FBSUk7Ozs7Ozt3QkFBV0UsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszSCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVc3VhcmlvXFxEZXNrdG9wXFxtYWxsYVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXEVzdGFkaXN0aWNhQ2lyY3VsYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpZUNoYXJ0LCBQaWUsIENlbGwsIFRvb2x0aXAsIExlZ2VuZCwgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmNvbnN0IENPTE9SUyA9IFsnIzIyYzU1ZScsICcjZmZjMTA3JywgJyNhZGI1YmQnXTsgLy8gVmVyZGUsIGFtYXJpbGxvLCBncmlzXHJcbmNvbnN0IEVTVEFET1MgPSBbJ2Fwcm9iYWRhJywgJ3JlZ3VsYXInLCAncGVuZGllbnRlJ107XHJcblxyXG4vLyBFdGlxdWV0YSBwZXJzb25hbGl6YWRhIGNlbnRyYWRhIHNvYnJlIGNhZGEgc2VnbWVudG9cclxuY29uc3QgcmVuZGVyQ3VzdG9tTGFiZWwgPSAoeyBjeCwgY3ksIG1pZEFuZ2xlLCBpbm5lclJhZGl1cywgb3V0ZXJSYWRpdXMsIHBlcmNlbnQgfSkgPT4ge1xyXG4gIGNvbnN0IFJBRElBTiA9IE1hdGguUEkgLyAxODA7XHJcbiAgY29uc3QgcmFkaXVzID0gaW5uZXJSYWRpdXMgKyAob3V0ZXJSYWRpdXMgLSBpbm5lclJhZGl1cykgKiAwLjU7XHJcbiAgY29uc3QgeCA9IGN4ICsgcmFkaXVzICogTWF0aC5jb3MoLW1pZEFuZ2xlICogUkFESUFOKTtcclxuICBjb25zdCB5ID0gY3kgKyByYWRpdXMgKiBNYXRoLnNpbigtbWlkQW5nbGUgKiBSQURJQU4pO1xyXG4gIHJldHVybiAoXHJcbiAgICBwZXJjZW50ID4gMCA/IChcclxuICAgICAgPHRleHQgeD17eH0geT17eX0gZmlsbD1cIiMyMzI3MmZcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCIgZG9taW5hbnRCYXNlbGluZT1cImNlbnRyYWxcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6J2JvbGQnLCBmb250U2l6ZTonMS4xZW0nfX0+XHJcbiAgICAgICAge2Ake01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWB9XHJcbiAgICAgIDwvdGV4dD5cclxuICAgICkgOiBudWxsXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVzdGFkaXN0aWNhQ2lyY3VsYXIoeyByZXN1bWVuIH0pIHtcclxuICAvLyBTdW1hciB0b3RhbGVzIHBvciBlc3RhZG9cclxuICBjb25zdCB0b3RhbCA9IEVTVEFET1MucmVkdWNlKChhY2MsIGVzdGFkbykgPT4gYWNjICsgKHJlc3VtZW5bZXN0YWRvXSB8fCAwKSwgMCk7XHJcbiAgY29uc3QgZGF0YSA9IEVTVEFET1MubWFwKChlc3RhZG8sIGkpID0+ICh7XHJcbiAgICBuYW1lOiBlc3RhZG8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBlc3RhZG8uc2xpY2UoMSksXHJcbiAgICB2YWx1ZTogcmVzdW1lbltlc3RhZG9dIHx8IDBcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogMjIwLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicgfX0+XHJcbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPXsyMjB9IGhlaWdodD17MjIwfT5cclxuICAgICAgICA8UGllQ2hhcnQ+XHJcbiAgICAgICAgICA8UGllXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIGRhdGFLZXk9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgIG5hbWVLZXk9XCJuYW1lXCJcclxuICAgICAgICAgICAgY3g9XCI1MCVcIlxyXG4gICAgICAgICAgICBjeT1cIjUwJVwiXHJcbiAgICAgICAgICAgIG91dGVyUmFkaXVzPXs4NX1cclxuICAgICAgICAgICAgaW5uZXJSYWRpdXM9ezQ1fVxyXG4gICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7ZmlsdGVyOidkcm9wLXNoYWRvdygwIDJweCA4cHggIzIzMjcyZjIyKSd9fVxyXG4gICAgICAgICAgICBsYWJlbD17cmVuZGVyQ3VzdG9tTGFiZWx9XHJcbiAgICAgICAgICAgIGxhYmVsTGluZT17ZmFsc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoZW50cnksIGkpID0+IChcclxuICAgICAgICAgICAgICA8Q2VsbCBrZXk9e2BjZWxsLSR7aX1gfSBmaWxsPXtDT0xPUlNbaV19IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9QaWU+XHJcbiAgICAgICAgICA8VG9vbHRpcCBmb3JtYXR0ZXI9eyh2YWx1ZSwgbmFtZSkgPT4gW2Ake3ZhbHVlfSBtYXRlcmlhc2AsIG5hbWVdfSB3cmFwcGVyU3R5bGU9e3tmb250V2VpZ2h0OjYwMCwgZm9udFNpemU6JzFlbScsIGNvbG9yOicjMjMyNzJmJywgYmFja2dyb3VuZDonI2ZmZicsIGJvcmRlclJhZGl1czo4LCBib3hTaGFkb3c6JzAgMnB4IDhweCAjMjMyNzJmMjInfX0vPlxyXG4gICAgICAgICAgPExlZ2VuZCBmb3JtYXR0ZXI9e3YgPT4gPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0OjYwMCwgZm9udFNpemU6JzAuOThlbScsIGNvbG9yOicjMjMyNzJmJ319Pnt2fTwvc3Bhbj59IGljb25TaXplPXsxNn0gLz5cclxuICAgICAgICA8L1BpZUNoYXJ0PlxyXG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQaWVDaGFydCIsIlBpZSIsIkNlbGwiLCJUb29sdGlwIiwiTGVnZW5kIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkNPTE9SUyIsIkVTVEFET1MiLCJyZW5kZXJDdXN0b21MYWJlbCIsImN4IiwiY3kiLCJtaWRBbmdsZSIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJwZXJjZW50IiwiUkFESUFOIiwiTWF0aCIsIlBJIiwicmFkaXVzIiwieCIsImNvcyIsInkiLCJzaW4iLCJ0ZXh0IiwiZmlsbCIsInRleHRBbmNob3IiLCJkb21pbmFudEJhc2VsaW5lIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJyb3VuZCIsIkVzdGFkaXN0aWNhQ2lyY3VsYXIiLCJyZXN1bWVuIiwidG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJlc3RhZG8iLCJkYXRhIiwibWFwIiwiaSIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidmFsdWUiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJkYXRhS2V5IiwibmFtZUtleSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZmlsdGVyIiwibGFiZWwiLCJsYWJlbExpbmUiLCJlbnRyeSIsImZvcm1hdHRlciIsIndyYXBwZXJTdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInYiLCJzcGFuIiwiaWNvblNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/EstadisticaCircular.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst navItems = [\n    {\n        href: '/malla',\n        label: 'Malla',\n        icon: '📚'\n    },\n    {\n        href: '/malla-grafica',\n        label: 'Malla Gráfica',\n        icon: '🗺️'\n    },\n    {\n        href: '/estadisticas',\n        label: 'Estadísticas',\n        icon: '📊'\n    },\n    {\n        href: '/notas',\n        label: 'Notas',\n        icon: '📝'\n    },\n    {\n        href: '/horario',\n        label: 'Horarios',\n        icon: '⏰'\n    }\n];\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            position: 'sticky',\n            top: 0,\n            zIndex: 100,\n            background: 'rgba(255,255,255,0.95)',\n            boxShadow: '0 2px 12px 0 rgba(37,99,235,0.07)',\n            borderBottom: '1.5px solid #e5e7eb',\n            backdropFilter: 'blur(4px)'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                maxWidth: 1200,\n                margin: '0 auto',\n                display: 'flex',\n                alignItems: 'center',\n                gap: '1.5rem',\n                padding: '0.7rem 1.5rem',\n                fontWeight: 600,\n                fontSize: '1.08rem',\n                letterSpacing: '0.01em'\n            },\n            children: navItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: item.href,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        style: {\n                            display: 'flex',\n                            alignItems: 'center',\n                            gap: '0.5em',\n                            color: router.pathname === item.href ? '#2563eb' : '#23272f',\n                            background: router.pathname === item.href ? '#e0e7ff' : 'transparent',\n                            borderRadius: '10px',\n                            padding: '0.45em 1em',\n                            transition: 'background 0.18s, color 0.18s',\n                            boxShadow: router.pathname === item.href ? '0 2px 8px 0 #2563eb22' : 'none',\n                            fontWeight: router.pathname === item.href ? 700 : 600,\n                            textDecoration: 'none',\n                            outline: 'none'\n                        },\n                        tabIndex: 0,\n                        \"aria-current\": router.pathname === item.href ? 'page' : undefined,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    fontSize: '1.2em'\n                                },\n                                children: item.icon\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this),\n                            item.label\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, this)\n                }, item.href, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\components\\\\Navbar.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM2QjtBQUNXO0FBRXhDLE1BQU1FLFdBQVc7SUFDZjtRQUFFQyxNQUFNO1FBQVVDLE9BQU87UUFBU0MsTUFBTTtJQUFLO0lBQzdDO1FBQUVGLE1BQU07UUFBa0JDLE9BQU87UUFBaUJDLE1BQU07SUFBTTtJQUM5RDtRQUFFRixNQUFNO1FBQWlCQyxPQUFPO1FBQWdCQyxNQUFNO0lBQUs7SUFDM0Q7UUFBRUYsTUFBTTtRQUFVQyxPQUFPO1FBQVNDLE1BQU07SUFBSztJQUM3QztRQUFFRixNQUFNO1FBQVlDLE9BQU87UUFBWUMsTUFBTTtJQUFJO0NBQ2xEO0FBRWMsU0FBU0M7SUFDdEIsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLHFCQUNFLDhEQUFDTztRQUFJQyxPQUFPO1lBQ1ZDLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxRQUFRO1lBQ1JDLFlBQVk7WUFDWkMsV0FBVztZQUNYQyxjQUFjO1lBQ2RDLGdCQUFnQjtRQUNsQjtrQkFDRSw0RUFBQ0M7WUFBSVIsT0FBTztnQkFDVlMsVUFBVTtnQkFDVkMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsS0FBSztnQkFDTEMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsVUFBVTtnQkFDVkMsZUFBZTtZQUNqQjtzQkFDR3hCLFNBQVN5QixHQUFHLENBQUNDLENBQUFBLHFCQUNaLDhEQUFDNUIsa0RBQUlBO29CQUFpQkcsTUFBTXlCLEtBQUt6QixJQUFJO29CQUFFMEIsY0FBYzs4QkFDbkQsNEVBQUNDO3dCQUNDckIsT0FBTzs0QkFDTFcsU0FBUzs0QkFDVEMsWUFBWTs0QkFDWkMsS0FBSzs0QkFDTFMsT0FBT3hCLE9BQU95QixRQUFRLEtBQUtKLEtBQUt6QixJQUFJLEdBQUcsWUFBWTs0QkFDbkRVLFlBQVlOLE9BQU95QixRQUFRLEtBQUtKLEtBQUt6QixJQUFJLEdBQUcsWUFBWTs0QkFDeEQ4QixjQUFjOzRCQUNkVixTQUFTOzRCQUNUVyxZQUFZOzRCQUNacEIsV0FBV1AsT0FBT3lCLFFBQVEsS0FBS0osS0FBS3pCLElBQUksR0FBRywwQkFBMEI7NEJBQ3JFcUIsWUFBWWpCLE9BQU95QixRQUFRLEtBQUtKLEtBQUt6QixJQUFJLEdBQUcsTUFBTTs0QkFDbERnQyxnQkFBZ0I7NEJBQ2hCQyxTQUFTO3dCQUNYO3dCQUNBQyxVQUFVO3dCQUNWQyxnQkFBYy9CLE9BQU95QixRQUFRLEtBQUtKLEtBQUt6QixJQUFJLEdBQUcsU0FBU29DOzswQ0FFdkQsOERBQUNDO2dDQUFLL0IsT0FBTztvQ0FBQ2dCLFVBQVU7Z0NBQU87MENBQUlHLEtBQUt2QixJQUFJOzs7Ozs7NEJBQzNDdUIsS0FBS3hCLEtBQUs7Ozs7Ozs7bUJBcEJKd0IsS0FBS3pCLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQTJCOUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXN1YXJpb1xcRGVza3RvcFxcbWFsbGFcXGZyb250ZW5kXFxjb21wb25lbnRzXFxOYXZiYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBuYXZJdGVtcyA9IFtcclxuICB7IGhyZWY6ICcvbWFsbGEnLCBsYWJlbDogJ01hbGxhJywgaWNvbjogJ/Cfk5onIH0sXHJcbiAgeyBocmVmOiAnL21hbGxhLWdyYWZpY2EnLCBsYWJlbDogJ01hbGxhIEdyw6FmaWNhJywgaWNvbjogJ/Cfl7rvuI8nIH0sXHJcbiAgeyBocmVmOiAnL2VzdGFkaXN0aWNhcycsIGxhYmVsOiAnRXN0YWTDrXN0aWNhcycsIGljb246ICfwn5OKJyB9LFxyXG4gIHsgaHJlZjogJy9ub3RhcycsIGxhYmVsOiAnTm90YXMnLCBpY29uOiAn8J+TnScgfSxcclxuICB7IGhyZWY6ICcvaG9yYXJpbycsIGxhYmVsOiAnSG9yYXJpb3MnLCBpY29uOiAn4o+wJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IHN0eWxlPXt7XHJcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICB6SW5kZXg6IDEwMCxcclxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LDI1NSwyNTUsMC45NSknLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDJweCAxMnB4IDAgcmdiYSgzNyw5OSwyMzUsMC4wNyknLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxLjVweCBzb2xpZCAjZTVlN2ViJyxcclxuICAgICAgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDRweCknXHJcbiAgICB9fT5cclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIG1heFdpZHRoOiAxMjAwLFxyXG4gICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGdhcDogJzEuNXJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzAuN3JlbSAxLjVyZW0nLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICBmb250U2l6ZTogJzEuMDhyZW0nLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAxZW0nLFxyXG4gICAgICB9fT5cclxuICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtpdGVtLmhyZWZ9IGhyZWY9e2l0ZW0uaHJlZn0gbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgZ2FwOiAnMC41ZW0nLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gaXRlbS5ocmVmID8gJyMyNTYzZWInIDogJyMyMzI3MmYnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcm91dGVyLnBhdGhuYW1lID09PSBpdGVtLmhyZWYgPyAnI2UwZTdmZicgOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMC40NWVtIDFlbScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAwLjE4cywgY29sb3IgMC4xOHMnLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiByb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0uaHJlZiA/ICcwIDJweCA4cHggMCAjMjU2M2ViMjInIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSBpdGVtLmhyZWYgPyA3MDAgOiA2MDAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0uaHJlZiA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICcxLjJlbSd9fT57aXRlbS5pY29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJuYXZJdGVtcyIsImhyZWYiLCJsYWJlbCIsImljb24iLCJOYXZiYXIiLCJyb3V0ZXIiLCJuYXYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwiekluZGV4IiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsImJvcmRlckJvdHRvbSIsImJhY2tkcm9wRmlsdGVyIiwiZGl2IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibWFwIiwiaXRlbSIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImNvbG9yIiwicGF0aG5hbWUiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJvdXRsaW5lIiwidGFiSW5kZXgiLCJhcmlhLWN1cnJlbnQiLCJ1bmRlZmluZWQiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Navbar.jsx\n");

/***/ }),

/***/ "(pages-dir-node)/./context/PlanContext.js":
/*!********************************!*\
  !*** ./context/PlanContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlanProvider: () => (/* binding */ PlanProvider),\n/* harmony export */   usePlan: () => (/* binding */ usePlan)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PlanContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction PlanProvider({ children }) {\n    const [materias, setMaterias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [notas, setNotas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [horarios, setHorarios] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [estadisticas, setEstadisticas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const value = {\n        materias,\n        setMaterias,\n        notas,\n        setNotas,\n        horarios,\n        setHorarios,\n        estadisticas,\n        setEstadisticas,\n        loading,\n        setLoading,\n        error,\n        setError\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlanContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\context\\\\PlanContext.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\nfunction usePlan() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PlanContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvUGxhbkNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNRyw0QkFBY0gsb0RBQWFBO0FBRTFCLFNBQVNJLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBRXZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1UsY0FBY0MsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDLENBQUM7SUFDbEQsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZ0IsUUFBUTtRQUNaWjtRQUFVQztRQUNWQztRQUFPQztRQUNQQztRQUFVQztRQUNWQztRQUFjQztRQUNkQztRQUFTQztRQUNUQztRQUFPQztJQUNUO0lBRUEscUJBQ0UsOERBQUNkLFlBQVlnQixRQUFRO1FBQUNELE9BQU9BO2tCQUMxQmI7Ozs7OztBQUdQO0FBRU8sU0FBU2U7SUFDZCxPQUFPbkIsaURBQVVBLENBQUNFO0FBQ3BCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVzdWFyaW9cXERlc2t0b3BcXG1hbGxhXFxmcm9udGVuZFxcY29udGV4dFxcUGxhbkNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQbGFuQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGFuUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gIGNvbnN0IFttYXRlcmlhcywgc2V0TWF0ZXJpYXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtub3Rhcywgc2V0Tm90YXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtob3Jhcmlvcywgc2V0SG9yYXJpb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlc3RhZGlzdGljYXMsIHNldEVzdGFkaXN0aWNhc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgbWF0ZXJpYXMsIHNldE1hdGVyaWFzLFxyXG4gICAgbm90YXMsIHNldE5vdGFzLFxyXG4gICAgaG9yYXJpb3MsIHNldEhvcmFyaW9zLFxyXG4gICAgZXN0YWRpc3RpY2FzLCBzZXRFc3RhZGlzdGljYXMsXHJcbiAgICBsb2FkaW5nLCBzZXRMb2FkaW5nLFxyXG4gICAgZXJyb3IsIHNldEVycm9yXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQbGFuQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1BsYW5Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQbGFuKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFBsYW5Db250ZXh0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlBsYW5Db250ZXh0IiwiUGxhblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJtYXRlcmlhcyIsInNldE1hdGVyaWFzIiwibm90YXMiLCJzZXROb3RhcyIsImhvcmFyaW9zIiwic2V0SG9yYXJpb3MiLCJlc3RhZGlzdGljYXMiLCJzZXRFc3RhZGlzdGljYXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlUGxhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/PlanContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Festadisticas&preferredRegion=&absolutePagePath=.%2Fpages%5Cestadisticas.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Festadisticas&preferredRegion=&absolutePagePath=.%2Fpages%5Cestadisticas.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\estadisticas.js */ \"(pages-dir-node)/./pages/estadisticas.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/estadisticas\",\n        pathname: \"/estadisticas\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/estadisticas\",\n    config,\n    userland: _pages_estadisticas_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZlc3RhZGlzdGljYXMmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2VzdGFkaXN0aWNhcy5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Y7QUFDaEM7QUFDRTtBQUMxRDtBQUN5RDtBQUNWO0FBQy9DO0FBQ3FEO0FBQzJCO0FBQ2hGO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxtREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQyxtREFBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQyxtREFBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQyxtREFBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsbURBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsbURBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQyxtREFBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQyxtREFBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQyxtREFBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQyxtREFBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQyxtREFBUTtBQUN6RDtBQUNPLHdCQUF3QixrR0FBZ0I7QUFDL0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFvQyxJQUFJLENBQUU7QUFDdkQsd0JBQXdCLE1BQXVDO0FBQy9EO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixvRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDO0FBQ00sZ0JBQWdCLDhGQUFVO0FBQ2pDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGVzdGFkaXN0aWNhcy5qc1wiO1xuaW1wb3J0IHsgZ2V0SGFuZGxlciB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvcGFnZXMtaGFuZGxlclwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvZXN0YWRpc3RpY2FzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9lc3RhZGlzdGljYXNcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBkaXN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfRElTVF9ESVIgfHwgJycsXG4gICAgcmVsYXRpdmVQcm9qZWN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfUFJPSkVDVF9ESVIgfHwgJycsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAvLyBkZWZhdWx0IGV4cG9ydCBtaWdodCBub3QgZXhpc3Qgd2hlbiBvcHRpbWl6ZWQgZm9yIGRhdGEgb25seVxuICAgICAgICBBcHA6IGFwcC5kZWZhdWx0LFxuICAgICAgICBEb2N1bWVudDogZG9jdW1lbnQuZGVmYXVsdFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBnZXRIYW5kbGVyKHtcbiAgICBzcmNQYWdlOiBcIi9lc3RhZGlzdGljYXNcIixcbiAgICBjb25maWcsXG4gICAgdXNlcmxhbmQsXG4gICAgcm91dGVNb2R1bGUsXG4gICAgZ2V0U3RhdGljUGF0aHMsXG4gICAgZ2V0U3RhdGljUHJvcHMsXG4gICAgZ2V0U2VydmVyU2lkZVByb3BzXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Festadisticas&preferredRegion=&absolutePagePath=.%2Fpages%5Cestadisticas.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_materiaCard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/materiaCard.css */ \"(pages-dir-node)/./styles/materiaCard.css\");\n/* harmony import */ var _styles_materiaCard_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_materiaCard_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_mallaGrid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/mallaGrid.css */ \"(pages-dir-node)/./styles/mallaGrid.css\");\n/* harmony import */ var _styles_mallaGrid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_mallaGrid_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"(pages-dir-node)/./components/Navbar.jsx\");\n/* harmony import */ var _context_PlanContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/PlanContext */ \"(pages-dir-node)/./context/PlanContext.js\");\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_PlanContext__WEBPACK_IMPORTED_MODULE_5__.PlanProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ0k7QUFDRjtBQUVTO0FBQ1k7QUFFdkMsU0FBU0UsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyRCxxQkFDQyw4REFBQ0gsOERBQVlBOzswQkFDWiw4REFBQ0QsMERBQU1BOzs7OzswQkFDUCw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzNCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVzdWFyaW9cXERlc2t0b3BcXG1hbGxhXFxmcm9udGVuZFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21hdGVyaWFDYXJkLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21hbGxhR3JpZC5jc3MnO1xyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCB7IFBsYW5Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvUGxhbkNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxQbGFuUHJvdmlkZXI+XHJcblx0XHRcdDxOYXZiYXIgLz5cclxuXHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG5cdFx0PC9QbGFuUHJvdmlkZXI+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiUGxhblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/estadisticas.js":
/*!*******************************!*\
  !*** ./pages/estadisticas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Estadisticas)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_EstadisticaCircular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EstadisticaCircular */ \"(pages-dir-node)/./components/EstadisticaCircular.jsx\");\n\n\n\nfunction Estadisticas() {\n    const [resumen, setResumen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        aprobada: 0,\n        regular: 0,\n        pendiente: 0\n    });\n    const [promedio, setPromedio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [creditosElectivas, setCreditosElectivas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Estadisticas.useEffect\": ()=>{\n            fetch(`${\"http://localhost:5000\"}/api/estadisticas/resumen`).then({\n                \"Estadisticas.useEffect\": (res)=>res.json()\n            }[\"Estadisticas.useEffect\"]).then({\n                \"Estadisticas.useEffect\": (json)=>{\n                    // Sumar totales por estado\n                    let totales = {\n                        aprobada: 0,\n                        regular: 0,\n                        pendiente: 0\n                    };\n                    Object.values(json.data).forEach({\n                        \"Estadisticas.useEffect\": (estados)=>{\n                            totales.aprobada += estados.aprobada || 0;\n                            totales.regular += estados.regular || 0;\n                            totales.pendiente += estados.pendiente || 0;\n                        }\n                    }[\"Estadisticas.useEffect\"]);\n                    setResumen(totales);\n                }\n            }[\"Estadisticas.useEffect\"]);\n            fetch(`${\"http://localhost:5000\"}/api/notas/promedio`).then({\n                \"Estadisticas.useEffect\": (res)=>res.json()\n            }[\"Estadisticas.useEffect\"]).then({\n                \"Estadisticas.useEffect\": (json)=>setPromedio(json.data.promedio)\n            }[\"Estadisticas.useEffect\"]);\n            fetch(`${\"http://localhost:5000\"}/api/malla`).then({\n                \"Estadisticas.useEffect\": (res)=>res.json()\n            }[\"Estadisticas.useEffect\"]).then({\n                \"Estadisticas.useEffect\": (json)=>{\n                    const electivasAprobadas = json.data.filter({\n                        \"Estadisticas.useEffect.electivasAprobadas\": (m)=>m.electiva && m.estado === 'aprobada'\n                    }[\"Estadisticas.useEffect.electivasAprobadas\"]);\n                    // Suponiendo que cada electiva tiene un campo creditos\n                    const creditos = electivasAprobadas.reduce({\n                        \"Estadisticas.useEffect.creditos\": (acc, m)=>acc + (m.creditos || 0)\n                    }[\"Estadisticas.useEffect.creditos\"], 0);\n                    setCreditosElectivas(creditos);\n                }\n            }[\"Estadisticas.useEffect\"]);\n        }\n    }[\"Estadisticas.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100vw',\n            minHeight: '100vh',\n            maxWidth: '100vw',\n            margin: '0',\n            padding: '4em 0 0 0',\n            background: '#e5e7eb',\n            boxSizing: 'border-box',\n            display: 'flex',\n            flexDirection: 'column',\n            alignItems: 'center',\n            overflowX: 'hidden'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        fontWeight: 700,\n                        fontSize: '2.1rem',\n                        marginBottom: '1.5rem'\n                    },\n                    children: \"Estad\\xedsticas\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        background: '#f8fafc',\n                        borderRadius: '12px',\n                        padding: '1.5em',\n                        marginBottom: '2em'\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EstadisticaCircular__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        resumen: resumen\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: 'flex',\n                        gap: '2em',\n                        marginBottom: '1.5em'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: '#e0f2fe',\n                                borderRadius: '10px',\n                                padding: '1em 2em',\n                                fontWeight: 600,\n                                fontSize: '1.1em',\n                                color: '#2563eb'\n                            },\n                            children: [\n                                \"Promedio general: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: 700,\n                                        fontSize: '1.2em'\n                                    },\n                                    children: promedio ? promedio.toFixed(2) : '-'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 156\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                background: '#f3e8ff',\n                                borderRadius: '10px',\n                                padding: '1em 2em',\n                                fontWeight: 600,\n                                fontSize: '1.1em',\n                                color: '#a21caf'\n                            },\n                            children: [\n                                \"Cr\\xe9ditos electivas aprobadas: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        fontWeight: 700,\n                                        fontSize: '1.2em'\n                                    },\n                                    children: creditosElectivas\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 168\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Usuario\\\\Desktop\\\\malla\\\\frontend\\\\pages\\\\estadisticas.js\",\n        lineNumber: 37,\n        columnNumber: 3\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2VzdGFkaXN0aWNhcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ3dCO0FBR3JELFNBQVNHO0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztRQUFFSyxVQUFVO1FBQUdDLFNBQVM7UUFBR0MsV0FBVztJQUFFO0lBQy9FLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLG1CQUFtQkMscUJBQXFCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRTNERCxnREFBU0E7a0NBQUM7WUFDUmEsTUFBTSxHQUFHQyx1QkFBK0IsQ0FBQyx5QkFBeUIsQ0FBQyxFQUNoRUcsSUFBSTswQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTt5Q0FDcEJGLElBQUk7MENBQUNFLENBQUFBO29CQUNKLDJCQUEyQjtvQkFDM0IsSUFBSUMsVUFBVTt3QkFBRWQsVUFBVTt3QkFBR0MsU0FBUzt3QkFBR0MsV0FBVztvQkFBRTtvQkFDdERhLE9BQU9DLE1BQU0sQ0FBQ0gsS0FBS0ksSUFBSSxFQUFFQyxPQUFPO2tEQUFDQyxDQUFBQTs0QkFDL0JMLFFBQVFkLFFBQVEsSUFBSW1CLFFBQVFuQixRQUFRLElBQUk7NEJBQ3hDYyxRQUFRYixPQUFPLElBQUlrQixRQUFRbEIsT0FBTyxJQUFJOzRCQUN0Q2EsUUFBUVosU0FBUyxJQUFJaUIsUUFBUWpCLFNBQVMsSUFBSTt3QkFDNUM7O29CQUNBSCxXQUFXZTtnQkFDYjs7WUFDRlAsTUFBTSxHQUFHQyx1QkFBK0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUMxREcsSUFBSTswQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTt5Q0FDcEJGLElBQUk7MENBQUNFLENBQUFBLE9BQVFULFlBQVlTLEtBQUtJLElBQUksQ0FBQ2QsUUFBUTs7WUFDOUNJLE1BQU0sR0FBR0MsdUJBQStCLENBQUMsVUFBVSxDQUFDLEVBQ2pERyxJQUFJOzBDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO3lDQUNwQkYsSUFBSTswQ0FBQ0UsQ0FBQUE7b0JBQ0osTUFBTU8scUJBQXFCUCxLQUFLSSxJQUFJLENBQUNJLE1BQU07cUVBQUNDLENBQUFBLElBQUtBLEVBQUVDLFFBQVEsSUFBSUQsRUFBRUUsTUFBTSxLQUFLOztvQkFDNUUsdURBQXVEO29CQUN2RCxNQUFNQyxXQUFXTCxtQkFBbUJNLE1BQU07MkRBQUMsQ0FBQ0MsS0FBS0wsSUFBTUssTUFBT0wsQ0FBQUEsRUFBRUcsUUFBUSxJQUFJOzBEQUFJO29CQUNoRm5CLHFCQUFxQm1CO2dCQUN2Qjs7UUFDSjtpQ0FBRyxFQUFFO0lBRUwscUJBQ0EsOERBQUNHO1FBQUlDLE9BQU87WUFBRUMsT0FBTztZQUFTQyxXQUFXO1lBQVNDLFVBQVU7WUFBU0MsUUFBUTtZQUFLQyxTQUFTO1lBQWFDLFlBQVk7WUFBV0MsV0FBVztZQUFjQyxTQUFTO1lBQVFDLGVBQWU7WUFBVUMsWUFBWTtZQUFVQyxXQUFXO1FBQVM7a0JBQ3hPLDRFQUFDWjtZQUFJYSxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdiLE9BQU87d0JBQUNjLFlBQVc7d0JBQUtDLFVBQVM7d0JBQVVDLGNBQWE7b0JBQVE7OEJBQUc7Ozs7Ozs4QkFDdkUsOERBQUNqQjtvQkFBSUMsT0FBTzt3QkFBQ00sWUFBVzt3QkFBV1csY0FBYTt3QkFBUVosU0FBUTt3QkFBU1csY0FBYTtvQkFBSzs4QkFDekYsNEVBQUNqRCx1RUFBbUJBO3dCQUFDRSxTQUFTQTs7Ozs7Ozs7Ozs7OEJBRWhDLDhEQUFDOEI7b0JBQUlDLE9BQU87d0JBQUNRLFNBQVE7d0JBQVFVLEtBQUk7d0JBQU9GLGNBQWE7b0JBQU87O3NDQUMxRCw4REFBQ2pCOzRCQUFJQyxPQUFPO2dDQUFDTSxZQUFXO2dDQUFXVyxjQUFhO2dDQUFRWixTQUFRO2dDQUFXUyxZQUFXO2dDQUFLQyxVQUFTO2dDQUFTSSxPQUFNOzRCQUFTOztnQ0FBRzs4Q0FBa0IsOERBQUNDO29DQUFLcEIsT0FBTzt3Q0FBQ2MsWUFBVzt3Q0FBS0MsVUFBUztvQ0FBTzs4Q0FBSXpDLFdBQVdBLFNBQVMrQyxPQUFPLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUNwTyw4REFBQ3RCOzRCQUFJQyxPQUFPO2dDQUFDTSxZQUFXO2dDQUFXVyxjQUFhO2dDQUFRWixTQUFRO2dDQUFXUyxZQUFXO2dDQUFLQyxVQUFTO2dDQUFTSSxPQUFNOzRCQUFTOztnQ0FBRzs4Q0FBOEIsOERBQUNDO29DQUFLcEIsT0FBTzt3Q0FBQ2MsWUFBVzt3Q0FBS0MsVUFBUztvQ0FBTzs4Q0FBSXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6TiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVc3VhcmlvXFxEZXNrdG9wXFxtYWxsYVxcZnJvbnRlbmRcXHBhZ2VzXFxlc3RhZGlzdGljYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVzdGFkaXN0aWNhQ2lyY3VsYXIgZnJvbSAnLi4vY29tcG9uZW50cy9Fc3RhZGlzdGljYUNpcmN1bGFyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFc3RhZGlzdGljYXMoKSB7XHJcbiAgY29uc3QgW3Jlc3VtZW4sIHNldFJlc3VtZW5dID0gdXNlU3RhdGUoeyBhcHJvYmFkYTogMCwgcmVndWxhcjogMCwgcGVuZGllbnRlOiAwIH0pO1xyXG4gIGNvbnN0IFtwcm9tZWRpbywgc2V0UHJvbWVkaW9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2NyZWRpdG9zRWxlY3RpdmFzLCBzZXRDcmVkaXRvc0VsZWN0aXZhc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9lc3RhZGlzdGljYXMvcmVzdW1lbmApXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAvLyBTdW1hciB0b3RhbGVzIHBvciBlc3RhZG9cclxuICAgICAgICBsZXQgdG90YWxlcyA9IHsgYXByb2JhZGE6IDAsIHJlZ3VsYXI6IDAsIHBlbmRpZW50ZTogMCB9O1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoanNvbi5kYXRhKS5mb3JFYWNoKGVzdGFkb3MgPT4ge1xyXG4gICAgICAgICAgdG90YWxlcy5hcHJvYmFkYSArPSBlc3RhZG9zLmFwcm9iYWRhIHx8IDA7XHJcbiAgICAgICAgICB0b3RhbGVzLnJlZ3VsYXIgKz0gZXN0YWRvcy5yZWd1bGFyIHx8IDA7XHJcbiAgICAgICAgICB0b3RhbGVzLnBlbmRpZW50ZSArPSBlc3RhZG9zLnBlbmRpZW50ZSB8fCAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFJlc3VtZW4odG90YWxlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpL25vdGFzL3Byb21lZGlvYClcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGpzb24gPT4gc2V0UHJvbWVkaW8oanNvbi5kYXRhLnByb21lZGlvKSk7XHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvbWFsbGFgKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlY3RpdmFzQXByb2JhZGFzID0ganNvbi5kYXRhLmZpbHRlcihtID0+IG0uZWxlY3RpdmEgJiYgbS5lc3RhZG8gPT09ICdhcHJvYmFkYScpO1xyXG4gICAgICAgIC8vIFN1cG9uaWVuZG8gcXVlIGNhZGEgZWxlY3RpdmEgdGllbmUgdW4gY2FtcG8gY3JlZGl0b3NcclxuICAgICAgICBjb25zdCBjcmVkaXRvcyA9IGVsZWN0aXZhc0Fwcm9iYWRhcy5yZWR1Y2UoKGFjYywgbSkgPT4gYWNjICsgKG0uY3JlZGl0b3MgfHwgMCksIDApO1xyXG4gICAgICAgIHNldENyZWRpdG9zRWxlY3RpdmFzKGNyZWRpdG9zKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDB2dycsIG1pbkhlaWdodDogJzEwMHZoJywgbWF4V2lkdGg6ICcxMDB2dycsIG1hcmdpbjogJzAnLCBwYWRkaW5nOiAnNGVtIDAgMCAwJywgYmFja2dyb3VuZDogJyNlNWU3ZWInLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG92ZXJmbG93WDogJ2hpZGRlbicgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxoMSBzdHlsZT17e2ZvbnRXZWlnaHQ6NzAwLCBmb250U2l6ZTonMi4xcmVtJywgbWFyZ2luQm90dG9tOicxLjVyZW0nfX0+RXN0YWTDrXN0aWNhczwvaDE+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6JyNmOGZhZmMnLCBib3JkZXJSYWRpdXM6JzEycHgnLCBwYWRkaW5nOicxLjVlbScsIG1hcmdpbkJvdHRvbTonMmVtJ319PlxyXG4gICAgICAgICAgPEVzdGFkaXN0aWNhQ2lyY3VsYXIgcmVzdW1lbj17cmVzdW1lbn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGdhcDonMmVtJywgbWFyZ2luQm90dG9tOicxLjVlbSd9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOicjZTBmMmZlJywgYm9yZGVyUmFkaXVzOicxMHB4JywgcGFkZGluZzonMWVtIDJlbScsIGZvbnRXZWlnaHQ6NjAwLCBmb250U2l6ZTonMS4xZW0nLCBjb2xvcjonIzI1NjNlYid9fT5Qcm9tZWRpbyBnZW5lcmFsOiA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6NzAwLCBmb250U2l6ZTonMS4yZW0nfX0+e3Byb21lZGlvID8gcHJvbWVkaW8udG9GaXhlZCgyKSA6ICctJ308L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDonI2YzZThmZicsIGJvcmRlclJhZGl1czonMTBweCcsIHBhZGRpbmc6JzFlbSAyZW0nLCBmb250V2VpZ2h0OjYwMCwgZm9udFNpemU6JzEuMWVtJywgY29sb3I6JyNhMjFjYWYnfX0+Q3LDqWRpdG9zIGVsZWN0aXZhcyBhcHJvYmFkYXM6IDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDo3MDAsIGZvbnRTaXplOicxLjJlbSd9fT57Y3JlZGl0b3NFbGVjdGl2YXN9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRXN0YWRpc3RpY2FDaXJjdWxhciIsIkVzdGFkaXN0aWNhcyIsInJlc3VtZW4iLCJzZXRSZXN1bWVuIiwiYXByb2JhZGEiLCJyZWd1bGFyIiwicGVuZGllbnRlIiwicHJvbWVkaW8iLCJzZXRQcm9tZWRpbyIsImNyZWRpdG9zRWxlY3RpdmFzIiwic2V0Q3JlZGl0b3NFbGVjdGl2YXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidGhlbiIsInJlcyIsImpzb24iLCJ0b3RhbGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiZGF0YSIsImZvckVhY2giLCJlc3RhZG9zIiwiZWxlY3RpdmFzQXByb2JhZGFzIiwiZmlsdGVyIiwibSIsImVsZWN0aXZhIiwiZXN0YWRvIiwiY3JlZGl0b3MiLCJyZWR1Y2UiLCJhY2MiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImJveFNpemluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93WCIsImNsYXNzTmFtZSIsImgxIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiZ2FwIiwiY29sb3IiLCJzcGFuIiwidG9GaXhlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/estadisticas.js\n");

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

/***/ "(pages-dir-node)/__barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!./node_modules/recharts/lib/index.js":
/*!*****************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Cell,Legend,Pie,PieChart,ResponsiveContainer,Tooltip!=!./node_modules/recharts/lib/index.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Usuario_Desktop_malla_frontend_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/recharts/lib/index.js */ "(pages-dir-node)/./node_modules/recharts/lib/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_Usuario_Desktop_malla_frontend_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_Usuario_Desktop_malla_frontend_node_modules_recharts_lib_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../../shared/lib/no-fallback-error.external":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "decimal.js-light":
/*!***********************************!*\
  !*** external "decimal.js-light" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("decimal.js-light");

/***/ }),

/***/ "es-toolkit":
/*!*****************************!*\
  !*** external "es-toolkit" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit");

/***/ }),

/***/ "es-toolkit/compat/get":
/*!****************************************!*\
  !*** external "es-toolkit/compat/get" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/get");

/***/ }),

/***/ "es-toolkit/compat/isEqual":
/*!********************************************!*\
  !*** external "es-toolkit/compat/isEqual" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/isEqual");

/***/ }),

/***/ "es-toolkit/compat/isPlainObject":
/*!**************************************************!*\
  !*** external "es-toolkit/compat/isPlainObject" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/isPlainObject");

/***/ }),

/***/ "es-toolkit/compat/last":
/*!*****************************************!*\
  !*** external "es-toolkit/compat/last" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/last");

/***/ }),

/***/ "es-toolkit/compat/maxBy":
/*!******************************************!*\
  !*** external "es-toolkit/compat/maxBy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/maxBy");

/***/ }),

/***/ "es-toolkit/compat/minBy":
/*!******************************************!*\
  !*** external "es-toolkit/compat/minBy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/minBy");

/***/ }),

/***/ "es-toolkit/compat/omit":
/*!*****************************************!*\
  !*** external "es-toolkit/compat/omit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/omit");

/***/ }),

/***/ "es-toolkit/compat/range":
/*!******************************************!*\
  !*** external "es-toolkit/compat/range" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/range");

/***/ }),

/***/ "es-toolkit/compat/sortBy":
/*!*******************************************!*\
  !*** external "es-toolkit/compat/sortBy" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/sortBy");

/***/ }),

/***/ "es-toolkit/compat/sumBy":
/*!******************************************!*\
  !*** external "es-toolkit/compat/sumBy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/sumBy");

/***/ }),

/***/ "es-toolkit/compat/throttle":
/*!*********************************************!*\
  !*** external "es-toolkit/compat/throttle" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/throttle");

/***/ }),

/***/ "es-toolkit/compat/uniqBy":
/*!*******************************************!*\
  !*** external "es-toolkit/compat/uniqBy" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("es-toolkit/compat/uniqBy");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("reselect");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tiny-invariant":
/*!*********************************!*\
  !*** external "tiny-invariant" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("tiny-invariant");

/***/ }),

/***/ "use-sync-external-store/shim/with-selector":
/*!*************************************************************!*\
  !*** external "use-sync-external-store/shim/with-selector" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("use-sync-external-store/shim/with-selector");

/***/ }),

/***/ "victory-vendor/d3-scale":
/*!******************************************!*\
  !*** external "victory-vendor/d3-scale" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-scale");

/***/ }),

/***/ "victory-vendor/d3-shape":
/*!******************************************!*\
  !*** external "victory-vendor/d3-shape" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-shape");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/recharts"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Festadisticas&preferredRegion=&absolutePagePath=.%2Fpages%5Cestadisticas.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();