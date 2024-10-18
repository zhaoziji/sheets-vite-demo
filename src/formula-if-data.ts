export const FORMULA_IF_DATA = {
    "id": "XGBQ9r",
    "sheetOrder": ["C07oI86i0S9sqBSp7mqhn", "esfePQ9lBZ68_24tVAVzo"],
    "name": "",
    "appVersion": "0.3.0",
    "locale": "zhCN",
    "styles": {
        "2rWMxl": {"bg": {"rgb": "#EFFBD0"}},
        "0B_XQP": {
            "ff": "Arial",
            "fs": 11,
            "it": 0,
            "bl": 0,
            "ul": {"s": 0},
            "st": {"s": 0},
            "ol": {"s": 0},
            "tr": {"a": 0, "v": 0},
            "td": 0,
            "bg": {"rgb": "#EFFBD0"},
            "ht": 0,
            "vt": 0,
            "tb": 0,
            "pd": {"t": 0, "b": 2, "l": 2, "r": 2},
            "cl": null,
            "n": null
        },
        "xNReZo": {
            "ff": "Arial",
            "fs": 11,
            "it": 0,
            "bl": 0,
            "ul": {"s": 0},
            "st": {"s": 0},
            "ol": {"s": 0},
            "tr": {"a": 0, "v": 0},
            "td": 0,
            "ht": 0,
            "vt": 0,
            "tb": 0,
            "pd": {"t": 0, "b": 2, "l": 2, "r": 2},
            "cl": null,
            "bg": null,
            "n": null
        }
    },
    "sheets": {
        "esfePQ9lBZ68_24tVAVzo": {
            "id": "esfePQ9lBZ68_24tVAVzo",
            "name": "Sheet1",
            "tabColor": "",
            "hidden": 0,
            "rowCount": 1000,
            "columnCount": 20,
            "zoomRatio": 1,
            "freeze": {"xSplit": 0, "ySplit": 0, "startRow": -1, "startColumn": -1},
            "scrollTop": 0,
            "scrollLeft": 0,
            "defaultColumnWidth": 88,
            "defaultRowHeight": 24,
            "mergeData": [],
            "cellData": {
                "6": {"2": {"v": "v0.4.0已修复", "t": 1}, "4": {"v": "正常", "t": 1}},
                "7": {"2": {"s": "2rWMxl", "v": 1, "t": 2}, "4": {"v": 1, "t": 2, "s": "0B_XQP"}},
                "29": {
                    "2": {"f": "=IF(C8<0,IF(C31<1,1,0.8),IF(C31<1,0.95,1))", "v": 0.95, "t": 2},
                    "4": {
                        "s": "xNReZo",
                        "f": "=IF(E8<0,IF(E31<1,1,0.8),IF(E31<1,0.95,1))",
                        "si": "EDVgVn",
                        "v": 0.95,
                        "t": 2
                    }
                },
                "30": {"2": {"f": "=C32/100", "v": 0.1, "t": 2}, "4": {"s": "0B_XQP", "v": 0.01, "t": 2}},
                "31": {"2": {"s": "2rWMxl", "v": 10, "t": 2}, "4": {"s": "xNReZo"}}
            },
            "rowData": {
                "6": {"hd": 0, "h": 24, "ah": 24},
                "7": {"hd": 0, "h": 24, "ah": 24},
                "29": {"hd": 0, "h": 24, "ah": 24},
                "30": {"hd": 0, "h": 24, "ah": 24},
                "31": {"hd": 0, "h": 24, "ah": 24}
            },
            "columnData": {"2": {"w": 88, "hd": 0}, "4": {"w": 88, "hd": 0}, "5": {"w": 88, "hd": 0}},
            "showGridlines": 1,
            "rowHeader": {"width": 46, "hidden": 0},
            "columnHeader": {"height": 20, "hidden": 0},
            "rightToLeft": 0
        }, "C07oI86i0S9sqBSp7mqhn": {
            "name": "工作表1",
            "id": "C07oI86i0S9sqBSp7mqhn",
            "tabColor": "",
            "hidden": 0,
            "rowCount": 1000,
            "columnCount": 20,
            "zoomRatio": 1,
            "freeze": {"xSplit": 0, "ySplit": 0, "startRow": -1, "startColumn": -1},
            "scrollTop": 0,
            "scrollLeft": 0,
            "defaultColumnWidth": 88,
            "defaultRowHeight": 24,
            "mergeData": [],
            "cellData": {
                "6": {"2": {"v": "异常", "t": 1}},
                "7": {"2": {"f": "=C9/C10-1", "v": 0, "t": 2}},
                "8": {
                    "2": {"s": "2rWMxl", "v": 1, "t": 2},
                    "3": {"v": "在 C9 重新输入数字 1，导致 C30 得到正确的计算结果 0.95；", "t": 1}
                },
                "9": {"2": {"s": "2rWMxl", "v": 1, "t": 2}},
                "23": {
                    "2": {"s": "2rWMxl", "v": 1, "t": 2},
                    "3": {"v": "在 C24 重新输入数字 1，导致 C30 得到错误的计算结果 1（期望得到 0.95）；", "t": 1}
                },
                "25": {"2": {"s": "2rWMxl", "v": 100, "t": 2}},
                "29": {"2": {"f": "=IF(C8<0,IF(C31<1,1,0.8),IF(C31<1,0.95,1))", "v": 1, "t": 2}},
                "30": {"2": {"f": "=C32/C33", "v": 0.01, "t": 2}},
                "31": {"2": {"f": "=C24/C45", "v": 1, "t": 2}},
                "32": {"2": {"f": "=C26/C45", "v": 100, "t": 2}},
                "44": {"2": {"s": "2rWMxl", "v": 1, "t": 2}}
            },
            "rowData": {
                "6": {"hd": 0, "h": 24, "ah": 24},
                "7": {"hd": 0, "h": 24, "ah": 24},
                "8": {"hd": 0, "h": 24, "ah": 24},
                "9": {"hd": 0, "h": 24, "ah": 24},
                "23": {"hd": 0, "h": 24, "ah": 24},
                "25": {"hd": 0, "h": 24, "ah": 24},
                "29": {"hd": 0, "h": 24, "ah": 24},
                "30": {"hd": 0, "h": 24, "ah": 24},
                "31": {"hd": 0, "h": 24, "ah": 24},
                "32": {"hd": 0, "h": 24, "ah": 24},
                "44": {"hd": 0, "h": 24, "ah": 24}
            },
            "columnData": {},
            "showGridlines": 1,
            "rowHeader": {"width": 46, "hidden": 0},
            "columnHeader": {"height": 20, "hidden": 0},
            "rightToLeft": 0
        }
    },
    "resources": [{"name": "SHEET_RANGE_PROTECTION_PLUGIN", "data": "{}"}, {
        "name": "SHEET_WORKSHEET_PROTECTION_PLUGIN",
        "data": "{}"
    }, {"name": "SHEET_WORKSHEET_PROTECTION_POINT_PLUGIN", "data": "{}"}, {
        "name": "SHEET_DEFINED_NAME_PLUGIN",
        "data": "{}"
    }, {"name": "SHEET_DATA_VALIDATION_PLUGIN", "data": "{}"}, {
        "name": "SHEET_AuthzIoMockService_PLUGIN",
        "data": "{}"
    }]
}
;
