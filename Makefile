.PHONY: package

init::
	npm install

package:
	npm run build:package
