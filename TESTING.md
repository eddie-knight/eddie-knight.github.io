# Testing GitHub Actions Locally

This document describes how to test the GitHub Actions workflow locally before pushing to GitHub.

## Quick Test (Recommended)

The easiest way to test the build is using the test script:

```bash
# Using npm
npm run test:build

# Using make
make test-build

# Or directly
./test-build.sh
```

This script mimics the GitHub Actions build job and will:
1. Install dependencies with `npm ci`
2. Build the project with `NODE_ENV=production`
3. Verify the `dist/` directory exists and contains the expected files

## Using `act` (Advanced)

For more comprehensive testing that runs the actual workflow file, you can use [`act`](https://github.com/nektos/act).

### Installation

```bash
# macOS
brew install act

# Or download from: https://github.com/nektos/act/releases
```

### Usage

```bash
# Run the workflow (will prompt for which workflow)
act

# Run a specific workflow file
act -W .github/workflows/pages.yml

# Run only the build job
act -j build

# Simulate a push event
act push

# Run with workflow_dispatch (manual trigger)
act workflow_dispatch
```

### Limitations

- `act` requires Docker to be running
- Some GitHub-specific actions (like `actions/configure-pages@v3` and `actions/deploy-pages@v2`) won't work locally, but you can test the build job
- The deploy job cannot be tested locally as it requires GitHub's environment

## Manual Testing

You can also manually run the build steps:

```bash
# Install dependencies
npm ci

# Build for production
NODE_ENV=production npm run build

# Verify output
ls -la dist/

# Preview the build
npm run preview
```

## Verifying the Build

After building, check that:
- ✅ `dist/` directory exists
- ✅ `dist/index.html` is present
- ✅ Assets are properly built (check `dist/assets/`)
- ✅ No build errors in the console

Then preview locally:
```bash
npm run preview
# or
make preview
```

This will start a local server (usually at http://localhost:4173) where you can preview the production build.


