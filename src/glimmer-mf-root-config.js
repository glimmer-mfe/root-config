import { registerApplication, start } from "single-spa";

registerApplication(
  "@glimmer-mf/navbar",
  () => System.import("@glimmer-mf/navbar"),
  (location) => true
);

registerApplication(
  "@glimmer-mf/people",
  () => System.import("@glimmer-mf/people"),
  (location) => location.pathname.startsWith("/people")
);

start({ urlRerouteOnly: true });
