.PHONY: install dev build preview test-build clean help

# Default target
.DEFAULT_GOAL := help

# Variables
NODE_MODULES := node_modules
DIST := dist

## Install dependencies
install:
	@echo "Installing dependencies..."
	npm install
	@echo "Dependencies installed successfully!"

## Start the development server
dev: start

## Start the development server and open in browser
start:
	@echo "Starting development server..."
	npm run dev -- --open

## Build for production
build:
	@echo "Building for production..."
	npm run build
	@echo "Build complete! Output in $(DIST)/"

## Preview production build
preview:
	@echo "Previewing production build..."
	@if [ ! -d "$(DIST)" ]; then \
		echo "Error: No build found. Run 'make build' first."; \
		exit 1; \
	fi
	npm run preview

## Test GitHub Actions build locally
test-build:
	@echo "Testing GitHub Actions build locally..."
	./test-build.sh

## Clean build artifacts and dependencies
clean:
	@echo "Cleaning up..."
	rm -rf $(DIST)
	rm -rf $(NODE_MODULES)
	@echo "Cleanup complete."

## Show help message
help:
	@echo "Personal Website Makefile"
	@echo ""
	@echo "Available targets:"
	@echo "  install   - Install npm dependencies"
	@echo "  dev       - Start development server (alias for start)"
	@echo "  start     - Start development server and open in browser"
	@echo "  build     - Build for production"
	@echo "  preview   - Preview production build"
	@echo "  test-build - Test GitHub Actions build locally"
	@echo "  clean     - Remove build artifacts and node_modules"
	@echo "  help      - Show this help message"
	@echo ""
	@echo "Examples:"
	@echo "  make install   - Install dependencies"
	@echo "  make start     - Start dev server"
	@echo "  make build     - Build for production"
	@echo "  make preview   - Preview production build"
	@echo "  make test-build - Test GitHub Actions build locally"

