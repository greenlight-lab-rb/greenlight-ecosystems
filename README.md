# greenlight-ecosystems

Package-manager fixtures for [greenlight](https://github.com/UiPath/trustops-development/tree/main/greenlight)'s
end-to-end replay tests. **This is not a real project.** Every directory pins a
deliberately old version so Dependabot opens a real pull request in that
package manager's own shape; greenlight's tests are recorded from those pull
requests. Do not merge them.

| Directory | Package manager | Manifests |
|---|---|---|
| `pip/` | pip | `requirements.txt` |
| `pip-dir/requirements/` | pip | `base.txt` (a requirements file not named `requirements*.txt`) |
| `poetry/` | Poetry | `pyproject.toml`, `poetry.lock` |
| `pipenv/` | Pipenv | `Pipfile`, `Pipfile.lock` (one exact pin, one `*`) |
| `yarn/` | yarn classic | `package.json`, `yarn.lock` |
| `docker/` | Docker | `Dockerfile` |
| `uv/` | uv | `pyproject.toml`, `uv.lock` |
| `pip-compile/` | pip-compile | `requirements.in` + compiled `requirements.txt` |
| `pnpm-lockonly/` | pnpm | `pnpm-lock.yaml` only (`versioning-strategy: lockfile-only`) |
| `poetry-lockonly/` | Poetry | `poetry.lock` only (`versioning-strategy: lockfile-only`) |
| `docker-digest/` | Docker | `FROM image:tag@sha256:digest` |
| `pip-group/` | pip | two dependencies in one grouped pull request |
| `nuget/` | NuGet | a `.csproj` restoring from nuget.org; `Program.cs` uses the package |
| `nuget-azure/` | NuGet | a package only on UiPath's anonymous `Public.Feeds/UiPath-Official` Azure Artifacts feed; majors ignored |
| `gomod/` | Go modules | `go.mod` + `go.sum`; `main.go` imports the module |
| `npm/` | npm | `package.json` + `package-lock.json`; `index.js` requires the package; its own `.greenlight.yml` onboards it in approve mode |
| `npm-api/` | npm | `server.ts` calls `Server.emitWithAck`, which socket.io removed after 4.7.0: the bump is an API break the risk gate must call high |
