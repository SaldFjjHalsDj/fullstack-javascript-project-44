# Makefile
install:
	npm ci

brain-games:
	node /mnt/d/workspace/fullstack-javascript-project-44/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .