npm run build
cp dist/index.html dist/404.html

ROUTES=("work" "blog" "contacts")
for route in "${ROUTES[@]}"; do
  mkdir -p "dist/$route"
  cp dist/index.html "dist/$route/index.html"
done

for file in src/blogPosts/*.md; do
  slug=$(basename "$file" .md)
  mkdir -p "dist/blog/$slug"
  cp dist/index.html "dist/blog/$slug/index.html"
done

npx serve dist