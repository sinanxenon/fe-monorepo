# PROJECT_NAME: project-one, project-two
# BUILD_ENV: production, preview, development,

echo "Vercel Build Environment (BUILD_ENV): $BUILD_ENV"

if [ -z "$PROJECT_NAME" ]; then
  echo "Error: Project name is not provided."
  exit 1
fi

if [ "$BUILD_ENV" = "production" ]; then
  echo "Production build is running: nx build $PROJECT_NAME --configuration=production"
  npx nx build $PROJECT_NAME --configuration=production
elif [ "$BUILD_ENV" = "staging" ]; then
  echo "Staging build is running: nx build $PROJECT_NAME --configuration=staging"
  npx nx build $PROJECT_NAME --configuration=staging
else
  echo "Development build is running: nx build $PROJECT_NAME --configuration=development"
  npx nx build $PROJECT_NAME --configuration=development
fi