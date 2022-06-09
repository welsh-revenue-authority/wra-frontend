.PHONY: package

# current git branch
BRANCH := $(shell git rev-parse --abbrev-ref HEAD)

init::
	npm install

test-scss-build:
	npm run build:stylesheets

package:
	npm run build:package

clean-package:
	rm -r package/wra-frontend
	git co package/wra-frontend

commit-package::
	git add package/wra-frontend
	git diff --quiet && git diff --staged --quiet || (git commit -m "Rebuilt package $(shell date +%F)"; git push origin $(BRANCH))
