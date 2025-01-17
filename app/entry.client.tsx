import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";

const documentElement = document.documentElement;
const apply = (n: HTMLElement) => document.replaceChild(n, documentElement);

//@ts-ignore
hydrate(<RemixBrowser />, {
  childNodes: [documentElement],
  firstChild: documentElement,
  insertBefore: apply,
  appendChild: apply,
});
