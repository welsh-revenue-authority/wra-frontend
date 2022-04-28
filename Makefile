.PHONY: package

# current git branch
BRANCH := $(shell git rev-parse --abbrev-ref HEAD)

init::
	npm install

package:
	npm run build:package

commit-package::
	git add package/wra-frontend
	git diff --quiet && git diff --staged --quiet || (git commit -m "Rebuilt package $(shell date +%F)"; git push origin $(BRANCH))
