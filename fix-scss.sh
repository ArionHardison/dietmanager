#!/bin/bash

# Fix SCSS imports in all components
cd dietmanager-client/components

# Find all Vue files with <style lang="scss"> that don't already have the import
for file in $(grep -l '<style lang="scss">' **/*.vue); do
  # Check if the file already has the import
  if ! grep -q "@import '~/assets/scss/_config.scss';" "$file"; then
    echo "Fixing $file"
    # Add the import right after <style lang="scss">
    sed -i '' '/<style lang="scss">/a\
@import '"'"'~/assets/scss/_config.scss'"'"';\
' "$file"
  fi
done

echo "Done fixing SCSS imports"