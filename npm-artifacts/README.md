# npm-artifacts

`@uipath/featureflags-node-sdk` from UiPath's ServiceCommon Azure Artifacts
feed, pinned old. Dependabot cannot authenticate to the feed's npm registry,
so its bump was opened by hand in Dependabot's commit format. greenlight
treats a `@uipath` version that the lock resolves from a `uipath` feed, and
that the feed says was published to it rather than proxied from npmjs, as
UiPath's own and does not age it (TOD-727).
