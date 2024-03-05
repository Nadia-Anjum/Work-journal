import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  Form,
  useActionData,
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

// app/routes/login.jsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.jsx"
  );
  import.meta.hot.lastModified = "1709192776982.5205";
}
function LoginPage() {
  _s();
  const data = useLoaderData();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-8 max-w-xs lg:max-w-sm", children: data.isAdmin ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "You're signed in!" }, void 0, false, {
    fileName: "app/routes/login.jsx",
    lineNumber: 36,
    columnNumber: 23
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "w-full rounded-md border-gray-700 bg-gray-800 text-white focus:border-sky-600 focus:ring-sky-600", type: "email", name: "email", required: true, placeholder: "Email" }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "w-full rounded-md border-gray-700 bg-gray-800 text-white focus:border-sky-600 focus:ring-sky-600", type: "password", name: "password", required: true, placeholder: "Password" }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.jsx",
      lineNumber: 37,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full rounded-md bg-sky-600 px-3 py-2 font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-gray-900", children: "Log in" }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 font-medium text-red-500", children: actionData.error }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 47,
      columnNumber: 33
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.jsx",
    lineNumber: 36,
    columnNumber: 50
  }, this) }, void 0, false, {
    fileName: "app/routes/login.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(LoginPage, "1e25SFC8uAEJL70nU/asewoV2OE=", false, function() {
  return [useLoaderData, useActionData];
});
_c = LoginPage;
var _c;
$RefreshReg$(_c, "LoginPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginPage as default
};
//# sourceMappingURL=/build/routes/login-BMBXX2AC.js.map
