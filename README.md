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
