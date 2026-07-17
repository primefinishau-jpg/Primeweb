import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { l as LoaderCircle, p as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/QuoteForm-Ez7BluJE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMAILJS_SERVICE_ID = "service_1hmadib";
var EMAILJS_TEMPLATE_ID = "template_l66vu98";
var EMAILJS_PUBLIC_KEY = "vFiLFSapNZ3GGTz2v";
var projectTypes = [
	"Full Home Renovation",
	"Kitchen Renovation",
	"Bathroom Renovation",
	"Commercial Fitout",
	"Other"
];
function QuoteForm({ compact = false }) {
	const formRef = (0, import_react.useRef)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!formRef.current) return;
		setStatus("sending");
		setErrorMsg("");
		try {
			await es_default.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
			setStatus("sent");
			formRef.current.reset();
		} catch (err) {
			console.error("EmailJS error:", err);
			setErrorMsg("Something went wrong — please try again or call us directly.");
			setStatus("error");
		}
	};
	if (status === "sent") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center gap-4 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-12 w-12 text-teal" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-semibold",
				children: "We've received your enquiry!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground max-w-xs",
				children: "One of our project managers will be in touch within 24 hours."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setStatus("idle"),
				className: "mt-2 text-sm text-teal underline underline-offset-4 hover:text-teal-deep transition-colors",
				children: "Submit another enquiry"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		ref: formRef,
		onSubmit,
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					name: "name",
					label: "Full name",
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					name: "phone",
					label: "Phone",
					type: "tel",
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				name: "email",
				label: "Email",
				type: "email",
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				name: "suburb",
				label: "Suburb / Postcode"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2",
				children: ["Project type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-teal",
					children: "*"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				name: "projectType",
				required: true,
				className: "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "Select a service…"
				}), projectTypes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: p,
					children: p
				}, p))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2",
				children: "Tell us about your project"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name: "details",
				rows: 4,
				className: "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm focus:border-primary focus:outline-none resize-none",
				placeholder: "Scope, timeline, indicative budget…"
			})] }),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-500 text-center",
				children: errorMsg
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: status === "sending",
				className: "w-full inline-flex items-center justify-center gap-2 rounded-sm bg-teal px-6 py-4 text-sm font-semibold text-white hover:bg-teal-deep transition-colors disabled:opacity-70",
				children: [status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), status === "sending" ? "Sending…" : "Request My Free Quote"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground text-center",
				children: "Replies within 24 hours · No obligation · Fully confidential"
			})
		]
	});
}
function Field({ name, label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2",
		children: [
			label,
			" ",
			required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-teal",
				children: "*"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm focus:border-primary focus:outline-none"
	})] });
}
//#endregion
export { QuoteForm as t };
