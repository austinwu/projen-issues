import { JsiiProject } from "projen/lib/cdk";

const project = new JsiiProject({
  author: "Austin Wu",
  authorAddress: "austinwu32@gmail.com",
  defaultReleaseBranch: "main",
  name: "projen-issues",
  projenrcTs: true,
  repositoryUrl: "https://github.com/austinwu32/projen-issues.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();
