# BUILD_ENV: production, preview, development,
# This env is created in vercel dashboard
BUILD_ENV=$BUILD_ENV

# PROJECT_NAME: project-one, project-two
PROJECT_NAME=$PROJECT_NAME

echo "Vercel Build Environment (BUILD_ENV): $BUILD_ENV"

if [[ -z "$PROJECT_NAME" ]]; then
  echo "Error: Project name is not provided."
  exit 1
fi

if [[ "$BUILD_ENV" == "production" ]] ; then
  # Production environment
  echo "Production build is running: nx build $PROJECT_NAME --configuration=production"
  npx nx build $PROJECT_NAME --configuration=production
elif [[ "$BUILD_ENV" == "staging" ]] ; then
  # Preview (PR'lar için) environment
  echo "Preview build is running: nx build $PROJECT_NAME --configuration=staging"
  npx nx build $PROJECT_NAME --configuration=staging
else
  # Development environment
  echo "Development build is running: nx build $PROJECT_NAME --configuration=development"
  npx nx build $PROJECT_NAME --configuration=development
fi