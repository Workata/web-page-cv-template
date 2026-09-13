
.PHONY: init
init:
	@echo -e "[Makefile] Init...\n"
	npm install
	cp -n .env.example .env

.PHONY: run
run:
	@echo -e "[Makefile] Serving CV locally...\n"
	npm run serve

.PHONY: export
export:
	@echo -e "[Makefile] Exporting CV...\n"
	npm run export
