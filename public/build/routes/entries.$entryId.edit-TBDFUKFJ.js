import {
  EntryForm,
  require_browser_umd
} from "/build/_shared/chunk-FDYFE2PA.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-ODA3LJ52.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-LFB5BV6I.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/entries.$entryId.edit.jsx
var import_node = __toESM(require_node(), 1);
var import_mongoose = __toESM(require_browser_umd(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\entries.$entryId.edit.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\entries.$entryId.edit.jsx"
  );
  import.meta.hot.lastModified = "1709148828559.9995";
}
function EditPage() {
  _s();
  let entry = useLoaderData();
  function handleSubmit(event) {
    if (!confirm("Are you sure?")) {
      event.preventDefault();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8 rounded-lg border border-gray-700/30 bg-gray-800/50 p-4 lg:mb-20 lg:p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-500 lg:text-base", children: "Edit entry" }, void 0, false, {
        fileName: "app/routes/entries.$entryId.edit.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EntryForm, { entry }, void 0, false, {
        fileName: "app/routes/entries.$entryId.edit.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/entries.$entryId.edit.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", onSubmit: handleSubmit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { name: "_action", value: "delete", className: "text-sm text-gray-600 underline", children: "Delete this entry..." }, void 0, false, {
      fileName: "app/routes/entries.$entryId.edit.jsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/entries.$entryId.edit.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/entries.$entryId.edit.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/entries.$entryId.edit.jsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(EditPage, "o1sExt1TnOEiEFz6bIVAHi/LOVo=", false, function() {
  return [useLoaderData];
});
_c = EditPage;
var _c;
$RefreshReg$(_c, "EditPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditPage as default
};
//# sourceMappingURL=/build/routes/entries.$entryId.edit-TBDFUKFJ.js.map
