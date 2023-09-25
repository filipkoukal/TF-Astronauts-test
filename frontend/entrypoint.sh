#!/bin/sh

ROOT_DIR=/usr/share/nginx/html

# Replace env vars in JavaScript files
echo "Replacing env constants in JS"
for file in $ROOT_DIR/js/index.*.js* $ROOT_DIR/index.html $ROOT_DIR/js/chunk-vendors.*.js;
do
  echo "Processing $file ...";

  sed -i 's|BACKEND_ADR_value|'${VUE_APP_BACKEND_ADR}'|g' $file 
  sed -i 's|BACKEND_PORT_value|'${VUE_APP_BACKEND_PORT}'|g' $file

done

echo "Starting Nginx"
nginx -g 'daemon off;'